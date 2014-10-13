var trabajador;
function iniciarworker() {
    if (typeof (Worker) !== "undefined") {
        trabajador = new Worker("js/WorkerReloj.js");
    }
    trabajador.onmessage = function(evt) {
        document.getElementById("reloj").innerHTML = evt.data;


    };
    trabajador.onerror = function(err) {
        alert(err.data);

    };

}
function iniciarCarrusel() {
    if (typeof (Worker) !== "undefined") {
        trabajador = new Worker("js/Cambiarimagen.js");
        trabajador.onmessage = function (evt) {
            var asdf = document.querySelector("#laimagen");
            asdf.setAttribute("src",evt.data);


        };
        trabajador.onerror = function (err) {
            alert(err.data);

        };
    }
}
function para() {
    trabajador.terminate();
}
(function ()
{
  //  iniciarworker();
    iniciarCarrusel();
    document.querySelector("#btnparar").addEventListener('click', para);
    
})
();