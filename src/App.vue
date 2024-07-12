<template>
  <h1>Hola invitacion</h1>
  <section>
    <h3>
      counter: {{ 10 }}
    </h3>
    <h3>squere {{ 10 * 10 }}</h3>

    <div class="containerButton">

    </div>
  </section>
</template>

<script lang="ts" setup>
console.log('Hola SFC single file component')
</script>

<style scoped>
h1 {
  color: #B38D6A;
}
</style>
