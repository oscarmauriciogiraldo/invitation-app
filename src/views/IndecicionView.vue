<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>Mi esposa</span>
        </div>

        <!-- Chat box -->
        <ChatMessages :messages="messages" />

        <!-- Message Box -->
        <!-- <MessageBox @send-message="onMessage($event)" /> -->
        <!-- Forma corta -->
        <MessageBox @send-message="onMessage" />

        <MessageBox @send-message="onNewMessage" />
    </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime() + 1,
        message: 'Hola mundo !!',
        itsMine: true,
    },
    {
        id: new Date().getTime(),
        message: 'No !!',
        itsMine: false,
        image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif'
    },
]);

const onMessage = (text: string) => {
    messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: text
    })
}

const onNewMessage = (text: string) => {
    console.log('otra funcion', text)
}
</script>