<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>


<style>
@font-face {
  font-family: 'HelveticaNeueRegular';
  src: url(../src/assets/HelveticaNeueRegular.otf);
  
}

@font-face {
  font-family: 'HelveticaNeueBlackCondensed';
  src: url(../src/assets/HelveticaNeueBlackCondensed.otf);
}
@font-face {
  font-family: 'Calibri';
  src: url(../src/assets/CalibriBold.TTF);
}
@font-face{
  font-family: 'HelveticaNeueCondensedBold';
  src: url(../src/assets/HelveticaNeueCondensedBold.ttf)
}
</style>