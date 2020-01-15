<template>
  <section class="section_images" v-if='this.images.length' >
    <img v-for="image in images" :src="image.urls.small" :key="image.id" :alt="image.alt_description" />
  </section>
</template>

<script type="application/javascript">

export default {
  name: 'Images',
  props: ['images'],
} 
  
</script>

<style scoped>
.section_images {
  border-radius: 5px;
  margin-top: 5%;
  color: white;
  border: 40px solid #1A0B27;
}
img {
  width: 46%;
  border-radius: 5px;
  margin: 2%;
}
img:hover {
  transform: scale(1.2); 
}
</style>