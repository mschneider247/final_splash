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
  margin: 5% 0 25% 0;
  color: white;
  border: 40px solid #1A0B27;
}
img {
  width: 46%;
  border-radius: 5px;
  margin: 2%;
  box-shadow: 1px 2px #000000;
}
img:hover {
  transform: scale(1.2);
  box-shadow: 1px 2px #7c7c7c;
}
</style>