<template>
  <div id="navbar">
    <div id="nav" >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" role="navigation">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/search">Search</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Personal
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Favorites</a>
              <a class="dropdown-item" href="#">Private</a>
              <a class="dropdown-item" href="#">La Familia</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="scss">
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
