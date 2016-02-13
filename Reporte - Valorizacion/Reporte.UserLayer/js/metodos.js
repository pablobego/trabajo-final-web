// Variables de anio de Nacimiento
var iAnioMin, iAnioMax;
iAnioMin = 1900;
iAnioMax = 2020;
// JavaScript Document
//JEGD:Se agrega esta funcion para validar el foco si no esta habilitado el control
function jsf_Focus(control){
	if (control.disabled==false){
		control.focus();
	}
}	
	
//Cambia de color el control cuando recibe el foco
function jsf_Foco(control){
	control.style.backgroundColor = jsf_celeste();
	return true;
}	
		
function jsf_blanco(){
	return "#FFFFFF";
}			
			
function jsf_ambar(){
	return "#FFFFC6";
}
		
function jsf_celeste(){
	return "#C2F0FE";
}
		
function jsf_rojo(){
	return "#FEC2CE";
}
		
function jsf_gris(){
	return "#DEDEDE";
}
		
// Limpia espacios en blanco a la izquierda
function jsf_LTrim( value ) {		
	var re = /\s*((\S+\s*)*)/;
	return value.replace(re, "$1");			
}
		
// Limpia espacios en blanco a la derecha
function jsf_RTrim( value ) {			
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");			
}
		
//Limpia espacios en blanco al final y al inicio
function jsf_Trim( value ) {			
	return jsf_LTrim(jsf_RTrim(value));
}

//Valida Numeros Enteros
function jsf_ValidarEntero(valor){ 
	//intento convertir a entero. 
	//si era un entero no le afecta, si no lo era lo intenta convertir 
	if(valor.length == 2){
	// si el numero de la 1ra posicion es cero cojo el numero de la sgunda posicion
		if(valor.charAt(0) == "0"){
			valor = valor.charAt(1)
		}
	}
	//comprueba si es q es un valor entero
	// lafunction parseInt analiza el valor 
	valor = parseInt(valor) 

	//Compruebo si es un valor nulo. Nulo puede ser cualquier valor indefinido menos un numero entero
	if (isNaN(valor)) { 
			//entonces (no es numero) devuelvo el valor cadena vacia 
			return "" 
	}else{ 
			//En caso contrario (Si era un número) devuelvo el valor 
			return valor 
	} 
} 

// Code Original de Dan Steinman
ns4 = (document.layers)? true:false 
ie4 = (document.all)? true:false 


		/* Estas funciones se encargan de mostrar
		y ocultar capas.
		por Gabriel Rodríguez.
		*/
function MostrarCapa(capa){
	if(document.layers)document.layers[capa].visibility='show' // Si utilizamos NS
	if(document.all)document.all(capa).style.visibility='visible' // Si utilizamos IE
}
		
function OcultarCapa(capa){
	if(document.layers)document.layers[capa].visibility='hide' // Si utilizamos NS
	if(document.all)document.all(capa).style.visibility='hidden' // Si utilizamos IE
}


function jsf_ValidarNumeroEntero(valor){ 
	//intento convertir a entero. 
	//si era un entero no le afecta, si no lo era lo intenta convertir 
	if(valor.length == 2){
	// si el numero de la 1ra posicion es cero cojo el numero de la segunda posicion
		if(valor.charAt(0) == "0"){
			valor = valor.charAt(1);
		}
	}
	//comprueba si es q es un valor entero
	// lafunction parseInt analiza el valor 
	valor = parseInt(valor);

	//Compruebo si es un valor nulo. Nulo puede ser cualquier valor indefinido menos un numero entero
	if (isNaN(valor)) { 
			//entonces (no es numero) devuelvo el valor cadena vacia 
			return false;
	}else{ 
			//En caso contrario (Si era un número) devuelvo el valor 
			return true; 
	} 
} 

function jsf_LimpiarEntero(valor){
	if(valor.length == 2){
	// si el numero de la 1ra posicion es cero cojo el numero de la segunda posicion
		if(valor.charAt(0) == "0"){
			valor = valor.charAt(1);			
		}		
	}
	return valor;	
}

///////////////////////////////////////////////////////////////////////////////////////////////////
/// Mostrar DISA //////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//jsf_ValidarDISA(this.value, 'txtDisaATE');
/*function jsf_ValidarDISA(disa, control){
	if(jsf_Trim(disa).length == 3){
		frmAtenciones.ValidarDISA(disa, control, jsf_CallBack_ValidarDISA);
	}
}*/

