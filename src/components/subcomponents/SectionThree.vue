<template>
    <section class="section-3" id="section-3">
        <div class="pa-5 text-1" v-if="langValue == 'español'">
            <div style="width: 50%;" class="left-text">
                <p>En CXP trabajamos en tres sectores:</p>
                <p>
                    <b>Minería, Hidrocarburos y Energías Renovables.</b>

                </p>
                <p> Generamos y detectamos
                    oportunidades de negocio</p>
                <p>
                    y brindamos servicios de <span style="font-weight: bolder;">Asesoría y Consultoría</span>.
                </p>

            </div>

        </div>
        <div class="pa-5 text-1" v-if="langValue == 'english'">
            <div style="width: 50%;" class="left-text">
                <p>At CXP, we work in three sectors:</p>
                <p>
                    <b>Mining, Oil and Gas, and Renewable Energies.</b>

                </p>
                <p> We generate and detect business opportunities </p>
                <p>
                    and provide <span style="font-weight: bolder;">Consulting</span> and <span
                        style="font-weight: bolder;">Advisory</span> services.
                </p>

            </div>

        </div>

    </section>
    <section class="section-3">
        <div class=" mineria">
            <div class="card-content" v-if="langValue == 'español' || langValue == 'portugues'">
                <h3>Minería</h3>
                <p>
                    “Nos enfocamos en la exploración de minerales críticos para la transición energética, tanto proyectos
                    <span>Greenfield</span> como <span>Brownfield</span>”
                </p>

            </div>
            <div class="card-contentenglish" v-if="langValue == 'english'">
                <h3>Mining</h3>
                <p>
                    "We focus on exploring critical minerals for the energy <br>transition,
                    both <span>Greenfield</span> and <span>Brownfield</span> projects."
                </p>
            </div>
        </div>
        <div class="hidrocarburos">
            <div class="card-content" v-if="langValue == 'español' || langValue == 'portugues'">
                <h3>Hidrocarburos</h3>
                <p>
                    “Generamos proyectos exploratorios y detectamos oportunidades de nuevos negocios, aprovechando todas las
                    sinergias existentes vinculadas al creciente desarrollo industrial de Cuenca Neuquina”
                </p>

            </div>
            <div class="card-contentenglish" v-if="langValue == 'english'">
                <h3 class="mb-7">Oil & Gas</h3>
                <p>
                    "We generate exploratory projects and detect new business opportunities, taking advantage of all the
                    existing synergies linked to the growing industrial development of the Neuquén Basin."
                </p>

            </div>
        </div>
        <div class="energia">
            <div class="card-content" v-if="langValue == 'español' || langValue == 'portugues'">
                <h3>Energías Renovables</h3>
                <p>
                    “En el marco de la transición energética, evaluamos potenciales fuentes de energías renovables, como por
                    ejemplo proyectos de energía geotermal”
                </p>

            </div>
            <div class="card-contentenglish" v-if="langValue == 'english'">
                <h3>Renewable Energies</h3>
                <p>
                    "Within the energy transition context, we evaluate potential renewable energy sources, such as
                    geothermal energy projects."
                </p>
            </div>
        </div>
    </section>
</template>



<script>
import store from '@/store';

