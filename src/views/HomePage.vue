<template>
  <div class="home-main-view">
    <div class="column left-side">
      <h1>Some of our Recipes</h1>
      <carousel class="caruosel"
                :loop="true"
                :autoplay="true"
                :paginationColor="color"
                :navigationEnabled="true"
                :autoplayHoverPause="true"
                :perPage=1
                :autoplayTimeout=5000
                :speed=3000
      >
        <slide class="slide" v-for="recipe in loadedRecipesArray" :key="recipe.index">
          <PreviewRecipe :recipe="recipe"></PreviewRecipe>
        </slide>
      </carousel>
    </div>
    <div class="column right-side">
      <LoginComp
        :login="login"
        :isLoggedIn="isLoggedin"
        :failMessage="failMessage"
        :isFailedLogin="isFailedLogin"
      />
    </div>
  </div>
</template>

<script>
// import PreviewRecipe from '@/components/PreviewRecipe'
import LoginComp from '@/components/Login'
import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios'
import PreviewRecipe from '../components/PreviewRecipe'

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function postData (url = '', data = {}) {
  console.log(data)
  const response = await fetch (url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify (data)
  });
  console.log(response)
  return response.json ();
}

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
      color: '#8c8caa',
      isLoggedin: false,
      isFailedLogin: false,
      failMessage: ''
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
    async login(username, password) {
      this.isFailedLogin = false;
      console.log('Login')
      const success = await postData('http://localhost/user/Login', {username: username, password: password})
      console.log(success)
      if (success.success) {
        this.isLoggedin = true;
        this.isFailedLogin = false;
      } else {
        this.failMessage = success.message;
        this.isFailedLogin = true;
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
