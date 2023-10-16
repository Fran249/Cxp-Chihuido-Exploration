<template>

    <section>

        <kinesis-container>
            <div class="btns-container" id="btns-container">




                <kinesis-element>
                    <button class="btn" id="button1" @click="animation(), welcomeText = 'BIENVENIDO'">
                        <h3>ESPAÑOL</h3>
                    </button>
                </kinesis-element>


                <kinesis-element :strength="20">
                    <div class="img-container">
                        <img class="img" id="img" :src="require('../assets/logone1.png')">
                    </div>
                </kinesis-element>
                <kinesis-element :strength="10">

                    <button class="btn" d id="button2" @click="animation(), welcomeText = 'WELCOME'">
                        <h3>ENGLISH</h3>
                    </button>
                </kinesis-element>

            </div>
        </kinesis-container>
        <div class="welcome-text" id="welcome-text">
            <h3>{{ welcomeText }}</h3>
        </div>
        
    </section>
</template>
  
<script>

import { defineComponent } from 'vue';
import router from '@/router';


export default defineComponent({
    name: 'LanguagePickView',
    data: () => ({
        welcomeText: '',
    }),
    mounted() {

    },
    methods: {
        animation() {

            const buttonSpanish = document.getElementById('button1')
            const buttonEnglish = document.getElementById('button2')
            const img = document.getElementById('img')
            const btnsContainer = document.getElementById('btns-container')
            const wlcmText = document.getElementById('welcome-text')

            buttonSpanish.style.transform = 'translateX(-1000px)'
            buttonSpanish.style.opacity = '0'
            buttonEnglish.style.transform = 'translateX(1000px)'
            buttonEnglish.style.opacity = '0'
            img.style.transform = 'translateY(-1000px)'
            img.style.opacity = '0'
            wlcmText.style.opacity = '1'
            btnsContainer.style.backgroundColor = 'rgba(0,0,0 , .3)'
            setTimeout(
                function push() {
                    router.push('/home')
                }
                , 4000);
            console.log(this.welcomeText)
        },

    }

});
</script>


<style scoped lang="scss">
* {
    --clr1: #1b96ae;
    --clr2: #231f20;
    --clr3: #808285;
    --clr4: #FFF;
}



.img-container {
    perspective: 500px;
}

.welcome-text {

    display: flex;
    position: absolute;
    align-self: center;
    justify-self: center;
    opacity: 0;

    h3 {
        color: var(--clr1);
        text-shadow: 1px 1px 2px var(--clr2);
        font-family: 'Calibri';
        text-transform: uppercase;
        font-size: 3rem;
    }

    transition: all 1s ease-in-out;
}

img {
    width: 150px;
    height: 130px;
    transition: all 2s ease-in-out;
}

.btns-container {
    width: 100dvw;
    height: 100dvh;
    backdrop-filter: blur(4px);
    gap: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, .2);
    transition: all 2.5s ease-in;

}

.btn:hover {

    transform: scale(1.1);
}


.btn {
    transition: all .7s ease-in-out;

    h3 {
        font-family: 'Calibri';
        letter-spacing: 1px;
        color: var(--clr1);
        text-shadow: 1px 1px 2px var(--clr2);
    }
}

section {
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-image: url(../assets/bckg-language.jpg);
    background-size: cover;
    transition: all .7s ease-in-out;
}

a,
a:visited,
a:focus {
    text-decoration: none;
    color: #000;
}

@keyframes rotateAnimation {
    from {
        transform: rotateY(45deg);
    }

    to {
        transform: rotateY(225deg);
    }
}
</style>