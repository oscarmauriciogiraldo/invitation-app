import { computed, ref } from "vue"

export const useCounter = () => {

    const counter = ref(8)

    const squereCounter = computed(() => counter.value * counter.value)

    return {
        counter,
        squereCounter
    }
}