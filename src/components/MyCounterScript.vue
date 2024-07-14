<template>
    <h1>
        Hola soy el componente reutilizable 2: MyCounterScript
        <br>
        tambien reutilizando la logica
    </h1>
    <section>


        <h3>counter2: {{ counter }}</h3>

        <h3>Square2: {{ squereCounter }}</h3>



        <div class="containerButton">
            <!-- vue extre el valor reactivo para utilizarlo aca -->
            <button class="mainButton" @click="counter++">+ 1</button>
            <button @click="counter--">- 1</button>
        </div>
    </section>


</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true }
    },

    setup(props) {

        const { counter, squereCounter } = useCounter(props.value);

        return {
            counter,
            squereCounter
        }
    }
})

</script>