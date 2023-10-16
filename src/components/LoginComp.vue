<template>
    <div class="main">
        <div class="img-logo">
            <img :src="require('/src/assets/CXP-Chihuido_2.png')" alt="">

        </div>
        <h3 class="h3-title">ADMIN PANEL</h3>
        <form @submit.prevent="ingresoUsuario({ email: email, password: pass })" class="form">
            <v-text-field type="email" placeholder="E-mail" v-model="email" filled full-width append-icon="mdi-email"
                class="email" color="grey"></v-text-field>
            <v-text-field placeholder="Contraseña" v-model="pass" filled color="grey" class="password"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'" @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"></v-text-field>

            <div  class="d-flex flex-column justify-center align-center ">
                <p class="ma-10" v-if="error == 'FirebaseError: Firebase: Error (auth/invalid-login-credentials).'">Usuario no encontrado / Contraseña Incorrecta</p>
                <v-btn type="submit">
                  <h3 class="h3-title-btn">ACCEDER</h3>
                </v-btn>
            </div>
        </form>
    </div>
</template>
  
  
  
  
<script>

import { mapActions, mapState } from 'vuex'


export default {
    name: 'LoginComp',
    data: () => ({
        email: '',
        pass: '',
        ingreso: true,
        sendEmail: false,

        value: String,
        width: window.innerWidth
    }),

    methods: {
        ...mapActions(['ingresoUsuario']),

    },
    computed: {
        ...mapState(['error'])
        
    },
}

</script>
  
  
  
<style lang="scss" scoped>
* {
    --clr1: #1b96ae;
    --clr2: #231f20;
    --clr3: #808285;
    --clr4: #FFF;
    --regular: 'HelveticaNeueRegular';
    --bold: 'HelveticaNeueBlackCondensed';
    --calibri: 'Calibri'
    --bold2: 'HelveticaNeueCondensedBold'

}
.main {
    display: grid;
    width: 100dvw;
    height: 100dvh;
    grid-template-columns: 1 100dvw;
    grid-template-rows: 1 100dvh;
    place-content: center;
    align-content: center;

    form {
        min-width: 300px;
        max-width: 600px;
    }
    .img-logo{
        display: grid;
        place-content: center;
        margin-bottom: 50px;

        img{
            width: 50%;
        }
    }
    .h3-title{
        font-family: var(--regular);
        color: var(--clr2);
        font-size: 2rem;
        margin-bottom: 3px;

    }
    .h3-title-btn{
        font-family: var(--calibri);
        color: var(--clr2);
        font-size: 1rem;


    }
}
</style>