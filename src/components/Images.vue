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

<style scoped>
img {
  width: 40%;
}
img:hover {
  transform: scale(1.4); 
}
</style>