export default {
    name: 'SectionThree',

    data: () => ({

    }),
    methods: {
    },
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



.section-3 {
    width: 100dvw;
    box-sizing: border-box;
    height: 100dvh;
    display: flex;
    background-image: url('/src/assets/3_APERTURA SERVICIOS.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;


    .text-1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100dvw;
        height: 100dvh;
        background-color: rgba($color: #000000, $alpha: .2);
        background: linear-gradient(to left, transparent 50%, #000000 100%);
    }

    .left-text p {
        font-size: 1.8rem;
        font-family: var(--regular);
        color: #FFF;
        width: 100%;
        text-align: center;
        padding-left: 60px;
    }
}


.mineria {
    background-image: url('/src/assets/3_MINERIA.jpg');
    background-size: cover;
    background-position: 30% 50%;
    height: var(--section-height);

    transition: all .5s ease-in-out;
    width: calc(100dvw /3);

    .card-content {
        h3 {
            font-size: 2.5rem;
            transition: all 1s ease-in-out;
            font-family: var(--regular);
            transform: translateY(0px);
            letter-spacing: 3px;
        }

        p {
            font-size: 1.5rem;

        }

    }

    .card-contentenglish {
        h3 {
            font-size: 2.5rem;
            transition: all 1s ease-in-out;
            font-family: var(--regular);
            transform: translateY(0px);
            letter-spacing: 3px;
        }

        p {
            font-size: 1.5rem;

        }
    }
}

.hidrocarburos {
    background-image: url('/src/assets/3_HIDROCARBUROS.png');
    background-size: cover;
    background-position: center;
    height: var(--section-height);

    transition: all .5s ease-in-out;
    width: calc(100dvw /3);

    .card-content {

        h3 {
            font-size: 2.5rem;
            transform: translateY(40px);
            transition: all 1s ease-in-out;
            font-family: var(--regular);

            letter-spacing: 3px;
        }

        p {
            font-size: 1.5rem;
        }
    }
    .card-contentenglish {
        h3 {
            font-size: 2.5rem;
            transition: all 1s ease-in-out;
            font-family: var(--regular);
            transform: translateY(50px);
            letter-spacing: 3px;
        }

        p {
            font-size: 1.5rem;

        }
    }

}

.energia {
    background-image: url('/src/assets/3_ENERGIA RENOVABLE.jpg');
    background-size: cover;
    background-position: center;
    height: var(--section-height);

    transition: all .5s ease-in-out;
    width: calc(100dvw /3);

    .card-content {
        h3 {
            font-size: 2.5rem;
            transition: all 1s ease-in-out;
            font-family: var(--regular);
            transform: translateY(1px);
            letter-spacing: 3px;
        }

        p {
            font-size: 1.5rem;
        }
    }
    .card-contentenglish {
        h3 {
            font-size: 2.5rem;
            transition: all 1s ease-in-out;
            font-family: var(--regular);
            transform: translateY(40px);
            letter-spacing: 3px;
        }

        p {
            font-size: 1.5rem;

        }
    }
}

.card-content {
    height: 100%;
    background: linear-gradient(to top, transparent 50%, #000000 100%);
    display: grid;
    place-content: center;
    text-align: center;
    transition: all .5s ease-in-out;

    p {
        font-family: var(--regular);
        color: var(--clr4);
        font-size: 1.5rem;
        opacity: 0;
        width: 300px;
        text-align: center;
        transform: translateY(100px);
        transition: all 1s ease-in-out;
        padding: 10px;
        margin-top: 10px;

        span {
            font-style: italic
        }

        ;
    }

    h3 {
        font-family: var(--calibri);
        font-size: 1.5rem;
        color: var(--clr4);
        text-align: center;
        text-transform: uppercase;
    }

}
.card-contentenglish {
    height: 100%;
    background: linear-gradient(to top, transparent 50%, #000000 100%);
    display: grid;
    place-content: center;
    text-align: center;
    transition: all .5s ease-in-out;

    p {
        font-family: var(--regular);
        color: var(--clr4);
        font-size: 1.5rem;
        opacity: 0;
        width: 300px;
        text-align: center;
        transform: translateY(100px);
        transition: all 1s ease-in-out;
        padding: 10px;
        margin-top: 10px;

        span {
            font-style: italic
        }

        ;
    }

    h3 {
        font-family: var(--calibri);
        font-size: 1.5rem;
        color: var(--clr4);
        text-align: center;
        text-transform: uppercase;
    }

}

.mineria:hover {
    width: calc(100dvw - 200px);

    .card-content {
        background-color: rgba($color: #000000, $alpha: .5);

        p {
            opacity: 1;
            transform: translateY(0px);
        }

        h3 {
            transform: translateY(-30px);
            opacity: 0;

        }


    }
    .card-contentenglish {
        background-color: rgba($color: #000000, $alpha: .5);

        p {
            opacity: 1;
            transform: translateY(0px);
        }

        h3 {
            transform: translateY(-30px);
            opacity: 0;

        }


    }
    .energia {
        width: 100px;
    }

    .hidrocarburos {
        width: 100px;
    }
}

.energia:hover {
    width: calc(100dvw - 200px);

    .card-content {
        background-color: rgba($color: #000000, $alpha: .5);

        p {
            opacity: 1;
            transform: translateY(0px);
        }

        h3 {
            transform: translateY(-30px);
            opacity: 0;

        }
    }
    .card-contentenglish {
        background-color: rgba($color: #000000, $alpha: .5);

        p {
            opacity: 1;
            transform: translateY(0px);
        }

        h3 {
            transform: translateY(-30px);
            opacity: 0;

        }
    }


    .mineria {
        width: 100px;
    }

    .hidrocarburos {
        width: 100px;
    }
}

.hidrocarburos:hover {
    width: calc(100dvw - 200px);

    .card-content {
        background-color: rgba($color: #000000, $alpha: .5);

        p {
            opacity: 1;
            transform: translateY(0px);
        }

        h3 {
            transform: translateY(-30px);
            opacity: 0;

        }
    }
    .card-contentenglish {
        background-color: rgba($color: #000000, $alpha: .5);

        p {
            opacity: 1;
            transform: translateY(0px);
        }

        h3 {
            transform: translateY(-30px);
            opacity: 0;

        }
    }



    .energia {
        width: 100px;
    }

    .mineria {
        width: 100px;
    }
}

@media only screen and (max-width: 900px) {
    .section-3 {
        display: flex;
        flex-direction: column;
        background-image: url('/src/assets/3_APERTURA SERVICIOS.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: scroll;

        .mineria,
        .hidrocarburos,
        .energia {
            width: 100dvw;
            height: calc(100dvh /3);

            .card-content, .card-contentenglish {
                background: linear-gradient(to left, transparent 1%, #000000 100%);
                width: 100dvw;
                height: calc(100dvh /3);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                h3,
                p {
                    transition: all .5s ease-in-out;
                    transform: none;
                }

                p {
                    transform: translateY(-50px);
                    font-size: 1.2rem;
                }

                h3 {
                    transform: translateY(40px);
                }
            }

        }


        .mineria:hover,
        .hidrocarburos:hover,
        .energia:hover {
            width: 100dvw;
            height: calc(100dvh /3);
        }

        .text-1 {
            display: grid;
            place-content: center;
            padding: 0;
            width: 100dvw;

            .left-text {
                p {
                    width: 100dvw;
                    font-size: 1.3rem;
                    padding-left: 0;
                    padding: 1px;
                }
            }
        }
    }
}
</style>