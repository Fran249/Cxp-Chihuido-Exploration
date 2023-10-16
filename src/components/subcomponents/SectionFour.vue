<template>
    <section class="section-4" id="section-4">
        <v-container class="v-container" fluid>
            <v-row style="position: absolute;">
                <v-col cols="12" class="d-flex justify-start align-center flex-wrap" style="gap: 15px;">
                    <button class=" ml-5 mt-5 button-h3" v-for="project in projects" :key="project.titleName"
                        @click="changeProjectView(project)">
                        <h3 class="h3-btn">{{ project.titleName }}</h3>
                    </button>
                </v-col>
            </v-row>
            <Transition duration="550" name="nested">
                <v-row align-content="center" v-if="shade == true">

                    <v-col cols="6">

                        <inner-image-zoom  :height="600" :width="600" v-for="img in firstProjectToShow" :key="img.name"
                            :src="img.img" :zoomSrc="img.img" />

                    </v-col>
                    <v-col cols="6" align-self="center">
                        <div class="d-flex justify-center align-center flex-column w-100 div-info"
                            v-for="project in firstProjectToShow" :key="project.name">
                            <p v-bind:style="{ textAlign: project.textAlign }" v-if="langValue == 'español'">{{
                                project.textSpanish1 }}</p>
                            <p v-bind:style="{ textAlign: project.textAlign }" v-if="langValue == 'english'">{{
                                project.textEnglish1 }}</p>
                            <div v-if="langValue == 'english'">
                                <div v-for="li in project.ulEnglish" :key="li.li">
                                    <ul class="mt-3">
                                        <li v-if="li.li != ''">{{ li.li }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div v-if="langValue == 'español'">
                                <div v-for="li in project.ulSpanish" :key="li.li">
                                    <ul class="mt-3">
                                        <li v-if="li.li != ''">{{ li.li }}</li>
                                    </ul>
                                </div>
                            </div>
                            <p v-bind:style="{ textAlign: project.textAlign }" class="mt-6" v-if="langValue == 'español'">{{
                                project.textSpanish2 }}</p>
                            <p v-bind:style="{ textAlign: project.textAlign }" class="mt-6" v-if="langValue == 'english'">{{
                                project.textEnglish2 }}</p>
                        </div>

                    </v-col>

                </v-row>
            </Transition>
        </v-container>
        <v-container class="v-containermobile" fluid>
            <v-row>
                <div class="d-flex justify-center align-center flex-wrap mt-5"
                    style="gap: 25px; height: 100px; position: absolute;">
                    <button class="  button-h3" v-for="project in projects" :key="project.titleName"
                        @click="changeProjectView(project)">
                        <h3 class="h3-btn">{{ project.titleName }}</h3>
                    </button>
                </div>
            </v-row>
            <TransitionGroup duration="550" name="nested">
                <v-row v-if="shade == true" style="margin-top: 150px;">
                    <v-col cols="12">

                        <inner-image-zoom :fullscreenOnMobile="true" :height="600" :width="600" v-for="img in firstProjectToShow" :key="img.name"
                            :src="img.img" :zoomSrc="img.img" />

                    </v-col>
                    <v-col cols="12" align-self="center" v-if="shade == true">
                        <div class="d-flex justify-center align-center flex-column w-100 div-info"
                            v-for="project in firstProjectToShow" :key="project.name">
                            <p v-bind:style="{ textAlign: project.textAlign }" v-if="langValue == 'español'">{{
                                project.textSpanish1 }}</p>
                            <p v-bind:style="{ textAlign: project.textAlign }" v-if="langValue == 'english'">{{
                                project.textEnglish1 }}</p>
                            <div v-if="langValue == 'english'">
                                <div v-for="li in project.ulEnglish" :key="li.li">
                                    <ul class="mt-3">
                                        <li v-if="li.li != ''">{{ li.li }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div v-if="langValue == 'español'">
                                <div v-for="li in project.ulSpanish" :key="li.li">
                                    <ul class="mt-3">
                                        <li v-if="li.li != ''">{{ li.li }}</li>
                                    </ul>
                                </div>
                            </div>
                            <p v-bind:style="{ textAlign: project.textAlign }" class="mt-6" v-if="langValue == 'español'">{{
                                project.textSpanish2 }}</p>
                            <p v-bind:style="{ textAlign: project.textAlign }" class="mt-6" v-if="langValue == 'english'">{{
                                project.textEnglish2 }}</p>
                        </div>

                    </v-col>

                </v-row>
            </TransitionGroup>
        </v-container>
    </section>
</template>



<script>
import store from '@/store';
import InnerImageZoom from 'vue-inner-image-zoom';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from '/src/firebase/index.js'
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export default {
    name: 'SectionFive',
    components: {
        'inner-image-zoom': InnerImageZoom
    },
    data: () => ({
        image: null,
        dialogimg: false,
        emptyForProjectInfo: [],
        firstProjectToShow: [],
        projects: [],
        shade: true,
    }),
    methods: {
        openImage(img) {
            this.dialogimg = !this.dialogimg
            this.image = img.img

        },
        changeProjectView(project) {
            this.shade = false
            this.firstProjectToShow = { project }
            setTimeout(() => {
                this.shade = true;
            }, 500);
        }
    },
    computed: {
        langValue: {
            get() {
                return store.state.language
            },
            set() {

            }
        }
    },
    mounted() {
        onSnapshot(doc(db, "projects/projectdata"), (doc) => {
            this.projects = doc.data().project;
            this.firstProjectToShow.push(this.projects[0])

        });
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

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0.001;
}

.button-h3 {
    border-bottom: 1px solid transparent;
}

.button-h3:hover {
    border-bottom: 1px solid #fff;
    transition: all .5s ease-in-out;

}

.h3-btn {
    font-size: 1.2rem;
    font-family: var(--regular);
    color: var(--clr4);
    text-transform: uppercase;
}

.v-container {
    background: rgba($color: #000000, $alpha: .5);
    min-height: 100dvh;
    width: 100dvw;
    display: grid;
    place-content: center;
}

.section-4 {
    width: 100dvw;
    min-height: 100dvh;
    display: grid;
    place-content: center;
    text-align: center;
    background-image: url('/src/assets/nav-bckg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 20%;




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

.img-dialog {
    width: 500px;
}

.img-normal {
    width: 300px;
    box-shadow: 10px 10px 10px #000000;
}

ul li {
    font-size: 1.2rem;
    font-family: var(--regular);
    color: var(--clr2);
}

.v-containermobile {
    display: none;
}

@media only screen and (max-width: 900px) {
    .v-container {
        display: none;
    }

    .v-containermobile {
        background: rgba($color: #000000, $alpha: .5);
        min-height: 100dvh;
        width: 100dvw;
        display: flex;
        flex-direction: column;

        .div-info p {
            font-family: var(--regular);
            font-size: 1.2rem;
            color: var(--clr4);
            padding: 10px;
        }

        ul {
            padding: 3px;
        }
    }

    p {
        font-family: var(--regular);
        font-size: 1rem;
        color: var(--clr2);
    }



    ul li {
        font-size: 1rem;
        font-family: var(--regular);
        color: var(--clr2);
    }

    .img-normal {
        width: 230px;
    }
}
</style>