
//variablesYFuncionesIniciales-----------------------------------------

 window.onload = function() {
    esDispositivoMovil();
}
 let NavbarRecogida = false;

 //variablesYFuncionesIniciales-----------------------------------------



//funcionNavBarOcultar------------------------------------------------


function Ocultar() {
    var TituloNabvar = document.getElementById('tituloNabvar');
    TituloNabvar.classList.toggle('navbarCompuRecogida');
    var ConenedorEmprendedor = document.getElementById('ContenedorEmprendedorSteveJobs');
    ConenedorEmprendedor.classList.toggle('ContenedorEmprendedorAdaptable')
    var FooterLupama = document.getElementById('FooterProyectoLupama');
    FooterLupama.classList.toggle('FooterAdaptable');
    var HojaDeVidaProfePec = document.getElementById('HojaDEVidaPorfePec');
    HojaDeVidaProfePec.classList.toggle('HojaDeVidaAdaptable')
}

//funcionNavBarOcultar------------------------------------------------



//funcionTipoDeDispositivoYOrientacion--------------------------------


function esDispositivoMovil() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
        if (esDispositivoMovil()) {
            function verificarOrientacion() {
        if (window.orientation === 0) {
            alert("Para disfrutar de una mejor experiencia, recomendamos utilizar tu dispositivo en modo horizontal. 📱➡️🔄");
         }
        }

        verificarOrientacion();

        window.addEventListener("orientationchange", function() {
            verificarOrientacion();
        });
        NavbarRecogida = true;
    }

//funcionTipoDeDispositivoYOrientacion--------------------------------


 //ifDeParaRecogerLaPantalla------------------------------------------

if (NavbarRecogida = true) {
    Ocultar();
}

//ifDeParaRecogerLaPantalla-------------------------------------------