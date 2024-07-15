/* import { useCounter } from '@/composables/useCounter'; */
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        value: { type: Number, required: true },
        title: { type: String, required: true },
        nameBtn: { type: String, required: true }
    },

    setup(props) {

        /* const counter = ref(props.value)
        const squereCounter = computed(() => counter.value * counter.value) */

        const { counter, squereCounter } = useCounter(props.value);

        const functionPrueba = () => {
            console.log("esta es una funcion de prueba para ponerle el nombre por medio de los props")
        }


        return {
            counter,
            squereCounter,
            functionPrueba,
        }
    }
})