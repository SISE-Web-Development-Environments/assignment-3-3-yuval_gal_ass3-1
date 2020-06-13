<template>
  <div class="Preview" v-show="recipe.id" >
    <div id="recipeAndBtns">
      <a @click="lastRecipe" class="previous round arrows-btns">&#8249;</a>
      <div id="recipe">
        <h2>{{ recipe.title }}</h2>
        <img class="column" :src="recipe.image_url"/>
        <div class="column img-text-container">
          <p>prepTime: {{ recipe.prepTime }}</p>
          <p>popularity: {{ recipe.popularity }}</p>
          <p>isVegan: {{ recipe.vegan }}</p>
          <p>isVegi: {{ recipe.vegetarian }}</p>
          <p>isGlutenFree: {{ recipe.glutenFree }}</p>
          <p>url: <a v-bind:href="recipe.url">link to the recipe</a></p>
        </div>
      </div>
      <a @click="nextRecipe" class="next round arrows-btns">&#8250;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewRecipe',
  props: {
    recipe: Object,
    nextRecipe: Function,
    lastRecipe: Function
  }
}
</script>

<style scoped>
.Preview {
  justify-content: center;
  content: "";
  display: inline-block;
  clear: both;
}
img {
  max-width: 30%;
  height: auto;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}
.img-text-container {
  text-align: left;
  padding: 10px 20px;
}
.column {
  float: left;
  width: 50%;
}

#recipeAndBtns{
  position: relative;
}
#recipeAndBtns .column{
  display: inline-block;
}

.arrows-btns {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  position: absolute;
  top: 50%;
  transform: translateY(300%);
  /*width: 38px;*/
  /*height: 38px;*/
}

.arrows-btns:hover {
  background-color: #979696;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
  left: 0;
  top: 50%;
  transform: translateX(-150%) translateY(300%);
}

.next {
  background-color: #f1f1f1;
  color: black;
  right: 0;
}

.round {
  border-radius: 50%;
}
</style>
