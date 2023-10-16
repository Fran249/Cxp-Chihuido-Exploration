import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueKinesis from "vue-kinesis";
loadFonts()
import {auth} from './firebase'


import { getFirestore, doc, getDoc } from "firebase/firestore";


const firestore = getFirestore();

async function getRol(uid){

  const docuRef = doc(firestore, `users/${uid}`);
  const docuCifrada = await getDoc(docuRef);
  const infoFinal = docuCifrada.data().rol;
  return infoFinal;

}



auth.onAuthStateChanged(user => {
  if(user){
    




    
    getRol(user.uid).then((rol)=>{
      // eslint-disable-next-line no-unused-vars
      const userData = {
        uid: user.uid,
        email: user.email,
        rol: rol,
      }

      

      store.dispatch('detectarUsuario', {email: user.email, uid: user.uid, rol, name: user.displayName, foto: user.photoURL});

      
      //console.log("userData final", userData)
    })
   
    } else {
      return
    }
  }
)
createApp(App)
  .use(VueKinesis)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
