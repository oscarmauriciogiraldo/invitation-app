<template>
    <h1>
        Hola soy el componente reutilizable 3: MyCounterScript2
        <br>
        Separando logica


    </h1>
    <section>


        <h3>counter2: {{ counter }}</h3>

        <h3>Square2: {{ squereCounter }}</h3>

        <h4>{{ title }}</h4>

        <div class="containerButton">
            <!-- vue extre el valor reactivo para utilizarlo aca -->
            <button class="mainButton" @click="counter++">+ 1</button>
            <button @click="counter--">- 1</button>

            <button class="mainButton" @click="functionPrueba"> {{ nameBtn }} </button>

        </div>
    </section>


</template>

<script src="./MyCounterScript2.ts">
</script>

<style lang="scss" src="./MyCounterScript.scss" />