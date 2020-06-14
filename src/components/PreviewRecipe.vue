<template>
  <div>
    <b-card
      :title="recipe.title  "
      :img-src="recipe.image_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <a @click="lastRecipe" class="previous round arrows-btns">&#8249;</a>
      <b-card-text>
        <p>prepTime: {{ recipe.prepTime }}</p>
        <p>popularity: {{ recipe.popularity }}</p>
        <p>isVegan: {{ recipe.vegan }}</p>
        <p>isVegi: {{ recipe.vegetarian }}</p>
        <p>isGlutenFree: {{ recipe.glutenFree }}</p>
      </b-card-text>

      <b-button :href="recipe.url" variant="primary">See the full Recipe</b-button>
      <a @click="nextRecipe" class="next round arrows-btns">&#8250;</a>
    </b-card>
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

.arrows-btns {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  position: absolute;
  top: 22%;
}

.arrows-btns:hover {
  background-color: #979696;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
  left: 0;
  transform: translateX(-150%) translateY(300%);
}

.next {
  background-color: #f1f1f1;
  color: black;
  right: 0;
  transform: translateX(150%) translateY(300%);

}
.round {
  border-radius: 50%;
}
</style>
