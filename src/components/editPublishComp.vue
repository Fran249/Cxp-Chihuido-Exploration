<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h3 class="h3-title text-center">Editar contenido</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center" style="gap: 15px" v-for="project in projects" :key="project.titleName">
                    <h3 class="h3-title">{{ project.titleName }}</h3>
                    <v-tooltip text="Editar contenido">
                        <template v-slot:activator="{ props }">
                            <v-btn elevation="0" v-bind="props" icon="mdi-pencil"
                                @click="openDialog(project), dialogEdit = !dialogEdit">
                            </v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Cambiar imagen">
                        <template v-slot:activator="{ props }">
                            <v-btn elevation="0" v-bind="props" icon="mdi-image"
                                @click="openDialog(project), dialogEditImage = !dialogEditImage"></v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip text="Borrar Publicacion">
                        <template v-slot:activator="{ props }">
                            <v-btn elevation="0" v-bind="props" icon="mdi-delete"
                                @click="deleteProject(project)"></v-btn>
                        </template>
                    </v-tooltip>
                </div>
            </v-col>
        </v-row>
        <v-dialog v-model="dialogEdit" :scrollable="true" fullscreen>
            <v-btn prepend-icon="mdi-close" dark class="button-to-close" @click="dialogEdit = !dialogEdit">
                Cerrar
            </v-btn>
            <v-container v-for="(project, index) in selectedProject" :key="index" class="cont" fluid>

                <v-row>
                    <v-col cols="6">
                        <v-tooltip text="No mas de 15 caracteres y no menos de 5 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-text-field v-bind="props" v-model="project.titleName"
                                    label="Titulo para su publicacion"></v-text-field>
                            </template>
                        </v-tooltip>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">

                        <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-textarea v-bind="props" v-model="project.textSpanish1" variant="filled"
                                    label="Descripcion en español" auto-grow></v-textarea>
                            </template>
                        </v-tooltip>

                    </v-col>
                    <v-col cols="6">
                        <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-textarea v-bind="props" v-model="project.textEnglish1" variant="filled"
                                    label="Descripcion en ingles" auto-grow></v-textarea>
                            </template>
                        </v-tooltip>
                    </v-col>
                </v-row>
                <!--Lista Español-->
                <v-row>
                    <v-col cols="6">
                        <v-tooltip v-for="(li, index) in project.ulSpanish" :key="index"
                            text="No mas de 20 caracteres y no menos de 5 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-text-field v-bind="props" v-model="li.li"
                                    label="Punto para lista ordenada en español"></v-text-field>
                            </template>
                        </v-tooltip>

                    </v-col>
                    <v-col cols="6">
                        <v-tooltip v-for="(li, index) in project.ulEnglish" :key="index"
                            text="No mas de 20 caracteres y no menos de 5 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-text-field v-bind="props" v-model="li.li"
                                    label="Punto para lista ordenada en Ingles"></v-text-field>
                            </template>
                        </v-tooltip>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">

                        <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-textarea v-bind="props" v-model="project.textSpanish2" variant="filled"
                                    label="Descripcion en español" auto-grow></v-textarea>
                            </template>
                        </v-tooltip>

                    </v-col>
                    <v-col cols="6">
                        <v-tooltip text="No mas de 200 caracteres y no menos de 50 caracteres">
                            <template v-slot:activator="{ props }">
                                <v-textarea v-bind="props" v-model="project.textEnglish2" variant="filled"
                                    label="Descripcion en ingles" auto-grow></v-textarea>
                            </template>
                        </v-tooltip>
                    </v-col>
                </v-row>
                <v-btn @click="saveChanges(project.titleName, project.textSpanish1, project.textSpanish2, project.textEnglish1, project.textEnglish2,
                    project.ulSpanish, project.ulEnglish, project.img, project.textAlign, project.id)">
                    Guardar Cambios
                </v-btn>
            </v-container>
            <v-snackbar v-model="updating" color="white" timeout="800">
                <h3 class="h3-title text-center">Actualizando, espere aqui...</h3>
            </v-snackbar>
            <v-snackbar v-model="snackSaved" color="white" timeout="800">
                <h3 class="h3-title text-center">Guardado! la pagina se va a recargar...</h3>
            </v-snackbar>
        </v-dialog>
        <v-dialog v-model="dialogEditImage" :scrollable="true" fullscreen>
            <v-btn prepend-icon="mdi-close" dark class="button-to-close" @click="dialogEditImage = !dialogEditImage">
                Cerrar
            </v-btn>
            <v-container class=" cont" fluid style="min-height: 100dvh;">
                <v-row justify="center">
                    <v-col cols="12">
                        <h3 class="h3-title text-center">Selecciona una Imagen</h3>
                    </v-col>
                </v-row>
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
                <v-row>
                    <v-col>
                        <v-btn
                            @click="saveChanges(prevValues.titleName, prevValues.textSpanish1, prevValues.textSpanish2, prevValues.textEnglish1, prevValues.textEnglish2, prevValues.ulSpanish, prevValues.ulEnglish, selectedLink, prevValues.textAlign, prevValues.id)">
                            Guardar Cambios
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-snackbar v-model="snackImgSelected" color="white" timeout="800">
                <h3 class="h3-title text-center">Imagen seleccionada</h3>
            </v-snackbar>
            <v-snackbar v-model="updating" color="white" timeout="800">
                <h3 class="h3-title text-center">Actualizando, espere aqui...</h3>
            </v-snackbar>
            <v-snackbar v-model="snackSaved" color="white" timeout="1100">
                <h3 class="h3-title text-center">Guardado! la pagina se va a recargar...</h3>
            </v-snackbar>
        </v-dialog>
    </v-container>
