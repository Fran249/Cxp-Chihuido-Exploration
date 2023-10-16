<template>
    <section class="section-2" id="section-2">

        <div class="content" v-if="langValue == 'español' || langValue == 'portugues'">
            <h3>Quienes Somos</h3>



            <p>
                “Somos un equipo de profesionales con amplia trayectoria en diversas áreas vinculadas a la industria
                energética, con un fuerte foco en el área <br> <span>Técnica, Legal y Gestión</span>”
            </p>


        </div>
        <div class="content" v-if="langValue == 'english'">
            <h3>About Us</h3>



            <p>
                “We are a team of professionals with extensive experience in multiple areas linked to the energy industry,
                with a strong focus on<br> <span>Technical, Legal,</span> and <span>Management</span> aspects.”

            </p>


        </div>
    </section>
</template>



<script>
import store from '@/store';

export default {
    name: 'SectionTwo',

    data: () => ({

    }),
    computed: {
        langValue: {
            get() {
                return store.state.language
            }
        }
    }
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

.section-2 {
    width: 100dvw;
    height: 100dvh;
    background-image: url('/src/assets/2_QUIENES SOMOS.jpg');
    background-attachment: fixed;
    background-position: center;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;


    h3 {
        font-family: var(--regular);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--clr4);
        font-size: 2.5rem;


    }

    .content {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        text-align: center;
        padding: 40px;
        background-color: rgba($color: #000000, $alpha: .3);


        p {

            font-size: 1.6rem;
            font-weight: 500;
            text-align: center;
            font-family: var(--regular);
            color: var(--clr4);
            width: 50%;

            span {
                font-weight: bolder;

            }

        }
    }

}

@media only screen and (max-width: 900px) {
    .section-2 {
        width: 100dvw;
        height: 100dvh;
        background-image: url('/src/assets/2_QUIENES SOMOS.jpg');
        background-size: cover;
        background-attachment: scroll;
        background-position: center;

        .content {
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            text-align: center;
            padding: 40px;
            background-color: rgba($color: #000000, $alpha: .3);

            p {
                width: 100%;
                margin-bottom: 50px;
            }
        }
    }
}
</style>