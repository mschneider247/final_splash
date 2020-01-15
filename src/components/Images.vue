<template>
  <div>
    <h1 id="prompt" v-if='!this.images.length'>Try a search to see some images!</h1>
    <section class="section_images" v-if='this.images.length' >
        <img v-for="image in images" :src="image.urls.small" :key="image.id" :alt="image.alt_description" />
    </section>
  </div>
</template>

<script type="application/javascript">

export default {
  name: 'Images',
  props: ['images', 'setSearchQuery'],
  methods: {
    displayPhotos: function () {
      return this.images.map(image => image.results.urls.regular)
    }
  }
  } 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100&display=swap');
.section__pictures {
display: flex;
overflow: scroll;
justify-content: space-evenly;
height: 75vh;
    flex-wrap: wrap;
    border-bottom: 1px solid #D1D5DA;
}
img {
  max-width: 50%;
    height: 37vh;
    margin-top: 20px;
    border-radius: 89px;
    opacity: .8
}
img:hover {
  transform: scale(1.2); 
  box-shadow: 0px 0px 14px 13px rgba(0,0,0,0.75);
  border-radius: 0;
  opacity: 1;
  z-index:2
}
.h1__prompt {
font-family: 'Montserrat', sans-serif;
margin-top: 17%
}
</style>

-->