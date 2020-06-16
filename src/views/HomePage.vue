<template>
  <div class="home-main-view">
    <div class="column left-side">
      <h1>Some of our Recipes</h1>
      <carousel class="caruosel" :loop="true" :autoplay="true" :paginationColor="color" :navigationEnabled="true" :autoplayHoverPause="true" :perPage=1>
        <slide class="slide" v-for="recipe in loadedRecipesArray" :key="recipe.index">
          <PreviewRecipe :recipe="recipe"></PreviewRecipe>
        </slide>
      </carousel>
    </div>
    <div class="column right-side">
<!--      <h1>Right</h1>-->
      <LoginComp/>
    </div>
  </div>
</template>

<script>
// import PreviewRecipe from '@/components/PreviewRecipe'
import LoginComp from '@/components/Login'
import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios'
import PreviewRecipe from '../components/PreviewRecipe'

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
      loadedRecipesArray: [],
      color: '#8c8caa'
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
    PreviewRecipe,
    // PreviewRecipe,
    LoginComp,
    Carousel,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Kalam&display=swap);
  h1 {
    margin-left: -36%;
    margin-top: -8%;
    font-weight: 600;
    display:inline-block;
    font-family: 'Kalam', sans-serif !important;
    /*margin: 40px 8px 10px 8px;*/
    /*<!--margin: -5% 0 0;-->*/
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(170,75,37,0.9472163865546218) 20%, rgba(170,75,37,1) 50%, rgba(170,75,37,0.9556197478991597) 74%, rgba(255,0,0,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
  /*.left-side {*/
  /*  text-align: center;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*}*/
  .right-side{
    text-align: right;
  }

  .slide{
    transform: translateX(20px);
  }
  .caruosel{
    width: 360px;
  }
</style>
