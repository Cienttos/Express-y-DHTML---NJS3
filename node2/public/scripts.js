function root(url) {
    window.open(url, '_self');
  }
  
  function contextmenu(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) {
      el.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("¡Evento contextmenu detectado!");
      });
    }
  }
  
  function dblclick(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) {
      el.addEventListener("dblclick", () => {
        alert("¡Evento dblclick detectado!");a
      });
    }
  }
  
  function mousedown(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) {
      el.addEventListener("mousedown", () => {
        alert("¡Evento mousedown detectado!");
      });
    }
  }
  
  function mouseup(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) {
      el.addEventListener("mouseup", () => {
        alert("¡Evento mouseup detectado!");
      });
    }
  }
  
  function mousemove(idElemento) {
    const el = document.getElementById(idElemento);
    if (el) {
      el.addEventListener("mousemove", () => {
        alert("¡Movimiento del mouse detectado!");
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    contextmenu("contextmenu");
    dblclick("dblclick");
    mousedown("mousedown");
    mouseup("mouseup");
    mousemove("mousemove");
  });
  