<template>
  <h1>componente </h1>
  <hr>
  <!-- <WelcomComponent /> -->
  <Mycounter :value="5" title="Comunicacion entre componente" />
  <MycounterScript :value="10" />
  <MyCounterScript2 :value="25" />


</template>

<script lang="ts" setup>
import Mycounter from './components/MyCounter.vue'
import MycounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/MyCounterScript2/MyCounterScript2';
/* import WelcomComponent from './components/welcome-component/WelcomComponent.vue'; */
</script>
