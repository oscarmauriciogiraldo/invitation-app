<template>
  <h1>componente </h1>
  <hr>
  <!-- Component -->
  <!-- comunicar componente padre
    por ejemplo el valor inicial lo puede dar el padre
    por ejemplo 5: esto se podria hacer de la siguiente manera
    v-biund:
    ahora usualmente se ponen dos punts
    :value="5"
    defineProps: recibe propiedades del padre al hijo
  -->
  <Mycounter :value="5" />

</template>

<script lang="ts" setup>
import Mycounter from './components/MyCounter.vue'
</script>
