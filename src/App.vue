<template>
  <h1>componente </h1>
  <hr>
  <!-- <WelcomComponent /> -->
  <Mycounter :value="5" title="Comunicacion entre componente" />
  <MycounterScript :value="10" title="Comunicacion entre componente props 2" />
  <MyCounterScript2 :value="25" title="Comunicacion entre componente props 3" :nameBtn="nameBtn" />


</template>

<script lang="ts" setup>
import Mycounter from './components/MyCounter.vue'
import MycounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/MyCounterScript2/MyCounterScript2.vue';
/* import WelcomComponent from './components/welcome-component/WelcomComponent.vue'; */

const nameBtn = 'Boton ruta'

</script>
