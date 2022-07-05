
const g_mercurio = 3.7;
const g_venus = 8.87;
const g_marte = 3.7;
const g_jupiter = 24.8;
const g_saturno = 10.44;
const g_urano = 8.87;
const g_neptuno = 11.15;
const g_pluton = 0.62;

const mercurio = 'MERCURIO';
const venus = 'VENUS';
const marte = 'MARTE';
const jupiter = 'JÚPITER';
const saturno = 'SATURNO';
const urano = 'URANO';
const neptuno = 'NEPTUNO';
const pluton = 'PLUTÓN'

const targetPlaneta = document.getElementById("new-planeta");
targetPlaneta.innerHTML = " ";

const validacion = () => {
    if (mostrar_mercurio == true) {
        targetPlaneta.reset()
    }
}

/* VALIDACIONES
let form = document.querySelector("#form");
let btnMercurio = document.querySelector("#btn-mercurio");
function validarMercurio() {
    let desabilitar = false;
    if (form.pesoPersona.value == "") {
        desabilitar = false;
    }
    if (desabilitar === true) {
        btnMercurio.disabled = false
    }else {
        btnMercurio.disabled = true
    }
}
*/

function mostrar_mercurio() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_mercurio);
    console.log(`En el planeta ${mercurio} peso ${peso_final}`);
    
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/mercurio.jpg" alt="planeta">
    </div>
    <div class="planeta-info">
    <h3 class="titulo-planeta">${mercurio}</h3>
    <p>Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.</p>
    <h3 class="peso-planeta">Tu peso en ${mercurio} seria: ${peso_final}</h3>
    </div>`;
};


function mostrar_venus() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_venus);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/venus.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${venus} </h3>
    <p>Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales.</p>
    <h3 class="peso-planeta">Tu peso en ${venus} seria: ${peso_final}</h3>
</div>`
}

function mostrar_marte() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_marte);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/marte.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${marte} </h3>
    <p>Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. Recibió su nombre en homenaje al dios de la guerra de la mitología romana (Ares en la mitología griega), y también es conocido como el planeta rojo</p>
    <h3 class="peso-planeta">Tu peso en ${marte} seria: ${peso_final}</h3>
</div>`

validar(false);
}

function mostrar_jupiter() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_jupiter);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/jupiter.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${jupiter} </h3>
    <p>Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano Júpiter</p>
    <h3 class="peso-planeta">Tu peso en ${jupiter} seria: ${peso_final}</h3>
</div>`

validar(false);
}

function mostrar_saturno() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_saturno);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/saturno.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${saturno} </h3>
    <p>Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos.</p>
    <h3 class="peso-planeta">Tu peso en ${saturno} seria: ${peso_final}</h3>
</div>`

validar(false);
}

function mostrar_urano() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_urano);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/urano.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${urano} </h3>
    <p>Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano, el padre de Crono y el abuelo de Zeus.</p>
    <h3 class="peso-planeta">Tu peso en ${urano} seria: ${peso_final}</h3>
</div>`

validar(false);
}

function mostrar_neptuno() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_neptuno);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/neptuno.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${neptuno} </h3>
    <p>Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas.</p>
    <h3 class="peso-planeta">Tu peso en ${neptuno} seria: ${peso_final}</h3>
</div>`

validar(false);
}
function mostrar_pluton() {
    var pesoPersona = document.getElementById("pesoPersona").value;
    var peso_final = parseInt(pesoPersona * g_pluton);
    targetPlaneta.innerHTML += `<div class="container-img-planeta">
    <img class="img-planeta" src="./img/pluton.jpg" alt="planeta">
</div>
<div class="planeta-info">
    <h3 class="titulo-planeta">${pluton} </h3>
    <p>Plutón, designado Pluto, es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón.</p>
    <h3 class="peso-planeta">Tu peso en ${pluton} seria: ${peso_final} kg</h3>
</div>`

validar(false);
}
