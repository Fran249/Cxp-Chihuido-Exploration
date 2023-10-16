<template>
  <div>
    <adminDrawer v-if="existeUsuario"/>
    <AdminComp v-if="existeUsuario && loadImg == false && admComp == true"/>
    <LoginComp v-if="!existeUsuario"/>
    <LoadImages v-if="existeUsuario && loadImg == true && admComp == false"/>
    <editPublishComp v-if="existeUsuario && loadImg == false && admComp == false && editComp == true"/>
  </div>
</template>

<script>
import adminDrawer from '@/components/subcomponents/adminDrawer.vue';
import LoginComp from '@/components/LoginComp.vue';
import AdminComp from '@/components/AdminComp.vue';
import LoadImages from '@/components/LoadImages.vue';
import editPublishComp from '@/components/editPublishComp.vue';
import { mapGetters} from 'vuex'
import store from '@/store';
export default {
  name:'adminPanelChihuido',
  components: {
    LoginComp,
    AdminComp,
    LoadImages,
    editPublishComp,
    adminDrawer,
  },
  data:()=>({
    rol: ''
  }),
  computed: {
    ...mapGetters(["existeUsuario"]),
    loadImg:{
      get(){
        return store.state.loadImages
      }
    },  
    admComp:{
      get(){
        return store.state.adminComp
      }
    },
    editComp:{
      get(){
        return store.state.editComp
      }
    }
  }
  
}
</script>