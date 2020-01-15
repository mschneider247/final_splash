<template>
  <div id="app">
    <header>
      <h1>Final Splash</h1>
      <section id="search">
        <p>Search through UnSplash for your favorite photos!</p>
        <input class="search" v-model='searchWord' placeholder="Search"/>
        <img :src="require('../find.png')" class="search__btn" @click="searchImages" />
      </section>
    </header>
    <images :images="images" />
    <footer>
      <p>this is the footer</p>
    </footer>
  </div>
</template>

<script>
import Images from './components/Images.vue'

export default {
  name: 'app',
  components: {
    Images
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
