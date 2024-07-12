<template>
  <h1>Hola invitacion</h1>
  <section>
    <!-- <h3>counter: {{ 10 }}</h3>
    <h3>squere {{ 10 * 10 }}</h3> -->

    <h3>counter: {{ counter }}</h3>
    <!-- <h3>squere {{ counter * counter }}</h3> -->
    <h3>Square: {{ squereCounter }}</h3>

    <div class="containerButton">
      <!-- vue extre el valor reactivo para utilizarlo aca -->
      <button class="mainButton" @click="counter++">+ 1</button>
      <button @click="counter--">- 1</button>
    </div>
  </section>

  <section class="contWelcome">

  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const counter = ref(10)

const squereCounter = computed(() => counter.value * counter.value)


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h1 {
  color: #b38d6a;
}

section {
  .containerButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2% 0%;
    flex-direction: column;

    .mainButton {
      display: flex;
      width: 40%;
      padding: 5px;
      border: none;
      border-radius: 10px;
      text-align: center;
      justify-content: center;
      background: #b38d6a;
      color: #f3f2f3;
      font-size: 2.5rem;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
    }
  }
}

section.contWelcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
