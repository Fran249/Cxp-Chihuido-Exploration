<template>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent  @click="rail = false">
        <v-list-item prepend-avatar="https://i.imgur.com/83BVTro.jpg" title="CXP-ADMIN" nav>
            <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav lines="two">
            <v-list-item prepend-icon="mdi-logout" title="Cerrar sesion" value="home" @click="cerrarSesion"></v-list-item>
            <v-list-item prepend-icon="mdi-image" title="Cargar imagenes" value="home"
                @click="changeViewToLoad()"></v-list-item>
            <v-list-item prepend-icon="mdi-publish" title="Publicar contenido" value="home"
                @click="changeViewToAdm()"></v-list-item>
            <v-list-item prepend-icon="mdi-pencil" title="Editar publicaciones" value="home"
                @click="changeViewToEdit()"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script>
import store from '@/store'
import { mapActions } from 'vuex'
export default {
    data:()=>({
        drawer: true,
        rail: true,
    }),
    methods: {
        ...mapActions(['cerrarSesion']),
        changeViewToLoad() {
            store.commit('loadImages', true)
            store.commit('adminComp', false)
            store.commit('editComp', false)

        },
        changeViewToAdm() {
            store.commit('loadImages', false)
            store.commit('editComp', false)
            store.commit('adminComp', true)

        },
        changeViewToEdit() {
            store.commit('loadImages', false)
            store.commit('adminComp', false)
            store.commit('editComp', true)
     
        },
    }
}
</script>