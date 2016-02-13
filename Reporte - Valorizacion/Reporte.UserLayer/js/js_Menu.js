//funcion que muestra etiqueta en forma dinamica en la barra de tarea
function confirmSubmit() {
      var agree=confirm('¿ Esta Seguro de Eliminar la Observacion ?');
      if (agree)
       return true ;
      else
       return false ;
    }
function scroll(jumpSpaces,position) {
var msg = "Sistema Integrado de Proceso de Control Presencial Posterior de las Prestaciones de Salud del SIS"
var out = ""
if (killScroll) {return false} 
for (var i=0; i<position; i++){
out += msg.charAt(i)}
for (i=1;i<jumpSpaces;i++) {
out += " "}
out += msg.charAt(position)
window.status = out
if (jumpSpaces <= 1) {
position++
if (msg.charAt(position) == ' ') {
position++ }
jumpSpaces = 100-position        
}
else if (jumpSpaces >  3) {
jumpSpaces *= .75}
else {
jumpSpaces--}
if (position != msg.length) {
var cmd = "scroll(" + jumpSpaces + "," + position + ")";
scrollID = window.setTimeout(cmd,5);
} 
else {
scrolling = false
return false}
return true;
}
function startScroller() {

if (scrolling)
if (!confirm('Re-initialize snapIn?'))
return false
killScroll = true
scrolling = true
var killID = window.setTimeout('killScroll=false',6)
scrollID = window.setTimeout('scroll(100,0)',10)
return true
}
var scrollID = Object
var scrolling = false
var killScroll = false

// End -->

//Bloquear boton derecho del mouse

document.oncontextmenu = function(){
	return false
} 

//Desactivar el botón F5 en Internet Expolorer
document.onkeydown = function(){  
	if(window.event && window.event.keyCode == 116){ 
		 window.event.keyCode = 505;  
	} 
	if(window.event && window.event.keyCode == 505){  
		return false;     
	}  
}
document.onkeydown = function(){  
			//116->f5 
			//122->f11 
			if (window.event && (window.event.keyCode == 122 || window.event.keyCode == 116)){ 
				window.event.keyCode = 505;  
			} 
			if (window.event.keyCode == 505){  
				return false;  
			}  
			if (window.event && (window.event.keyCode == 8)) {
				valor = document.activeElement.value; 
				if (valor==undefined) { 
					return false; } //Evita Back en página. 
				else { 
					if (document.activeElement.getAttribute('type')=='select-one') 
						{ return false; } //Evita Back en select. 
					if (document.activeElement.getAttribute('type')=='button') 
						{ return false; } //Evita Back en button. 
					if (document.activeElement.getAttribute('type')=='radio') 
						{ return false; } //Evita Back en radio. 
					if (document.activeElement.getAttribute('type')=='checkbox') 
						{ return false; } //Evita Back en checkbox. 
					if (document.activeElement.getAttribute('type')=='file') 
						{ return false; } //Evita Back en file. 
					if (document.activeElement.getAttribute('type')=='reset') 
						{ return false; } //Evita Back en reset. 
					if (document.activeElement.getAttribute('type')=='submit') 
						{ return false; } //Evita Back en submit. 
					else //Text, textarea o password 
					{ 
						if (document.activeElement.value.length==0) 
							{ return false; } //No realiza el backspace(largo igual a 0). 
						else 
							{ document.activeElement.value.keyCode = 8; } //Realiza el backspace. 
					}
				}
			} 
		} 

//elimino flecha hacia atras
if(history.forward(1)){
 history.replace(history.forward(1));
}

//Proceso de Solicitud
function fnRegistrarSolicitud(){
    window.open("frm_registrar_solicitud.aspx","mywindow","menubar=no,resizable=no,width=700,height=850");
}

function fnConsultarSolicitud(){
    window.open("frm_consultar_solicitud.aspx","mywindow","menubar=no,resizable=no,width=1070,height=650");
}

function fnManualDeUsuario(){
    window.open("frm_manual_usuario.aspx","mywindow","menubar=no,resizable=no,width=700,height=550");
}