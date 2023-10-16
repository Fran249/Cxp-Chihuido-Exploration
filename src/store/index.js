import { createStore } from 'vuex'
import { getAuth } from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebase';
import router from '@/router'

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();
const auth = getAuth();
export default createStore({
  state: {
    language: 'español',
    usuario: null,
    loadImages: false,
    adminComp: true,
    editComp: false,
  },
  getters: {
    existeUsuario(state){
      if(state.usuario === null){
          return false
      }else{
          return true
      }
    },
  },
  mutations: {
    language: (state, value) => (state.language = value),
    loadImages: (state, value) => (state.loadImages = value),
    adminComp: (state, value) => (state.adminComp = value),
    editComp: (state, value) => (state.editComp = value),
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    },
  },
  actions: {
    language({commit},value){
      commit("language", value);
    },
    loadImages({commit},value){
      commit("loadImages", value);
    },
    adminComp({commit},value){
      commit("adminComp", value);
    },
    editComp({commit},value){
      commit("editComp", value);
    },
    ingresoUsuario({commit}, usuario){
      signInWithEmailAndPassword(auth ,usuario.email, usuario.password)
      
      .then(res => {

 



          const usuario = {
              email: res.user.email,
              uid: res.user.uid,
              name: res.user.displayName
          }

          async function getRol(uid){

            const docuRef = doc(firestore, `users/${uid}`);
            const docuCifrada = await getDoc(docuRef);
            const infoFinal = docuCifrada.data().rol;
            return infoFinal;
          
          }
          getRol(usuario.uid).then((rol)=>{
            // eslint-disable-next-line no-unused-vars
            const userData = {
              uid: usuario.uid,
              email: usuario.email,
              rol: rol,
             
            }
            
            

            if(auth.currentUser && userData.rol == 'admin'){



              commit('setUsuario', usuario);
              commit('adminComp', true)
              

  
            }else{
              signOut(auth).then(() => {
                // Sign-out successful.
                commit('setUsuario', null)
                
                
                
              })
              router.push('/errorNotAdmin')
            }
        })
          }).catch(error => {
            console.log(error)
            commit('setError', error)
        })




  },
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
  // eslint-disable-next-line no-unused-vars
  },
  
  cerrarSesion({commit}){
    signOut(auth).then(() => {
      // Sign-out successful.
      commit('setUsuario', null)
      
      
      
    })
},
  },
  modules: {
  }
})