/*
function jsf_CallBack_ValidarDISA(sResp){
	
	if (sResp.error != null){
		alert(sResp.error);
		return;
	}
	
	arr = new Array();
	arr = sResp.value.split("$");
	jsf_Control();
	control = document.getElementById(arr[0]);
	
	if(arr[1] == "0"){
		control.style.backgroundColor = jsf_rojo();
		if(arr[0] == "txtCodFormato"){
			hdDisaAteValida.value = "1";
		}else if(arr[0] == "txtCodDisaAfi"){
			hdDisaAfiValida.value = "1";
		} 
	}else if(arr[1] == "1"){
		control.style.backgroundColor = jsf_blanco();
		if(arr[0] == "txtCodFormato"){
			hdDisaAteValida.value = "0";
		}else if(arr[0] == "txtCodDisaAfi"){
			hdDisaAfiValida.value = "0";
		}
	}			
} */

function jsf_CalcularEdad(DiaNac, MesNac, AnioNac, Dia, Mes, Anio){
	var Edad;
	DiaNac = jsf_LimpiarEntero(DiaNac);
	MesNac = jsf_LimpiarEntero(MesNac);
	AnioNac = jsf_LimpiarEntero(AnioNac);
	/*alert("Fecha: " + Dia + "/" + Mes + "/" + Anio);
	alert("FecNac: " + DiaNac + "/" + MesNac + "/" + AnioNac);*/	
	Dia = jsf_ValidarEntero(Dia);
	DiaNac = jsf_ValidarEntero(DiaNac);
	Mes = jsf_ValidarEntero(Mes);
	MesNac = jsf_ValidarEntero(MesNac);
	Anio = jsf_ValidarEntero(Anio);
	AnioNac = jsf_ValidarEntero(AnioNac);
/*	alert("Tipo Mes actual: " + typeof Mes);
	alert("Tipo Mes Nac: " + typeof MesNac);
*/
	Edad = Anio - AnioNac;	
	if(Edad > 0){
		//Analizar Mes
		if(Mes > MesNac){			
			//alert("Caso 01: " + Edad);
			return Edad;
		}else if(Mes < MesNac){
			Edad = Edad - 1;
			//alert("Caso 02: " + Edad);
			return Edad;
		}else if(Mes == MesNac){
			//Analizar Dia
			if(Dia < DiaNac){				
				Edad = Edad - 1;
				//alert("Caso 03: " + Edad);
				return Edad;
			}else if(Dia > DiaNac){
				//alert("Caso 04: " + Edad);
				return Edad;
			}else if(Dia == DiaNac){
				//alert("Caso 05: " + Edad);
				return Edad;
			}
		}
	}else if(Edad == 0){
		//alert("Caso 06: " + Edad);
		return 0;
	}else if(Edad < 0){
		//alert("Caso 07: " + Edad);
		return -1;
	}
	//alert(Edad);
}

//parseInt() y parseFloat(), 

// Mostrar Reloj
function jsf_Reloj(ver){
	var divReloj;
	divReloj = document.getElementById("divReloj");
	if(ver == 1){
		MostrarCapa(divReloj.id);	
	}else{
		OcultarCapa(divReloj.id);
	}
}



function jsf_Enabled(control, habilitar){
	if(habilitar == true){
		control.disabled == false;
	}else{
		control.disabled == true;
	}
}

function jsf_HabilitarOtro(combo, valor, control){
	if(valor == combo.value){
		control.disabled = false;
		control.focus();
	}else{
		control.disabled = true;
		control.value = "";
	}
}

function jsf_AgregarPerId(PerId, control){
	var arrPerId;	
	if(jsf_Trim(control.value).length > 0){				
		control.value = control.value + "," + PerId;		
	}else{
		control.value = PerId;
	}		
}

function jsf_QuitarPerId(PerId, control){
	var arrPerId, sizeArr, i;
	arrPerId = control.value.split(",");
	if(jsf_Trim(control.value).length > 0){			
		sizeArr = arrPerId.length;			
		control.value = "";
		for(i=0; i < sizeArr; i++){
			//alert(parseInt(PerId) != parseInt(arrPerId[i]));
			if(parseInt(PerId) != parseInt(arrPerId[i])){
				if(jsf_Trim(control.value).length == 0){
					control.value = arrPerId[i]; 	
				}else{
					control.value = control.value + "," + arrPerId[i]; 
				}			
			}	
		}	
	}
}

function jsf_Check(control, caja, valor){
	//alert(control.checked);
	if(control.checked == true){
		jsf_AgregarPerId(valor, caja);
	}else{
		jsf_QuitarPerId(valor, caja);
	}
	//alert(caja.value);
}

