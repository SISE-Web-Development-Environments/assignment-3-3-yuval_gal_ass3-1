<template>
  <div class="home-main-view">
    <div class="column left-side">
      <PreviewRecipe :recipe="loadedRecipesArray[currentIndex]" :lastRecipe="back" :nextRecipe="next" :key="currentIndex"/>
    </div>
    <div class="column right-side">
      <h1>Right</h1>
    </div>
  </div>
</template>

<script>
import PreviewRecipe from '@/components/PreviewRecipe'
import axios from 'axios'

async function getRecipesData () {
  let randomIds
  await axios
    .get('http://localhost/recipes/get_random_recipe_id?numberToRetrieve=3')
    .then(response => (randomIds = response.data))
    .then(response => console.log('The random IDs from axios: ' + response))
  let recipeId
  const recipesArray = []
  for (recipeId in randomIds) {
    await fetch('http://localhost/recipes/preview/recId/' + randomIds[recipeId], {
      method: 'GET'
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then((jsonData) => {
        console.log(jsonData)
        recipesArray.push(jsonData)
      })
  }
  return {
    recipesArray: recipesArray,
    length: recipesArray.length
  }
}

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data () {
    return {
      currentIndex: 0,
      arrayLength: 0,
      loadedRecipesArray: []
    }
  },
  // computed: {
  //   getIds () {
  //     return this.getRandomIds()
  //   }
  // },
  asyncComputed: {
    async getRandomRecipes () {
      // return [1, 2, 3]
      const { recipesArray, length } = await getRecipesData()
      this.arrayLength = length
      this.loadedRecipesArray = recipesArray
    }
  },
  methods: {
    next () {
      if (this.currentIndex + 1 <= this.arrayLength - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },
    back () {
      if (this.currentIndex - 1 >= 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.arrayLength - 1
      }
    }
  },
  components: {
    PreviewRecipe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .column {
    float: left;
    width: 50%;
  }

  /* Clear floats after the columns */
  .home-main-view:after {
    content: "";
    display: table;
    clear: both;
  }
  .left-side {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .right-side{
    text-align: right;
  }
</style>
