function calculaHora() {
    var mihora = new Date();
    var horatexto = mihora.getHours() + ":" + mihora.getMinutes() + ":" + mihora.getSeconds();
    postMessage(horatexto);
    setTimeout("calculaHora()", 1000);
}

calculaHora();


//5 IMAGENES UNA CAPA PARA DIBUJAR ESAS IMAGENES Y QUE CADA 3 SEGUNDOS SE CAMBIE DE IMAGEN Y CON UN BOTON QUE SEA DETENER PARA PARAR LA ROTACIÓN DE IMAGENES