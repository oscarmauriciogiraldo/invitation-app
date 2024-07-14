import { defineComponent } from "vue";

export default defineComponent({
    name: 'WelcomeComponent',

    /* props: {
        Title: { type: String, required: true },
        Initials: { type: String, required: true },
        Names: { type: String, required: true },
    }, */

    setup() {
        const title = 'Bienvenidos a la invitación de';
        const initials = 'O & L'
        const names = 'Oscar Y Lore'

        /* const title = ref(props.Title);
        const initials = 'O & L'
        const names = 'Oscar Y Lore' */

        return {
            title,
            initials,
            names,
        }
    }
})