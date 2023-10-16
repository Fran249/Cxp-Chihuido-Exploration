<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h3 class="h3-title text-center">ADMINISTRAR IMAGENES</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" v-for="link in links" :key="link.src">
                <v-img :src="link.src" cover height="200">
                </v-img>
            </v-col>
        </v-row>
        <v-row>

            <v-row justify="center" align-content="center">
                <div class="w-100 d-flex justify-center align-center ma-10" style="gap: 20px;">
                    <input v-if="UploadValue == 0" type="file" @change="onFileSelected" />
                    <v-btn @click="subirImg">
                        <h3 class="h3-title-btn">Subir imagen</h3>
                        <v-icon color="black">
                            mdi-upload
                        </v-icon>
                    </v-btn>
                </div>
            </v-row>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-banner lines="three" icon="mdi-alert" color="black" class="my-4">
                    <v-banner-text>
                        <h3 class="h3-title-banner">Recorda subir imagenes de no menos de 1360px X 720px, y no mas de 1920px
                            X
                            1080,<br>Esto es para mejorar la calidad de la pagina, y su rendimiento <br>
                            Muchas gracias</h3>
                    </v-banner-text>
                </v-banner>
                <v-snackbar v-model="updating" color="white" timeout="800">
                    <h3 class="h3-title text-center">Actualizando, espere aqui...</h3>
                </v-snackbar>
                <v-snackbar v-model="snackSaved" color="white" timeout="1100">
                    <h3 class="h3-title text-center">Guardado! la pagina se va a recargar...</h3>
                </v-snackbar>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import { mapActions } from "vuex";
import { getStorage, ref, getDownloadURL, uploadBytes, listAll } from "firebase/storage";
import store from "@/store";
import { firebaseConfig } from '../firebase/index.js'
import { initializeApp } from 'firebase/app';
const storage = getStorage();
initializeApp(firebaseConfig)

export default {
    name: 'LoadImages',
    data: () => ({
        UploadValue: 0,
        selectedFile: null,
        links: [],
        snackSaved: false,
        updating: false,
    }),
    methods: {
        ...mapActions(["cerrarSesion"]),
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile)
        },
        subirImg() {
            const storageRef = ref(storage, `projects/${this.selectedFile.name}`);
            uploadBytes(storageRef, this.selectedFile).then(() => {
                this.updating = true
                setTimeout(()=>{
                    this.snackSaved = true
                },1200)
                setTimeout(() => {
                    location.reload()
                }, 3000)
            });
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
    },
    mounted() {
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
                    console.log(this.links)
                });
            });
        }

        );
    }
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

.h3-title-banner {
    font-family: var(--regular);
    color: var(--clr2);
    font-size: 1rem;
    margin-bottom: 3px;
    text-transform: uppercase;

}
</style>