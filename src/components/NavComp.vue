<template>
  <div class="nav-bar" >
    <div class="nav-bar-content">
      <div class="logo">
        <div class="text">
          <img :src="require('/src/assets/nav-logo.png')" alt="">
        </div>
      </div>
      <div class="buttons">
        <button v-for="button in buttons" :key="button.name" @click="scrollId(button)">
          <h3 v-if="langValue == 'español'">{{ button.name }}</h3>
          <h3 v-if="langValue == 'english'">{{ button.nameEN }}</h3>

        </button>
        <button  @click="scrollId( button = { id: 'section-4'})" >
          <h3 v-if="langValue == 'español' && projects.length >= 1">Proyectos</h3>
          <h3 v-if="langValue == 'english' && projects.length >= 1">Projects</h3>
        </button>

        <button @click="language = !language" class="buttons-desk">
          <v-icon icon="mdi-dots-vertical" color="#fff"></v-icon>
        </button>
        <div class="en-es-cont">
          <button @click="changeLanguage({directive: 'english'})">
            <h3>EN</h3>
          </button><v-divider class="ms-3" inset vertical color="white" :thickness="5"></v-divider>
          <button @click="changeLanguage({directive: 'español'})">
            <h3>ES</h3>
          </button>
        </div>
      </div>
    </div>
  </div>

  <v-navigation-drawer style="background-color: transparent; backdrop-filter: blur(10px);" v-model="language" temporary>
    <div class=" d-flex flex-column justify-start align-center navigation-container "
      style="width: 100%; height: 100%; gap: 15px;">
      <button class="mt-5 language-desk" v-for="langu in lang" :key="langu.name" style="width: 100px; height: 50px;"
        @click="changeLanguage(langu), language = !language">
        <p class="text-drawer ">{{ langu.name }}</p>
      </button>
      <button class="nav-language-mobile" v-for="button in buttons" :key="button.name"
        @click="scrollId(button), language = !language">
        <h3 v-if="langValue == 'español'">{{ button.name }}</h3>
        <h3 v-if="langValue == 'english'"> {{ button.nameEN }}</h3>
      </button>
      <button class="nav-language-mobile" 
        @click="scrollId( button = {id: 'section-4'}), language = !language">
        <h3 v-if="langValue == 'español' && projects.length >= 1">Proyectos</h3>
        <h3 v-if="langValue == 'english' && projects.length >= 1">Projects</h3>
      </button>

      <button class="nav-language-mobile">
        <h3 v-if="langValue == 'español'">Idioma</h3>
        <h3 v-if="langValue == 'english'">Language</h3>
        <v-menu activator="parent" location="bottom">
          <v-list style="background-color: transparent; box-shadow: none; display: flex; flex-direction: column;">
            <button class="mt-5 " v-for="langu in lang" :key="langu.name" style="width: 100px; height: 50px;"
              @click="changeLanguage(langu), language = !language">
              <p class="text-drawer ">{{ langu.name }}</p>
            </button>
          </v-list>
        </v-menu>
      </button>
    </div>
  </v-navigation-drawer>
</template>

<script>
import store from '@/store'
import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '/src/firebase/index.js'
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export default {
  name: 'NavComp',

  data: () => ({
    language: false,
    projects: [],
    lang: [
      {
        name: 'English',
        directive: 'english'
      },
      {
        name: 'Español',
        directive: 'español',
      },
    ],
    buttons: [
      {
        name: 'Inicio',
        nameEN: 'Home',
        namePT: 'Home',
        id: 'section-1',
      },
      {
        name: 'Quienes Somos',
        nameEN: 'About Us',
        namePT: 'Quem Somos',
        id: 'section-2',
      },
      {
        name: 'Servicios',
        nameEN: 'Services',
        namePT: 'Nossas Atividades',
        id: 'section-3',
      },
      {
        name: 'Contacto',
        nameEN: 'Contact',
        namePT: 'Contato',
        id: 'section-5',
      }
    ]
  }),
  methods: {
    scrollId(button) {
      let id = document.getElementById(button.id)
      id.scrollIntoView({ behavior: 'smooth' }, true)
    },
    changeLanguage(langu) {
      store.commit('language', langu.directive)
    },
    
  },
  mounted(){
    onSnapshot(doc(db, "projects/projectdata"), (doc) => {
      this.projects = doc.data().project;

    });
  },
  computed: {
    langValue: {
      get() {
        return store.state.language
      },
      set() {

      }
    },
    computedScroll:{
      get(){
        let y = scrollY
        if(y > 0){
          return true
        }else {
           return false
        }
      }
    }
  },
 
}
</script>


<style scoped lang="scss">
* {
  --clr1: #1b96ae;
  --clr2: #231f20;
  --clr3: #808285;
  --clr4: #FFF;
  --regular: 'HelveticaNeueRegular';
  --bold: 'HelveticaNeueBlackCondensed';
  --calibri: 'Calibri'

}

.text-drawer {
  font-family: var(--calibri);
  color: var(--clr4);
  font-size: 1rem;
  text-transform: uppercase;

}
.buttons-desk{
  display: none;
}

.text {
  display: grid;
  place-items: left;
  width: 50dvw;

  img {
    width: 200px;
    margin-left: 20px;
    margin-top: 10px;
  }

}


.buttons {
  box-sizing: border-box;
  width: 45%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

  button {

    margin-top: 20px;

    h3 {
      font-family: var(--calibri);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--clr4);
    }
  }
}

.nav-bar {
  width: 100dvw;
  height: 80px;

  position: absolute;
  background: transparent;
  top: 0;
  left: 0;

  .nav-bar-content {
    display: flex;
    flex-direction: row;


  }
}

.nav-language-mobile {
  display: none;
}

@media screen and (max-width: 900px) {

  .buttons-desk{
  display: block;
}
  .nav-bar .nav-bar-content .logo .text img {

    width: 120px;

  }

  .nav-bar .nav-bar-content .buttons button:nth-child(1),
  .nav-bar .nav-bar-content .buttons button:nth-child(2),
  .nav-bar .nav-bar-content .buttons button:nth-child(3),
  .nav-bar .nav-bar-content .buttons button:nth-child(4),
  .nav-bar .nav-bar-content .buttons button:nth-child(5) {
    display: none;
  }

  .buttons {
    justify-content: flex-end;
  }

  .navigation-container .language-desk {
    display: none;
  }

  .navigation-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    button {
      margin-top: 15px;
    }

    .nav-language-mobile {
      display: flex;

      h3 {
        color: var(--clr4);
        font-family: var(--calibri);
        text-transform: uppercase;
        font-size: 1rem;

      }
    }


  }


}
</style>