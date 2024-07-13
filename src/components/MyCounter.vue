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
/* const props = defineProps({
    value: Number
    value: { type: Number, required: true }
}) */
/* const props = defineProps<{
    value: number
}>(); */

/* Tambien se puede definir un objeto para los props */
interface Props {
    //Puede ser un numero o indefinido
    value?: number;
}

const props = defineProps<Props>();

/* si el valor es indefinido entonces 5 sera el valor por defecto */
const counter = ref(props.value ?? 5)

const squereCounter = computed(() => counter.value * counter.value)


</script>