document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedido-form");
    const ticket = document.getElementById("ticket");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("telefono").value;
      const direccion = document.getElementById("direccion").value;
      const edad = document.getElementById("edad").value;
      const ofertas = document.getElementById("ofertas").checked ? "Sí" : "No";
  
      const sabor = document.getElementById("sabor").value;
      const cantidad = document.getElementById("cantidad").value;
      const picante = document.querySelector('input[name="picante"]:checked');
      const picanteTexto = picante ? picante.value : "No especificado";
  
      ticket.innerHTML = `
        <h2>🎟️ Ticket de Pedido</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Ofertas:</strong> ${ofertas}</p>
        <p><strong>Sabor de Pizza:</strong> ${sabor}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>¿Picante?:</strong> ${picanteTexto}</p>
      `;
  
      ticket.style.display = "block";
      ticket.scrollIntoView({ behavior: "smooth" });
    });
  });
  