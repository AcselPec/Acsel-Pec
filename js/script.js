
//variablesYFuncionesIniciales-----------------------------------------

 window.onload = function() {
    verificarAnchoPantalla();
    esDispositivoMovil();
}
 let NavbarRecogida = false;

 //variablesYFuncionesIniciales-----------------------------------------





//funciones------------------------------------------------------------


 //funcionScalaPhone ------------------------------------------------

function ScalePhone() {
    let contenedroIMBPCTelefono = document.getElementById('ContenedorCentral-Datos');
    contenedroIMBPCTelefono.classList.toggle('adaptableTelefono');
    let steveJobsScalePhone = document.getElementById('ContenedorEmprendedorSteveJobs');
    steveJobsScalePhone.classList.toggle('SteveJobsScalePhone');
}

//funcionScal Phone ------------------------------------------------



//funcionNavBarOcultar------------------------------------------------

function Ocultar() {

    let TituloNabvar = document.getElementById('tituloNabvar');
    TituloNabvar.classList.toggle('navbarCompuRecogida');
    let ContenedorCentral = document.getElementById('ContenedorCentral-Datos');
    ContenedorCentral.classList.toggle('ContenedorCentralAdaptable');
    let ConenedorEmprendedor = document.getElementById('ContenedorEmprendedorSteveJobs');
    ConenedorEmprendedor.classList.toggle('ContenedorEmprendedorAdaptable');
    let ContenedorAlumnos = document.getElementById('ContenedorAlumnosClases');
    ContenedorAlumnos.classList.toggle('ContenedorAlumnosAdaptable')
    let FooterLupama = document.getElementById('FooterProyectoLupama');
    FooterLupama.classList.toggle('FooterAdaptable');

}

//funcionNavBarOcultar------------------------------------------------




//funionVerificaciónTamañoDePantalla----------------------------------

function verificarAnchoPantalla() {
        var anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (anchoPantalla <= 1150){
            NavbarRecogida = true;
        } else {

            NavbarRecogida = false;
        }


        if (anchoPantalla <= 900){
            ScalePhone();
        } 
}
window.onload = verificarAnchoPantalla;
window.onresize = verificarAnchoPantalla;


//funionVerificaciónTamañoDePantalla----------------------------------


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

