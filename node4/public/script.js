document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos del DOM
    const form = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const enlaceInput = document.getElementById("enlace");
    const tabla = document.getElementById("tabla-nodos");
    const output = document.getElementById("output");
    
    // Lista que almacena todos los nodos creados
    let nodos = [];

    // Evento al enviar el formulario:
    // Se crea un nuevo nodo con los valores ingresados
    // y luego se limpia el formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        crearNodo(nombreInput.value, enlaceInput.value);
        form.reset();
    });

    /**
     * Crea un nuevo nodo con nombre y enlace,
     * lo agrega a la lista de nodos,
     * actualiza la tabla y muestra el log del cambio.
     */
    function crearNodo(nombre, enlace) {
        const nodo = { nombre, enlace };
        nodos.push(nodo);
        renderTabla();
        mostrarCambio(`Nodo creado: ${nombre} → ${enlace}`);
    }

    /**
     * Modifica un nodo existente según su índice.
     * Solicita al usuario los nuevos valores mediante `prompt`,
     * actualiza el nodo, la tabla y muestra el cambio realizado.
     */
    function modificarNodo(index) {
        const nuevoNombre = prompt("Nuevo nombre:", nodos[index].nombre);
        const nuevoEnlace = prompt("Nuevo enlace:", nodos[index].enlace);

        if (nuevoNombre && nuevoEnlace) {
            nodos[index].nombre = nuevoNombre;
            nodos[index].enlace = nuevoEnlace;
            renderTabla();
            mostrarCambio(`Nodo modificado: ${nuevoNombre} → ${nuevoEnlace}`);
        }
    }

    /**
     * Elimina un nodo de la lista según su índice,
     * actualiza la tabla y muestra el log de eliminación.
     */
    function eliminarNodo(index) {
        const eliminado = nodos[index];
        nodos.splice(index, 1);
        renderTabla();
        mostrarCambio(`Nodo eliminado: ${eliminado.nombre}`);
    }

    /**
     * Renderiza dinámicamente la tabla con los nodos actuales.
     * Crea filas con los datos y botones de acción (modificar y eliminar).
     */
    function renderTabla() {
        tabla.innerHTML = "";
        nodos.forEach((nodo, index) => {
            const fila = document.createElement("tr");

            const colNombre = document.createElement("td");
            colNombre.textContent = nodo.nombre;
            colNombre.setAttribute("data-label", "Nombre");

            const colEnlace = document.createElement("td");
            const a = document.createElement("a");
            a.href = nodo.enlace;
            a.textContent = nodo.enlace;
            a.target = "_blank";
            colEnlace.appendChild(a);
            colEnlace.setAttribute("data-label", "Enlace");

            const colAcciones = document.createElement("td");
            const btnModificar = document.createElement("button");
            btnModificar.textContent = "Modificar";
            btnModificar.onclick = () => modificarNodo(index);

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = () => eliminarNodo(index);

            colAcciones.append(btnModificar, btnEliminar);
            colAcciones.setAttribute("data-label", "Acciones");

            fila.append(colNombre, colEnlace, colAcciones);
            tabla.appendChild(fila);
        });
    }

    /**
     * Muestra un mensaje debajo del formulario con información del último cambio realizado.
     */
    function mostrarCambio(texto) {
        output.textContent = texto;
    }
});
