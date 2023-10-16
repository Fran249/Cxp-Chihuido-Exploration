<template>
    <section class="section-1" id="section-1">

        <div class="section-content">

            <div class="img-text">
                <img :src="require('/src/assets/section-1-img.png')" alt="">
                <p>CHIHUIDO EXPLORATION</p>
                <h3 v-if="langValue == 'español'">Recursos para un mundo en <span><b>evolución</b></span></h3>
                <h3 v-if="langValue == 'english'">Resources for an <span><b>evolving</b></span> world </h3>
            </div>
            <div class="description">
                <p v-if="langValue == 'español' ">
                    En el marco de la transición energética, CXP - Chihuido Exploration busca generar una plataforma de
                    inversión integrada, con una cartera diversificada de proyectos de minería, hidrocarburos y energías
                    renovables. Nuestro foco está en Cuenca Neuquina,<br>
                    en las provincias de Neuquén, Río Negro y Mendoza.

                </p>
                <p v-if="langValue == 'english'">
                    CXP - Chihuido Exploration seeks to generate an integrated investment platform with a diversified
                    portfolio of mining, oil and gas, and renewable energy projects in a global energy transition context.
                    Our focus is on the Neuquén Basin,<br>
                    in the provinces of Neuquén, Río Negro, and Mendoza.
                </p>
            </div>
        </div>
    </section>
</template>



<script>
import store from '@/store';

export default {
    name: 'SectionOne',

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
        --bold2: 'HelveticaNeueCondensedBold'

}

.section-1 {
    width: 100dvw;
    height: 100dvh;
    background-image: url('/src/assets/1_INICIO.jpg');
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;

    .section-content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 50dvw);
        grid-auto-flow: row;
        place-content: center;
        place-items: center;
        background-color: rgba($color: #000000, $alpha: .2);

        .description {
            height: 100dvh;
            display: grid;
            background: linear-gradient(to right, transparent 5%, #000000 100%);
            place-items: center;
            width: 50dvw;



            p {
                font-family: var(--regular);
                color: var(--clr4);
                font-size: 1.6rem;
                padding: 15px;
                width: 600px;
                text-align: center;

            }
        }

        .img-text {
            display: grid;
            place-items: center;

            img {
                width: 200px;
                margin-top: 30px;
            }

            p {
                font-family: 'Calibri';
                font-size: 1rem;
                color: var(--clr4);
                letter-spacing: 1.5px;
                text-align: center;
            }
        }

        h3,
        span {
            font-size: 2.5rem;

            margin-bottom: 2.5rem;
            text-align: center;
        }

        h3 {
            font-family: var(--regular);
            color: var(--clr4);
            font-weight: lighter;
        }

        span {
            font-family: var(--bold2);
            font-weight: bolder;
            color: var(--clr4);
        }
    }
}

@media only screen and (max-width: 900px) {

    .section-1 {
        height: 100dvh;
        width: 100dvw;
        background-image: url('/src/assets/1_INICIO.jpg');
        background-position: center;
        background-attachment: scroll;
        background-size: cover;

        .section-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: linear-gradient(to right, transparent 5%, #000000 100%);

            .img-text {
                width: 100dvw;
                background: none;

                img {
                    width: 100px;

                }

                h3 {
                    font-size: 2rem;

                    span {
                        font-size: 2rem;
                    }
                }
            }

            .description {
                width: 100dvw;
                height: 250px;
                background: none;

                p {
                    width: 300px;
                    font-size: 1.2rem;
                }
            }
        }
    }


}
</style>