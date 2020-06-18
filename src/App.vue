<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <b-container>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </b-container>
  </div>
</template>

<style lang="scss">
  html {
    background-image: url("../src/assets/marble-background.jpg");
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("../src/assets/marble-background.jpg");
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide-enter-active{
  transition: opacity 0.5s, transform 0.5s;
}
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to{
  opacity: 3%;
  transform: translateX(-30%);
}
</style>
