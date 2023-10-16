<template>
    <section class="section-5" id="section-5">
        <div class="form-container" v-if="language == 'español' || language == 'portugues'">
            <v-form @submit.prevent="sendEmail">
                <v-text-field color="#fff" clearable v-model="name" :counter="10" :rules="emailRules" label="Email"
                    required></v-text-field>

                <v-select color="#fff" clearable v-model="select" :items="items"
                    :rules="[v => !!v || 'Por favor, seleccione una categoria']" label="Categoria" required></v-select>
                <v-textarea clearable label="Mensaje" :rules="[v => !!v || 'Por favor, escriba un mensaje']"
                    v-model="mensaje"></v-textarea>
                <v-btn rounded type="submit" :elevation="elevation" block class="mt-2" @mouseenter="elevation = 3"
                    @mouseleave="elevation = 0">
                    <h3>ENVIAR</h3>
                </v-btn>
            </v-form>
        </div>
        <div class="form-container" v-if="language == 'english'">
            <v-form @submit.prevent="sendEmail">
                <v-text-field color="#fff" clearable v-model="name" :counter="10" :rules="emailRules" label="Email"
                    required></v-text-field>

                <v-select color="#fff" clearable v-model="select" :items="itemsEnglish"
                    :rules="[v => !!v || 'Please select a subject']" label="Subject" required></v-select>
                <v-textarea clearable label="Message" :rules="[v => !!v || 'Por favor, write a message']"
                    v-model="mensaje"></v-textarea>
                <v-btn rounded type="submit" :elevation="elevation" block class="mt-2" @mouseenter="elevation = 3"
                    @mouseleave="elevation = 0">
                    <h3>send</h3>
                </v-btn>
            </v-form>
        </div>
        <v-footer class=" footer">
            <v-row justify="center" no-gutters>

                <v-col class="text-center mt-4 col-p" cols="12">
                    <p v-if="language == 'español' || language == 'portugues'"> © {{ new Date().getFullYear() }} — <img
                            class="mr-2 ml-2 mt-15 " :src="require('/src/assets/footer-logo1.png')" alt=""> <strong> CXP -
                            Chihuido Exploration. Todos
                            los derechos reservados</strong></p>
                    <p v-if="language == 'english'"> © {{ new Date().getFullYear() }} — <img class="mr-2 ml-2 mt-10 "
                            :src="require('/src/assets/footer-logo1.png')" alt=""> <strong> CXP - Chihuido Exploration. All
                            rights reserved</strong></p>

                </v-col>
            </v-row>
        </v-footer>
        <v-snackbar v-model="snack" color="rgba(0,0,0, .8)">
            <div class="snack-bar-content" style="border: 1px solid #1b96ae;">
                <p v-if="language === 'español'">Gracias por comunicarse con nosotros!</p>
                <p v-if="language === 'english'">Thank you for contacting us!</p>
                <p v-if="language === 'portugues'">Obrigado por nos contatar!</p>
                <img class="" :src="require('/src/assets/footer-logo.png')" alt="">
            </div>
        </v-snackbar>
    </section>
</template>



<script>
import store from '@/store'




export default {
    name: 'SectionFive',

    data: () => ({
        snack: false,
        name: '',
        mensaje: '',
        buttons: [
            {
                name: 'Inicio',
                id: 'section-1',
            },
            {
                name: 'Quienes Somos',
                id: 'section-2',
            },
            {
                name: 'Servicios',
                id: 'section-3',
            },
            //{
            //name: 'Proyectos',
            //id: 'section-4',
            // },
            {
                name: 'Contacto',
                id: 'section-5',
            }
        ],
        emailRules: [
            v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail debe ser un mail valido'
        ],
        emailRulesEnglish: [
            v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        elevation: '0',
        items: [
            'Minería',
            'Hidrocarburos',
            'Energías Renovables',
            'Otros',
        ],
        itemsEnglish: [
            'Mining',
            'Oil & Gas',
            'Renewable Energies',
            'Other',
        ],
        checkbox: false,

    }),
    methods: {
        scrollId(button) {
            let id = document.getElementById(button.id)
            id.scrollIntoView({ behavior: 'smooth' }, true)
        },

        sendEmail() {

            const data = {
                service_id: 'service_hn1j03l',
                template_id: 'template_jdwhdih',
                user_id: 'xysSGf8N8_nA8v3Zs',
                template_params: {
                    'email': this.name,
                    'subject': this.select,
                    'message': this.mensaje,
                }
            };
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok == true) {
                        this.snack = !this.snack
                    } else {
                        console.log('Oops...')
                    }
                })

        }

    },
    computed: {
        language: {
            get() {
                return store.state.language
            },
            set() {

            }
        }
    }
}


</script>


<style scoped lang="scss">

.snack-bar-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    padding: 15px;

    p {
        font-family: var(--regular);
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: bolder;
        color: var(--clr4);
        padding: 15px;
    }

    img {
        width: 100px;
    }
}

.v-btn {
    text-transform: none !important;
    background-color: transparent;

    h3 {
        color: var(--clr4);
        font-family: 'calibri-regular';
        font-size: .9rem;
        text-transform: uppercase;
    }
}

p {
    color: var(--clr4);
    font-family: 'calibri-regular';
    font-size: .9rem;
}

.footer {
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100dvw;
    height: 100px;
    background: linear-gradient(to bottom, transparent 50%, #000000 100%);

    img {
        width: 50px;
    }
}

* {
    --clr1: #1b96ae;
    --clr2: #231f20;
    --clr3: #808285;
    --clr4: #FFF;
    --section-height: 450px;
    --regular: 'HelveticaNeueRegular';
    --bold: 'HelveticaNeueBlackCondensed';
    --calibri: 'Calibri'
}

.col-p p {
    font-family: var(--regular);
    color: var(--clr4);
    font-weight: 700;
    font-size: 1rem;
}

.v-btn {
    text-transform: none !important;
    background-color: var(--clr4);
    border: 1px solid var(--clr1);
    transition: all .5s ease-in-out;

    h3 {
        font-family: 'Calibri';
        color: var(--clr2);
        transition: all .5s ease-in-out;
    }
}

.v-btn:hover {
    background-color: var(--clr1);

    h3 {
        color: var(--clr4);
    }
}

.section-5 {
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('/src/assets/5_CONTACTO.jpg');
    background-size: cover;
    background-position: 60% 20%;


    .form-container {
        height: 100dvh;
        width: 100dvw;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: rgba($color: #000000, $alpha: .2);
    }

}

form {
    width: 40%;
    background-color: var(--clr4);
    padding: 30px;
    border-bottom: 2px solid var(--clr1);
    border-left: 2px solid var(--clr1);
    border-radius: 10%;
    margin-left: 60px;
}


@media only screen and (max-width: 900px) {
    .section-5 {
        .form-container {
            width: 100dvw;

            form {
                width: 100%;
                margin-left: 0;
                margin: 10px;
            }
        }
    }
}
</style>