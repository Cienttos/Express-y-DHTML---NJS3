  function agregarH1(texto) {
    document.getElementById('titulo').innerText = texto;    
  }

  function cambiarTextoH1(texto){
    document.getElementById('titulo').innerText = texto;    
  }

  function cambiarColorH1(color){
    document.getElementById('titulo').style.color = color;

  }

  function agregarImagen(url) {
    const contenedor = document.getElementById('contenedorImagen');
    contenedor.innerHTML = `<img src="${url}" alt="Imagen">`;
  }
  

  function cambiarImagen(url) {
    const img = document.querySelector('#contenedorImagen img');
    img.src = url;
  }  

  function cambiarTamanoImagen(px){
    const img = document.querySelector('#contenedorImagen img');
    img.style.widht = px
    img.style.height = px
  }

  function resetear() {
    const h1 = document.getElementById("titulo");
    const img = document.querySelector("#contenedorImagen img");
      h1.innerText = '';
      h1.style.color = '';
      img.remove();
    
  }
  