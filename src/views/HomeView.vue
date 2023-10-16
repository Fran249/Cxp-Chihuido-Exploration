<template>
  <!-- <NavComp /> -->
  <MainComp />
  <!-- <FooterComp /> -->
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import NavComp from '../components/NavComp.vue';
import MainComp from '../components/MainComp.vue';
// import FooterComp from '../components/FooterComp.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    // NavComp,
    MainComp,
    // FooterComp,

  },
});
</script>


<style>

</style>
