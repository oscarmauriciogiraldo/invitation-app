/* import { useCounter } from '@/composables/useCounter'; */
import { computed, defineComponent, ref } from 'vue';


export default defineComponent({
    props: {
        value: { type: Number, required: true }
    },

    setup(props) {

        const counter = ref(props.value)
        const squereCounter = computed(() => counter.value * counter.value)

        /* const { counter, squereCounter } = useCounter(props.value); */


        return {
            counter,
            squereCounter
        }
    }
})