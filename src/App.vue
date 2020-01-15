<template>
  <div id="app">
    <header>
      <h1>Final <span id="splash">Splash</span></h1>
      <section id="search">
        <p>Search through UnSplash.com for amazing photos!</p>
        <input id="input_search" v-model='searchQuery' placeholder="Search"/>
        <img :src="require('../searchicon.png')" id="search_btn" @click="searchImages" />
      </section>
    </header>
    <h3 id="prompt" v-if="!this.images.length">Try a search to see some images!</h3>
    <images :images="images"/>
    <footer>
      <input type="radio"/>
      <input type="radio"/>
      <input type="radio"/>
      <input type="radio"/>
      <input type="radio"/>
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
  header {
    border: 1px solid #000000;
    display: flex;
    padding: 2% 2% 2% 15%;
    background: #363457;
    border-radius: 10px;
  }
  h1 {
    font-size: 3em;
  }
  #prompt {
    margin-top: 5%;
  }
  #splash {
    color: lightblue;
  }
  #app {
    padding: 5% 5%;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(255, 222, 212);
    background: #1a0c27
  }
  #search_btn {
    width: 15%;
    margin-left: 2%;
    margin-bottom: -20px;
    justify-content: center;
  }
  #input_search {
    font-size: 1.5em;
    text-align: center;
    width: 280px;
    height: 40px;
    border-radius: 5px;
  }
  #search {
    margin-left: auto;
    margin-right: 20%;
    padding-bottom: 2%;
  }
</style>
