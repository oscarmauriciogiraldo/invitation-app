<template>
    <h1>Hola soy el componente reutilizable</h1>
    <section>


        <h3>counter: {{ counter }}</h3>

        <h3>Square: {{ squereCounter }}</h3>

        <!-- <h4>{{ props.title }}</h4> -->

        <div class="containerButton">
            <!-- vue extre el valor reactivo para utilizarlo aca -->
            <button class="mainButton" @click="counter++">+ 1</button>
            <button @click="counter--">- 1</button>
        </div>
    </section>


</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';


const { counter, squereCounter } = useCounter();
//Recibir propiedades
/* const props = defineProps({
    value: Number
    value: { type: Number, required: true }
}) */
/* const props = defineProps<{
    value: number
}>(); */

/* Tambien se puede definir un objeto para los props */
/* interface Props {
    //Puede ser un numero o indefinido
    value: number;
    title: string;
}

const props = defineProps<Props>(); */
</script>