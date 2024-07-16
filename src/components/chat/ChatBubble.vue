<template>
    <!-- Example Message -->
    <div v-if="itsMine" class="flex justify-end">
        <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
            <!-- Hey, how's your day going? -->
            {{ message }}
        </div>
    </div>

    <!-- Example Received Message -->
    <div v-else class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
            <!-- Not too bad, just a bit busy. How about you? -->
            <span class="capitalize">
                {{ message }}
                <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h52 object-cover rounded-md">
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    message: string;
    //Se puede definir por id de usuario
    itsMine: boolean;
    image?: string;
}

defineProps<Props>();
</script>