function jsf_CodigoCombo(combo, oculto){
	oculto.value = combo.value;
	//return;
}

function jsf_CompletarCero(control){
	if(control.value.length > 0){
		control.value = jsf_Right(("00" + control.value),2);
	}
}

var vbCr = "\r";
var vbLf = "\n";
var vbCrLf = vbCr+vbLf;
var vbTab = "\t";

function jsf_Left(s, n){
	// Devuelve los n primeros caracteres de la cadena
	if(n>s.length)
		n=s.length;
		
	return s.substring(0, n);
}
function jsf_Right(s, n){
	// Devuelve los n últimos caracteres de la cadena
	var t=s.length;
	if(n>t)
		n=t;
		
	return s.substring(t-n, t);
}

function jsf_Mid(s, n, c){
	// Devuelve una cadena desde la posición n, con c caracteres
	// Si c = 0 devolver toda la cadena desde la posición n
	
	var numargs=Mid.arguments.length;
	
	// Si sólo se pasan los dos primeros argumentos
	if(numargs<3)
		c=s.length-n+1;
		
	if(c<1)
		c=s.length-n+1;
	if(n+c >s.length)
		c=s.length-n+1;
	if(n>s.length)
		return "";
		
	return s.substring(n-1,n+c-1);
}

function jsf_InStr(n, s1, s2){
	// Devuelve la posición de la primera ocurrencia de s2 en s1
	// Si se especifica n, se empezará a comprobar desde esa posición
	// Sino se especifica, los dos parámetros serán las cadenas
	var numargs=InStr.arguments.length;
	
	if(numargs<3)
		return n.indexOf(s1)+1;
	else
		return s1.indexOf(s2, n)+1;
}

function jsf_RInStr(n, s1, s2){
	// Devuelve la posición de la última ocurrencia de s2 en s1
	// Si se especifica n, se empezará a comprobar desde esa posición
	// Sino se especifica, los dos parámetros serán las cadenas
	var numargs=RInStr.arguments.length;
	
	if(numargs<3)
		return n.lastIndexOf(s1)+1;
	else
		return s1.lastIndexOf(s2, n)+1;
}

function jsf_Space(n){
	// Devuelve una cadena con n espacios
	var t="";
	
	for(var i=1; i<=n; i++)
		t=t+" ";
	
	return t;
}
function jsf_jString(n, c){
	// Devuelve n veces el caracter c
	var t="";
	
	for(var i=1; i<=n; i++)
		t=t+c;
	return t;
}
function jsf_UCase(s){
	// Devuelve la cadena convertida a mayúsculas
	return s.toUpperCase();
}
function jsf_LCase(s){
	// Devuelve la cadena convertida en minúsculas
	return s.toLowerCase();
}
function jsf_Len(s){
	// Devuelve la longitud de la cadena s
	return s.length;
}
function jsf_StrReverse(s){
	// Invierte la cadena
	var i=s.length;
	var t="";
	
	while(i>-1){
		t=t+ s.substring(i,i+1);
		i--;
	}
	return t;
}

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

//Desactivar el boton F5 en Mozilla Firefox
/*function checkKeyCode(e)
{
	var key, node;
	if (e)
	{
		key = e.which;
		node = e.target;
	}
	else
	{
		key = event.keyCode;
		node = event.srcElement;
	}
	if(key == 8 || key == 116)
	{
		if (e)
		{
			e.which = 0;
			e.returnValue = false;
		}
		else
		{
			event.keyCode=0;
			event.returnValue = false;
		}
		return false
	}
	return true;
}
document.onkeydown = checkKeyCode;*/

if(history.forward(1)){
 history.replace(history.forward(1));
}

function jsf_CerrarVentana(){
	if(confirm("Por favor complete todos los pasos \n Si en este momento cierra su ventana \n Usted perderá todos sus datos \n ¿Desea Salir?")){
		this.closed=true;
	}else{
		this.closed=false;	
	}
}

