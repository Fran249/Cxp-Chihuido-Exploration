<template>
  <NavComp />
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <SectionFour v-if="projects.length >= 1" />
  <SectionFive />
</template>
  
<script>
import SectionOne from '../components/subcomponents/SectionOne.vue'
import SectionFive from '../components/subcomponents/SectionFive.vue'
import SectionTwo from '../components/subcomponents/SectionTwo.vue'
import SectionThree from '../components/subcomponents/SectionThree.vue'
import NavComp from '../components/NavComp.vue'
import SectionFour from '../components/subcomponents/SectionFour.vue'
import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '/src/firebase/index.js'
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export default {
  name: 'MainComp',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    NavComp,
  },
  data: () => ({
    projects: []
  }),
  methods: {

  },
  mounted() {
    onSnapshot(doc(db, "projects/projectdata"), (doc) => {
      this.projects = doc.data().project;

    });
  }

}
</script>


<style scoped lang="scss"></style>