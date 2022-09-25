export const messagesDataBase = [
  {
    usuario: {
      nombre: "usuario 1",
      online: true,
      urlImage: "ignacio.duran@example.com",
      lastMessage: "Are you there? That time!",
      lastMessageTime: "8:02 PM",
      nonReadMesages: 4,
    },
    mensajes: [
      {
        enviado: true,
        mensajes: [
          {
            texto: "Hello. What can I do for you?",
            time: "8:01 PM",
            enviado: true,
          },
          {
            texto: "Me encanta programar en React.js !!",
            time: "8:02 PM",
            enviado: true,
          },
          {
            texto: "Hello. What can I do for you?",
            time: "8:02 PM",
            enviado: true,
          },
        ],
      },

      {
        enviado: false,
        mensajes: [
          {
            texto:
              "I'm just looking around. Will you tell me something about yourself?",
            time: "8:01 PM",
            enviado: false,
          },
          {
            texto:
              "I'm just looking around. Will you tell me something about yourself?",
            time: "8:02 PM",
            enviado: false,
          },
          {
            texto: "Are you there? That time!",
            time: "8:02 PM",
            enviado: false,
          },
        ],
      },
    ],
  },
  {
    usuario: {
      nombre: "usuario 2",
      online: false,
      urlImage: "https://randomuser.me/api/portraits/men/23.jpg",
      lastMessage: "That time!",
      lastMessageTime: "3:50 AM",
      nonReadMesages: 10,
    },
    mensajes: [
      {
        enviado: true,
        mensajes: [
          {
            texto: "Hello. What can I do for you?",
            time: "8:01 PM",
            enviado: true,
          },
          {
            texto: "Me encanta programar en React.js !!",
            time: "8:02 PM",
            enviado: true,
          },
          {
            texto: "Hello. What can I do for you?",
            time: "8:02 PM",
            enviado: true,
          },
        ],
      },

      {
        enviado: false,
        mensajes: [
          {
            texto:
              "I'm just looking around. Will you tell me something about yourself?",
            time: "8:01 PM",
            enviado: false,
          },
          {
            texto:
              "I'm just looking around. Will you tell me something about yourself?",
            time: "8:02 PM",
            enviado: false,
          },
          {
            texto: "Are you there? That time!",
            time: "8:02 PM",
            enviado: false,
          },
        ],
      },
    ],
  },
  /*  {
    usuario: {
      nombre: "usuario 3",
      online: true,
      urlImage: "vssdvdvsd",
      lastMessage: "sssdsd",
      lastMessageTime: "sssdsd",
      nonReadMesages: 4,
    },
    mensajes: [
      {
        texto: "Hello. What can I do for you?",
        time: "8:01 PM",
        enviado: true,
      },
      {
        texto: "Me encanta programar en React.js !!",
        time: "8:02 PM",
        enviado: true,
      },
      {
        texto: "Hello. What can I do for you?",
        time: "8:02 PM",
        enviado: true,
      },

      {
        texto:
          "I'm just looking around. Will you tell me something about yourself?",
        time: "8:01 PM",
        enviado: false,
      },
      {
        texto:
          "I'm just looking around. Will you tell me something about yourself?",
        time: "8:02 PM",
        enviado: false,
      },
      { texto: "Are you there? That time!", time: "8:02 PM", enviado: false },
    ],
  }, */
];

export function getDataMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messagesDataBase);
    }, 4000);
  });
}
