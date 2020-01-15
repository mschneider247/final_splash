<template>
  <div id="app">
    <header>
      <h1>Final Splash</h1>
      <section id="search">
        <p>Search through UnSplash for your favorite photos!</p>
        <input id="input_search" v-model='searchQuery' placeholder="Search"/>
        <img :src="require('../find.png')" id="search_btn" @click="searchImages" />
      </section>
    </header>
    <images :images="images"/>
    <footer>
      <p>this is the footer</p>
    </footer>
  </div>
</template>

<script>
import Images from './components/Images.vue'
import { getImages } from '../apiCalls.js'

export default {
  name: 'app',
  components: {
    Images
  },
  data() {
    return {
      images: [],
      searchQuery: '',
    }
  },
  methods: {
    searchImages: async function () {
      try {
        const data = await getImages(this.searchQuery, 1, 10)
        this.images = data
        this.searchQuery = '';
      } catch (error) {
        window.console.log('Error searching', error)
      }  
    },
    setSearchQuery: function (value) {
      this.searchQuery = value
    },
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
