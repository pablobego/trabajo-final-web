var txtCodInsumos;
var txtNomInsumos;

function jsf_Crear(obj){
	return document.getElementById(obj);
}

function jsf_Control(){
	txtCodInsumos = jsf_Crear("txtCodInsumos");
	txtNomInsumos = jsf_Crear("txtNomInsumos");
}
	
function jsf_NombreporCodigo(control,cnombre,nombre){
	if(jsf_Trim(control.value).length > 2){
	frmConsultaCriterios.NombreporCodigo(control.value,cnombre,nombre,jsf_CallBack_jsf_NombreporCodigo);
	}else{
	return true;
	}
}

function jsf_CallBack_jsf_NombreporCodigo(sResp){
	if (sResp.error != null){
		return true;
	}else{
		if(sResp.value != ""){
			var arr = Array();
			arr = sResp.value.split("$");
			var cnombre = document.getElementById(arr[1]);
			var nombre = document.getElementById(arr[2]);
			if (arr[0] == "1" ){
			nombre.value = arr[3];
			}else{
			cnombre.value = "";
			}
		//estado=0, Ccodigo=1, Cnombre=2, Rnombre=3
		}
	return true;
	}
}