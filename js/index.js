// variables globales

//variables globales
const $si = document.getElementById('si');
const $no = document.getElementById('no');

//otras
const body = document.getElementById('body');
const arreglo = ['Right', 'Left', 'Top', 'Bottom']

//funciones

function numeroAleatorios (minimo, maximo){

return Math.floor(Math.random() * (maximo - minimo) + minimo) 	
} 

function arreglarCosas (nombre, crear, atributo, argumento, padre, contenido, arriba_abajo){
 var padre = document.getElementById(padre);

 nombre = document.createElement(crear);
 nombre.setAttribute(atributo, argumento);
 nombre.innerHTML = contenido;

if (arriba_abajo == 'arriba') { padre.prepend(nombre); }
else if (arriba_abajo == 'abajo') {padre.append(nombre); }
 
}


$no.addEventListener('mousemove', () => {

$no.style.position = 'absolute';
var resultado = arreglo[numeroAleatorios(0, 4)]
$no.style.marginTop= '60px';

if (resultado == 'Right') {$no.style.marginRight = numeroAleatorios(1, 100) + '%'}
else if (resultado == 'Left') {$no.style.marginLeft = numeroAleatorios(1, 100) + '%'}	
else if (resultado == 'Top') {$no.style.marginTop = numeroAleatorios(1, 100) + '%'}	
else if (resultado == 'Bottom') {$no.style.marginBottom = numeroAleatorios(1, 100) + '%'}
});


$si.addEventListener('click', () => {
body.style.overflow = 'hidden'	
arreglarCosas ('div', 'div', 'id', 'fondo', 'body', null, 'arriba');
arreglarCosas ('div2', 'div', 'id', 'acepto', 'fondo', 'Sabia que ibas a aceptar :)', 'arriba');
arreglarCosas ('boton', 'div', 'id', 'salir', 'acepto', 'Salir', 'abajo');

const $fondo = document.getElementById('fondo');
const $salir = document.getElementById('salir');

$salir.addEventListener('click', () => {$fondo.remove(); body.style.overflow = 'auto'});

});