function jsf_MostrarEdad1(control){
	var lblFecha, DiaNac, MesNac, AnioNac;
	var Dia, Mes, Anio;
	lblFecha = document.getElementById("lblFecha");
	DiaNac = document.getElementById("txtDiaNac");
	MesNac = document.getElementById("txtMesNac");
	AnioNac = document.getElementById("txtAnioNac");
	//jsf_alert(DiaNac.value+"/"+MesNac.value+"/"+AnioNac.value);
	Dia = document.getElementById("Dia");
	Mes = document.getElementById("Mes");
	Anio = document.getElementById("Anio");
	//jsf_alert(Dia.value+"/"+Mes.value+"/"+Anio.value);
	bDiaNac = jsf_ValidarDia(DiaNac, MesNac, AnioNac, lblFecha, 1);
	bMesNac = jsf_ValidarMes(MesNac, DiaNac, AnioNac, lblFecha, 1);
	bAnioNac = jsf_ValidarAnio(AnioNac, 1900, 2020, DiaNac, MesNac, lblFecha, 1);
	//jsf_alert(bDiaNac+" : "+bMesNac+" : "+bAnioNac);
	if(bDiaNac == true && bMesNac == true && bAnioNac == true){ 
		control.value = jsf_CalcularEdad(DiaNac.value, MesNac.value, AnioNac.value, Dia.value, Mes.value, Anio.value);
	}
}

function jsf_MostrarEdad_BS(control){
	var lblFecha, DiaNac, MesNac, AnioNac;
	var Dia, Mes, Anio;
	lblFecha = document.getElementById("lblFechaBS");
	DiaNac = document.getElementById("txtDiaNacBS");
	MesNac = document.getElementById("txtMesNacBS");
	AnioNac = document.getElementById("txtAnioNacBS");
	//jsf_alert(DiaNac.value+"/"+MesNac.value+"/"+AnioNac.value);
	Dia = document.getElementById("Dia");
	Mes = document.getElementById("Mes");
	Anio = document.getElementById("Anio");
	//jsf_alert(Dia.value+"/"+Mes.value+"/"+Anio.value);
	bDiaNac = jsf_ValidarDia(DiaNac, MesNac, AnioNac, lblFecha, 1);
	bMesNac = jsf_ValidarMes(MesNac, DiaNac, AnioNac, lblFecha, 1);
	bAnioNac = jsf_ValidarAnio(AnioNac, 1900, 2020, DiaNac, MesNac, lblFecha, 1);
	//jsf_alert(bDiaNac+" : "+bMesNac+" : "+bAnioNac);
	if(bDiaNac == true && bMesNac == true && bAnioNac == true){ 
		control.value = jsf_CalcularEdad(DiaNac.value, MesNac.value, AnioNac.value, Dia.value, Mes.value, Anio.value);
	}
}

function jsf_MostrarEdad(control, DiaNac, MesNac, AnioNac, lblFecha){
	//var lblFecha, DiaNac, MesNac, AnioNac;
	var Dia, Mes, Anio;
	Dia = document.getElementById("Dia");
	Mes = document.getElementById("Mes");
	Anio = document.getElementById("Anio");
	//jsf_alert(Dia.value+"/"+Mes.value+"/"+Anio.value);
	bDiaNac = jsf_ValidarDia(DiaNac, MesNac, AnioNac, lblFecha, 1);
	bMesNac = jsf_ValidarMes(MesNac, DiaNac, AnioNac, lblFecha, 1);
	bAnioNac = jsf_ValidarAnio(AnioNac, 1900, 2020, DiaNac, MesNac, lblFecha, 1);
	//jsf_alert(bDiaNac+" : "+bMesNac+" : "+bAnioNac);
	if(bDiaNac == true && bMesNac == true && bAnioNac == true){ 
		control.value = jsf_CalcularEdad(DiaNac.value, MesNac.value, AnioNac.value, Dia.value, Mes.value, Anio.value);
	}
}

function jsf_CompletarCeros(control, numero){
	if(control.value.length > 0){
		var i=0;
		var ceros="";
		for(i=0; i < numero; i++){
			ceros +="0";
		}
		control.value = jsf_Right((ceros + control.value), numero);
	}
	return;
}

function jsf_LimpiarCeros(control){
	
	if(control.value.length > 0){		
		var j; //= control.value.length;
		var i=0;
		var sCad = control.value;
		var sCero = "";
		var bVal = true;
		while(bVal==true){
			i += 1;
			j = sCad.length;
			sCero = jsf_Left(sCad, 1);
			if(sCero == "0"){
				j = j - 1;
				sCad = jsf_Right(sCad, j);
			}else{
				bVal = false;	
			}
		}
		control.value = sCad;		
		control.focus();
	}
	return;
}

function jsf_VentanaPopUp(URL, Nombre, Caracteristicas){
	//('frmInsc02_Ins.aspx','flotante','location=yes,status=yes,width=600,height=280')
	window.open(URL, Nombre, Caracteristicas);
}