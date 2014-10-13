var i = 0;
function cambiarimagen(numerofoto) {
    
    var nombres = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];
    var a = "fotos/" + nombres[i];
    postMessage(a);
 
    setTimeout(function () {
        i = i + 1;
        if (i >= nombres.length) {
            i = 0;
        }
        cambiarimagen(i);
    }, 3000);
  
}

cambiarimagen(i);
