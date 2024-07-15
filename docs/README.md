# Temas Puntuales Seccion 5

    - Escuchar y Emitir Eventos
    - Enviar propiedades
    - Trabajar con reactividad de VueJs
    - Composables
    - Tailwind
    - Referencias a elementos Html
    - Peticiones HTTP
    - Separacion de componentes

## Diseño de mensajes - props

    <ChatBubble />
    <ChatBubble its-mine="true"/> --> Esto enviaria un string entonces
    <ChatBubble :its-mine="true" /> --> Esto enviaria el valor booleano
    <ChatBubble its-mine /> --> enviaria simplemente un valor booleano
