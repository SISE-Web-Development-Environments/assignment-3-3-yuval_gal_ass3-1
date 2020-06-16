<template>
  <div >
    <b-card
      :title="recipe.title"
      :img-src="recipe.image_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 preview"
    >
      <b-card-text>
        <p>prepTime: {{ recipe.prepTime }}</p>
        <p>popularity: {{ recipe.popularity }}</p>
        <p>isVegan: {{ recipe.vegan }}</p>
        <p>isVegi: {{ recipe.vegetarian }}</p>
        <p>isGlutenFree: {{ recipe.glutenFree }}</p>
      </b-card-text>

      <b-button :href="recipe.url" variant="primary">See the full Recipe</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PreviewRecipe',
  props: {
    recipe: Object
  }
}
</script>

<style scoped>
.preview {
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
</style>
