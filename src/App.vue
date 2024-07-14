<template>
  <h1>componente </h1>
  <hr>
  <!-- <WelcomComponent /> -->
  <Mycounter :value="5" title="Comunicacion entre componente" />
  <MycounterScript :value="10" />
  <MyCouonterScript2 :value="20" />


</template>

<script lang="ts" setup>
import Mycounter from './components/MyCounter.vue'
import MycounterScript from './components/MyCounterScript.vue'
import MyCouonterScript2 from './components/MyCounterScript2/MyCouonterScript2';
/* import WelcomComponent from './components/welcome-component/WelcomComponent.vue'; */
</script>
