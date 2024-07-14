import { computed, ref } from "vue"

//genera un estado global 
//const counter = ref(10)


export const useCounter = (initialValue: number = 5) => {

    const counter = ref(initialValue)

    const squereCounter = computed(() => counter.value * counter.value)

    return {
        counter,
        squereCounter
    }
}