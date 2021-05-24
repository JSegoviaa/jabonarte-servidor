"use strict";

module.exports = {
  send: async (ctx) => {
    const body = ctx.request.body;

    const { message, name, replyTo, city, tienda } = body;

    strapi.log.debug(`Enviando correo a ${process.env.SENT_TO}`);

    try {
      const emailOptions = {
        from: "Jabonarte <no-reply@jabonartesanalmx.com>",
        to: process.env.SENT_TO,
        subject: "Contacto Jabonarte",
        html: city
          ? `
        <div>
            <h1> ${name} se ha puesto en contacto</h1>
            <h3>Mensaje:</h3>
           
            <h4>${message}</h4>
            <h3>Responder a:</h3> 
         
            <h4>${replyTo}</h4>
       
            <h3>Ciudad o estado:</h3> 
            <h4>${city}</h4>
            
            <h3>Tienda:</h3> 
            <h4>${tienda}</h4>
        </div>
        `
          : `
        <div>
            <h1> ${name} se ha puesto en contacto</h1>
            <h3>Mensaje:</h3>
         
            <h4>${message}</h4>
            <h3>Responder a:</h3> 
         
            <h4>${replyTo}</h4>
        </div>
        `,
      };
      await strapi.plugins["email"].services.email.send(emailOptions);
      strapi.log.debug(`Email sent to ${process.env.SENT_TO}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error al enviar correo a ${process.env.SENT_TO}`, err);
      ctx.send({ error: "Hubo un error al enviar el correo" });
    }
  },
};
