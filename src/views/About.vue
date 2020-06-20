<template>
  <div class="container">
    <h1 class="title"> About</h1>
    <PreviewRecipeList title="Random Recipe" class="RandomRecipes center" />
  </div>
</template>

<script>
  import PreviewRecipeList from '../components/PriviewRecipeList.vue';
  export default {
    components: {
      PreviewRecipeList
    }
  };
</script>

<style lang="scss" scoped>
  .RandomRecipes {
    margin: 10px 0 10px;
  }
  .blur {
    -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
    filter: blur(2px);
  }
  ::v-deep .blur .recipe-preview {
    pointer-events: none;
    cursor: default;
  }
</style>
