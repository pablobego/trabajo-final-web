// JavaScript Document
//Permite digitar solo numeros
function jsf_SoloNumero(event){
	event = (event) ? event : ((window.event) ? window.event : "");
	if(event.keyCode<48 || event.keyCode>57){
		event.returnValue = false
	}
}

//Permite digitar solo letras
function jsf_SoloLetras(event){
	event = (event) ? event : ((window.event) ? window.event : "");
	if ((event.keyCode < 65 || event.keyCode > 90) &&
	(event.keyCode < 97 || event.keyCode > 122) &&
	(event.keyCode > 32) && (event.keyCode != 209) && (event.keyCode != 241)){
		event.returnValue = false;
	}
	if (event.keyCode==13){
		event.returnValue = false;
	}
}

//Valida que el dato sea requerido
function jsf_DatoRequerido(control, valor, requerido){
	var dato;
	dato = jsf_Trim(control.value);
	if(requerido==1){ 
		if(dato.length < valor){
			control.style.backgroundColor = jsf_rojo();
			return false;
		}else{
			control.style.backgroundColor = jsf_blanco();
			return true;
		}
	}else{
		if(dato.length < valor && dato.length > 0){
			control.style.backgroundColor = jsf_rojo();
			return false;
		}else if(dato.length >= valor){
			control.style.backgroundColor = jsf_blanco();
			return true;
		}else if(dato.length == 0){
			control.style.backgroundColor = jsf_ambar();
			return false;
		}
	}
	
}

//Valida que el item del combo sea seleccionado 
function jsf_ValidarCombo(control, valornovalido, obligatorio){
	if(obligatorio==1){
		if(control.value == valornovalido){
			control.style.backgroundColor = jsf_rojo();
			return false;
		}else{
			control.style.backgroundColor = jsf_blanco();
			return true;
		}
	}else{
		if(control.value == valornovalido){
			control.style.backgroundColor = jsf_ambar();
			return false;
		}else{
			control.style.backgroundColor = jsf_blanco();
			return true;
		}		
	}
}

function jsf_ValidarCorreo(control, requerido){

	var bResp=false;
	bResp=jsf_DatoRequerido(control, 7, requerido);

	if(bResp == true){
		
		var RegExPattern = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/; 
		//alert(control.value);
		//alert(control.value.match(RegExPattern));
		if (control.value.match(RegExPattern)) { 
			control.style.backgroundColor = jsf_blanco();
			return true;
		} else { 
			control.style.backgroundColor = jsf_rojo();
			return false;
		}
	
	}else{
		return false;	
	}

}

function  jsf_VerDatosExcel()
{ 
	var strLink;
	//var strPeriodo;
	//var strMes;
    //var strodsis;
    var stridnumreg;
	
	//strPeriodo = document.getElementById("hd_periodo");
	//strMes = document.getElementById("hd_mes");
    //strodsis = document.getElementById("hd_odsis");
    stridnumreg = document.getElementById("hd_idnumreg");
    //alert(strodsis.value);
    
	strLink = 'frmReporte.aspx?idnumreg='+ stridnumreg.value;
	    window.open(strLink, 'popfrmRporteExcel', 'width=770,height=700,scrollbars=yes,resizable=yes,left=20,top=20');
	//strLink = 'frmReporte.aspx?periodo=' + strPeriodo.value + '&mes='+ strMes.value + '&odsis='+ strodsis.value + '&idnumreg='+ stridnumreg.value;
	//	window.open(strLink, 'popfrmRporteExcel', 'width=770,height=700,scrollbars=yes,resizable=yes,left=20,top=20');
	
}