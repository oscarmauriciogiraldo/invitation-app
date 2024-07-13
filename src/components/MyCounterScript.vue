<template>
    <h1>
        Hola soy el componente reutilizable 2


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
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true }
    },

    setup(props) {

        const counter = ref(props.value)
        const squereCounter = computed(() => counter.value * counter.value)

        return {
            counter,
            squereCounter
        }
    }
})

</script>