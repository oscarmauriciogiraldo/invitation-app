<template>
    <h1>Hola soy el componente reutilizable</h1>
    <section>


        <h3>counter: {{ counter }}</h3>

        <h3>Square: {{ squereCounter }}</h3>

        <div class="containerButton">
            <!-- vue extre el valor reactivo para utilizarlo aca -->
            <button class="mainButton" @click="counter++">+ 1</button>
            <button @click="counter--">- 1</button>
        </div>
    </section>


</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

//Recibir propiedades
const props = defineProps({
    /* value: Number */
    value: { type: Number, required: true }
})

//const counter = ref(10)
const counter = ref(props.value)

const squereCounter = computed(() => counter.value * counter.value)


</script>