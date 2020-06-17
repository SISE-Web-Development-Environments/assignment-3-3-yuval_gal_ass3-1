<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="mb-3">
          <div>
            <img class="my-icon" src="https://img.icons8.com/cotton/64/000000/clock--v1.png"/>
            Ready in {{ recipe.readyInMinutes }} minutes |
            <img class="my-icon" src="https://img.icons8.com/plasticine/100/000000/like--v1.png"/>
            {{ recipe.aggregateLikes }} Likes  |
            <img class="my-icon" src="https://img.icons8.com/dusk/64/000000/tableware.png"/>
            Num of dishes: {{ recipe.servings }}
            <div>
              <labal v-if="recipe.vegetarian"> <img class="my-icon" v-if="recipe.vegetarian" src="https://img.icons8.com/dusk/64/000000/vegetarian-food.png"/> Vegetarian </labal>
              <labal v-if="recipe.vegan"> <img class="my-icon" v-if="recipe.vegan" src="https://img.icons8.com/dusk/64/000000/natural-food.png"/> Vegan </labal>
              <labal v-if="recipe.glutenFree"> <img class="my-icon" v-if="recipe.glutenFree" src="https://img.icons8.com/officel/16/000000/no-gluten.png"/> Gluten-free </labal>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="wrapped">
            Ingredients:
            <ul class="list-group">
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id" class="list-group-item"
              >   <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol class="list-group">
              <li v-for="s in recipe._instructions" :key="s.number" class="list-group-item">
                {{ s.number }}. {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        recipe: null
      };
    },
    async created() {
      try {
        let response;
        try {
          response = await axios.get(
            "https://test-for-3-2.herokuapp.com/recipes/info",
            {
              params: { id: this.$route.params.recipeId }
            }
          );
          console.log(response)
          if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          await this.$router.replace("/NotFound");
          return;
        }

        let {
          analyzedInstructions,
          instructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          image,
          title,
          vegetarian,
          vegan,
          glutenFree,
          servings
        } = response.data.recipe;

        let _instructions = analyzedInstructions
          .map((fstep) => {
            fstep.steps[0].step = fstep.name + fstep.steps[0].step;
            return fstep.steps;
          })
          .reduce((a, b) => [...a, ...b], []);

        let _recipe = {
          instructions,
          _instructions,
          analyzedInstructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          image,
          title,
          vegetarian,
          vegan,
          glutenFree,
          servings
        };

        this.recipe = _recipe;
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    display: flex;
  }
  .wrapped {
    width: 50%;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .my-icon {
    height: 50px;
    width: 50px;
  }
  /* .recipe-header{

  } */
</style>