</template>

<script>


import { doc, onSnapshot, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '/src/firebase/index.js'
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
const storage = getStorage();
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export default {
    name: 'LoadImages',
    data: () => ({
        projects: [],
        ulSpanishSelected: '',
        ulEnglishSelected: '',
        dialogEdit: false,
        prevValues: {},
        selectedProject: [],
        ulValue: 1,
        snackSaved: false,
        dialogEditImage: false,
        links: [],
        snackImgSelected: false,
        selectedLink: null,
        updating: false,
    }),
    methods: {
        openDialog(project) {
            this.selectedProject = [project]
            this.selectedProject.forEach(item => {
                const prevObjct = {
                    titleName: item.titleName,
                    textSpanish1: item.textSpanish1,
                    textSpanish2: item.textSpanish2,
                    textEnglish1: item.textEnglish1,
                    textEnglish2: item.textEnglish2,
                    ulSpanish: item.ulSpanish,
                    ulEnglish: item.ulEnglish,
                    img: item.img,
                    textAlign: item.textAlign,
                    id: item.id,
                }

                Object.assign(this.prevValues, prevObjct)
            })

        },
        selectedImg(link) {

        this.selectedLink = link.src
        this.snackImgSelected = true
        },
        deleteProject(project){
            const projectRef = doc(db, "projects/projectdata");
            updateDoc(projectRef, {
                project: arrayRemove(
                   project),

            })
        },
        saveChanges(titleName, textSpanish1, textSpanish2, textEnglish1, textEnglish2, ulSpanish, ulEnglish, img, textAlign, id) {


            console.log(this.prevValues)
            const projectRef = doc(db, "projects/projectdata");
            updateDoc(projectRef, {
                project: arrayRemove({
                    id: this.prevValues.id,
                    img: this.prevValues.img,
                    textAlign: this.prevValues.textAlign,
                    textEnglish1: this.prevValues.textEnglish1,
                    textEnglish2: this.prevValues.textEnglish2,
                    textSpanish1: this.prevValues.textSpanish1,
                    textSpanish2: this.prevValues.textSpanish2,
                    titleName: this.prevValues.titleName,
                    ulEnglish: this.prevValues.ulEnglish,
                    ulSpanish: this.prevValues.ulSpanish,
                }),

            })
            this.updating = true
            setTimeout(() => {
                this.agregarNuevo(titleName, textSpanish1, textSpanish2, textEnglish1, textEnglish2, ulSpanish, ulEnglish, img, textAlign, id)
            }, 3000)
        },
        agregarNuevo(titleName, textSpanish1, textSpanish2, textEnglish1, textEnglish2, ulSpanish, ulEnglish, img, textAlign, id) {
            const nuevoArray = { titleName, textSpanish1, textSpanish2, textEnglish1, textEnglish2, ulSpanish, ulEnglish, img, textAlign, id }
            console.log(nuevoArray)
            const projectRef = doc(db, "projects/projectdata");
            updateDoc(projectRef, {
                project: arrayUnion({
                    id: id,
                    img: img,
                    textAlign: textAlign,
                    textEnglish1: textEnglish1,
                    textEnglish2: textEnglish2,
                    textSpanish1: textSpanish1,
                    textSpanish2: textSpanish2,
                    titleName: titleName,
                    ulEnglish: ulEnglish,
                    ulSpanish: ulSpanish,
                }),
            })
            this.snackSaved = true
            setTimeout(() => {
                this.dialogEdit = false
                location.reload()
            }, 800)

        }
    },
    mounted() {
        onSnapshot(doc(db, "projects/projectdata"), (doc) => {
            this.projects = doc.data().project;

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

.cont {
    background-color: var(--clr4);
    overflow-y: scroll;
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

.button-to-close {
    position: absolute;
    top: 0px;
    right: 50px;
    background-color: var(--clr2);
    color: #FFF;
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