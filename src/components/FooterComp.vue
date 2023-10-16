<template>
    <v-footer class=" footer">
        <v-row justify="center" no-gutters>
            <v-btn elevation="0" v-for="button in buttons" :key="button.id" class="mx-2 mb-10" @click="scrollId(button)">
                <h3>{{ button.name }}</h3>
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                <p> © {{ new Date().getFullYear() }} — <strong>CXP Exploration . Todos los derechos reservados</strong></p>
            </v-col>
        </v-row>
    </v-footer>
</template>


<script>

export default {
    name: 'FooterComp',
    data: () => ({
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
        ]
    }),
    methods: {
        scrollId(button) {
            let id = document.getElementById(button.id)
            id.scrollIntoView({ behavior: 'smooth' }, true)
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
    --section-height: 450px;
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
p{
    color: var(--clr4);
        font-family: 'calibri-regular';
        font-size: .9rem;
}

.footer {
 background-color: transparent;
}
</style>