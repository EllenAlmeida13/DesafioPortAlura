/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/xdorrono",
  title: "How can we help?",
  fields: [
    { 
        type: "nome", 
        label: "Nome:", 
        name: "name",
        required: true,
        placeholder: "Digite seu Nome"
    },
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "Digite seu Email"
    },
    {
      type: "textarea",
      label: "Fale Comigo:",
      name: "message",
      placeholder: " Deixe aqui sua mensagem..",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});