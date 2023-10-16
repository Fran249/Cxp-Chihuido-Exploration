<template>
    <v-main>
        <v-container class="mt-3 mb-3">
            <v-row justify="center">
                <v-col cols="12">
                    <h3 class="h3-title text-center">Selecciona una Imagen</h3>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="4" v-for="link in links" :key="link.src">
                    <v-img cover @mouseover="link.buttonShow = true" height="200" @mouseleave="link.buttonShow = false"
                        :src="link.src" @click="selectedImg(link)">
                        <div v-if="link.buttonShow === true" v-bind:class="{ active: link.buttonShow }">
                            <h3>SELECCIONAR IMAGEN</h3>
                        </div>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h3 class="h3-title text-center">Rellena los campos</h3>
                </v-col>
            </v-row>
            <v-row>

                <v-col cols="12">
                    <v-container>

                        <v-tooltip text="No mas de 15 caracteres y no menos de 5 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-text-field v-bind="props" v-model="titleName"
                                    label="Titulo para su publicacion"></v-text-field>
                            </template>
                        </v-tooltip>
                        <v-row>
                            <v-col cols="6">

                                <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-textarea v-bind="props" v-model="textSpanish1" variant="filled"
                                            label="Descripcion en español" auto-grow></v-textarea>
                                    </template>
                                </v-tooltip>

                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-textarea v-bind="props" v-model="textEnglish1" variant="filled"
                                            label="Descripcion en ingles" auto-grow></v-textarea>
                                    </template>
                                </v-tooltip>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-bind="props" v-model="liSpanish1"
                                            label="Punto para lista ordenada en español"></v-text-field>
                                    </template>
                                </v-tooltip>
                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-bind="props" v-model="liEnglish1"
                                            label="Punto para lista ordenada en Ingles"></v-text-field>
                                    </template>
                                </v-tooltip>
                            </v-col>
                        </v-row>
                        <v-row v-if="ulValue >= 2">
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-bind="props" v-model="liSpanish2"
                                            label="Punto para lista ordenada en Español"></v-text-field>
                                    </template>
                                </v-tooltip>

                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-bind="props" v-model="liEnglish2"
                                            label="Punto para lista ordenada en Ingles"></v-text-field>
                                    </template>
                                </v-tooltip>

                            </v-col>
                        </v-row>
                        <v-row v-if="ulValue >= 3">
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-model="liSpanish3" v-bind="props"
                                            label="Punto para lista ordenada en Español"></v-text-field>
                                    </template>
                                </v-tooltip>

                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-model="liEnglish3" v-bind="props"
                                            label="Punto para lista ordenada en Ingles"></v-text-field>
                                    </template>
                                </v-tooltip>

                            </v-col>
                        </v-row>
                        <v-row v-if="ulValue >= 4">
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-model="liSpanish4" v-bind="props"
                                            label="Punto para lista ordenada en Español"></v-text-field>
                                    </template>
                                </v-tooltip>
                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-model="liEnglish4" v-bind="props"
                                            label="Punto para lista ordenada en Ingles"></v-text-field>
                                    </template>
                                </v-tooltip>

                            </v-col>
                        </v-row>
                        <v-row v-if="ulValue >= 5">
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-model="liSpanish5" v-bind="props"
                                            label="Punto para lista ordenada en Español"></v-text-field>
                                    </template>
                                </v-tooltip>
                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 20 caracteres y no menos de 5 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-text-field v-model="liEnglish5" v-bind="props" v-if="ulValue >= 5"
                                            label="Punto para lista ordenada en Ingles"></v-text-field>
                                    </template>
                                </v-tooltip>

                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn :disabled="ulValue >= 5" class="mt-2 mr-5 mb-5" @click="ulValue++">
                                    <h3 class="h3-title-btn">Agregar otro campo</h3> <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                <v-btn :disabled="ulValue == 1" class="mt-2 mb-5" @click="ulValue--">
                                    <h3 class="h3-title-btn">Quitar un campo</h3> <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-textarea v-model="textSpanish2" v-bind="props" variant="filled"
                                            label="Descripcion en español" auto-grow></v-textarea>
                                    </template>
                                </v-tooltip>

                            </v-col>
                            <v-col cols="6">
                                <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                                    <template v-slot:activator="{ props }">
                                        <v-textarea v-bind="props" v-model="textEnglish2" variant="filled"
                                            label="Descripcion en ingles" auto-grow></v-textarea>
                                    </template>
                                </v-tooltip>

                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col cols="12">
                    <div class="d-flex flex-column justify-center align-center w-100">
                        <h3 class="h3-title-btn ma-3">Alineacion del texto</h3>
                        <v-radio-group inline v-model="text">
                            <v-radio label="Izquierda" value="left"></v-radio>
                            <v-radio label="Centro" value="center"></v-radio>
                            <v-radio label="Derecha" value="right"></v-radio>
                        </v-radio-group>
                    </div>
                    <div class="d-flex justify-center align-center mt-10" style="gap: 10px;">
                        <v-btn width="300" @click="dialogPreviewSpanish = !dialogPreviewSpanish">
                            <h3 class="h3-title-btn">Preview en Español</h3>
                            <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                        <v-btn width="300" @click="dialogPreviewEnglish = !dialogPreviewEnglish">
                            <h3 class="h3-title-btn">Preview en Ingles</h3>
                            <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                        <v-btn width="300" @click="publishFunc()">
                            <h3 class="h3-title-btn">Subir contenido</h3>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialogPreviewSpanish">
            <v-container>
                <v-row>
                    <div style="position: absolute; top: 0; left: 0;">
                        <v-btn icon="mdi-close" class="text-center" color="white"
                            @click="dialogPreviewSpanish = !dialogPreviewSpanish"></v-btn>
                    </div>
                    <v-col cols="6">
                        <v-img cover :src="selectedImgToShow" width="500" height="500">
                        </v-img>
                    </v-col>
                    <v-col cols="6">
                        <div class="d-flex justify-center align-center flex-column w-100 div-info">
                            <p v-bind:style="{textAlign: text}">{{ textSpanish1 }}</p>
                            <div>
                                <ul class="mt-3" v-bind:style="{textAlign: text}">
                                    <li >{{ liSpanish1 }}</li>
                                    <li v-if="liSpanish2 != ''">{{ liSpanish2 }}</li>
                                    <li v-if="liSpanish3 != ''">{{ liSpanish3 }}</li>
                                    <li v-if="liSpanish4 != ''">{{ liSpanish4 }}</li>
                                    <li v-if="liSpanish5 != ''">{{ liSpanish5 }}</li>
                                </ul>
                            </div>
                            <p v-bind:style="{textAlign: text}" class="mt-6">{{ textSpanish2 }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-dialog>
        <v-dialog v-model="dialogPreviewEnglish">
            <v-container>
                <v-row>
                    <div style="position: absolute; top: 0; left: 0;">
                        <v-btn icon="mdi-close" class="text-center" color="white"
                            @click="dialogPreviewEnglish = !dialogPreviewEnglish"></v-btn>
                    </div>
                    <v-col cols="6">
                        <v-img cover :src="selectedImgToShow" width="500" height="500">
                        </v-img>
                    </v-col>
                    <v-col cols="6">
                        <div class="d-flex justify-center align-center flex-column w-100 div-info">
                            <p v-bind:style="{textAlign: text}">{{ textEnglish1 }}</p>
                            <div>
                                <ul  v-bind:style="{textAlign: text}" class="mt-3">
                                    <li>{{ liEnglish1 }}</li>
                                    <li v-if="liEnglish2 != ''">{{ liEnglish2 }}</li>
                                    <li v-if="liEnglish3 != ''">{{ liEnglish3 }}</li>
                                    <li v-if="liEnglish4 != ''">{{ liEnglish4 }}</li>
                                    <li v-if="liEnglish5 != ''">{{ liEnglish5 }}</li>
                                </ul>
                            </div>
                            <p v-bind:style="{textAlign: text}" class="mt-6">{{ textEnglish2 }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-dialog>
    </v-main>
    <v-snackbar v-model="snackImg" color="white" timeout="500">
        <h3 class="h3-title text-center">Imagen seleccionada</h3>
    </v-snackbar>
    <v-snackbar v-model="snackPublished" color="white" timeout="800">
        <h3 class="h3-title text-center">Contenido publicado</h3>
    </v-snackbar>

</template>



<script>
import { mapActions } from 'vuex';
import { getFirestore } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { doc, onSnapshot, arrayUnion, updateDoc, } from "firebase/firestore";
const storage = getStorage();
import { firebaseConfig } from '../firebase/index.js'
import { initializeApp } from 'firebase/app';
import store from '@/store';
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export default {
    name: 'AdminComp',

    data: () => ({
        snackImg: false,
        snackPublished: false,
        UploadValue: 0,
        dialogPreviewSpanish: false,
        dialogPreviewEnglish: false,
        text: '',
        ulValue: 1,
        selectedFile: null,
        selectedImgToShow: 'https://picsum.photos/200/300/?blur',
        links: [],
        selectedImgPreview: false,
        drawer: true,
        rail: true,
        projects: null,
        titleName: '',
        textSpanish1: '',
        textSpanish2: '',
        textEnglish1: '',
        textEnglish2: '',
        liSpanish1: '',
        liSpanish2: '',
        liSpanish3: '',
        liSpanish4: '',
        liSpanish5: '',
        liEnglish1: '',
        liEnglish2: '',
        liEnglish3: '',
        liEnglish4: '',
        liEnglish5: '',


    }),
    methods: {
        ...mapActions(["cerrarSesion"]),
        subirImg() {
            const storageRef = ref(storage, `projects/${this.selectedFile.name}`);
            uploadBytes(storageRef, this.selectedFile).then(() => {
                location.reload()
            });
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
        },
        selectedImg(link) {

            this.selectedImgToShow = link.src
            this.selectedImgPreview = !this.selectedImgPreview
            this.snackImg = true
        },
        changeViewToLoad() {
            store.commit('loadImages', true)
            store.commit('adminComp', false)
            store.commit('editComp', false)
            this.rail = !this.rail
        },
        changeViewToAdm() {
            store.commit('loadImages', false)
            store.commit('editComp', false)
            store.commit('adminComp', true)
            this.rail = !this.rail
        },
        changeViewToEdit() {
            store.commit('loadImages', false)
            store.commit('adminComp', false)
            store.commit('editComp', true)
            this.rail = !this.rail
        },

        publishFunc() {

            // const publicacion = {
            //     textSpanish1: this.textSpanish1,
            //     textEnglish1: this.textEnglish1,
            //     img: this.selectedImgToShow,
            //     ulSpanish: [
            //         {
            //             li: this.liSpanish1,
            //         },
            //         {
            //             li: this.liSpanish2,
            //         },
            //         {
            //             li: this.liSpanish3,
            //         },
            //         {
            //             li: this.liSpanish4,
            //         },
            //         {
            //             li: this.liSpanish5,
            //         }
            //     ],
            //     ulEnglish: [
            //         {
            //             li: this.liEnglish1,
            //         },
            //         {
            //             li: this.liEnglish2,
            //         },
            //         {
            //             li: this.liEnglish3,
            //         },
            //         {
            //             li: this.liEnglish4,
            //         },
            //         {
            //             li: this.liEnglish5,
            //         }
            //     ],
            //     textSpanish2: this.textSpanish2,
            //     textEnglish2: this.textEnglish2,


            // }
            const arrayEnglishChecked = [

            ]
            const arraySpanishChecked = [

            ]
            const arrayNotCheckedEnglish = [
                {
                    li: this.liEnglish1,
                },
                {
                    li: this.liEnglish2
                },
                {
                    li: this.liEnglish3
                },
                {
                    li: this.liEnglish4
                },
                {
                    li: this.liEnglish5
                }
            ]
            const arrayNotCheckedSpanish = [
                {
                    li: this.liSpanish1,
                },
                {
                    li: this.liSpanish2
                },
                {
                    li: this.liSpanish3
                },
                {
                    li: this.liSpanish4
                },
                {
                    li: this.liSpanish5
                }
            ]
            arrayNotCheckedEnglish.map(item => {
                if (item.li != '') {
                    arrayEnglishChecked.push(item)
                }

            })
            arrayNotCheckedSpanish.map(item => {
                if (item.li != '') {
                    arraySpanishChecked.push(item)
                }

            })
            const projectRef =
                doc(
                    db, `projects/projectdata`);
            updateDoc(projectRef, {

                project: arrayUnion({
                    id: this.titleName,
                    textSpanish1: this.textSpanish1,
                    textEnglish1: this.textEnglish1,
                    img: this.selectedImgToShow,
                    titleName: this.titleName,
                    textAlign: this.text,
                    ulSpanish: arraySpanishChecked,
                    ulEnglish: arrayEnglishChecked,
                    textSpanish2: this.textSpanish2,
                    textEnglish2: this.textEnglish2,

                }),
            }).then(() => {
                this.snackPublished = !this.snackPublished
                this.textEnglish1 = ''
                this.textEnglish2 = ''
                this.textSpanish1 = ''
                this.textSpanish2 = ''
                this.liEnglish1 = ''
                this.liEnglish2 = ''
                this.liEnglish3 = ''
                this.liEnglish4 = ''
                this.liEnglish5 = ''
                this.liSpanish1 = ''
                this.liSpanish2 = ''
                this.liSpanish3 = ''
                this.liSpanish4 = ''
                this.liSpanish5 = ''
                this.titleName = ''
                this.text = ''
                this.selectedImgToShow = ''
            });
        },
    },

    computed: {
        selectedImgToShowComputed: {
            get() {
                return this.selectedImgToShow
            },
            set() {
            }
        },

    },

    mounted() {

        onSnapshot(doc(db, "projects/projectdata"), (doc) => {
            this.projects = doc.data();

        });

        const listRef1 = ref(storage, "projects");
        listAll(listRef1).then((res) => {
            // eslint-disable-next-line no-unused-vars
            res.items.forEach(item => {
                // All the items under listRef.
                let downloadUrl = getDownloadURL(ref(storage, item.fullPath));
                downloadUrl.then((url) => {
                    const imgUrls = {
                        src: url,
                        buttonShow: false,
                    };
                    this.links.push(imgUrls);

                });
            });
        }

        );

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

.v-btn {
    text-transform: none !important;
}

.div-info p {
    font-family: var(--regular);
    font-size: 1.2rem;
    color: var(--clr4);
}

.div-info ul li {
    font-family: var(--regular);
    font-size: 1.2rem;
    color: var(--clr4);
}

.img-normal {
    width: 600px;
    height: 600px;
    box-shadow: 10px 10px 10px #000000;
}

.active {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    h3 {
        font-family: var(--regular);
        color: var(--clr4);

    }

}

.h3-title-btn {
    font-family: var(--calibri);
    color: var(--clr2);
    font-size: .8rem;
    text-transform: uppercase;

}

.h3-title {
    font-family: var(--regular);
    color: var(--clr2);
    font-size: 1.5rem;
    margin-bottom: 3px;
    text-transform: uppercase;

}

.main {
    display: grid;
    width: 100dvw;
    height: 100dvh;
    grid-template-columns: 1 100dvw;
    grid-template-rows: 1 100dvh;
    place-content: center;
    align-content: center;

    .cont {
        width: 100dvw;
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .input-file {
            display: flex;
            height: 100px;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }

        .grid-img {

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }

    form {
        min-width: 300px;
        max-width: 600px;
    }

    .img-logo {
        display: grid;
        place-content: center;
        margin-bottom: 50px;

        img {
            width: 50%;
        }
    }




}
</style>