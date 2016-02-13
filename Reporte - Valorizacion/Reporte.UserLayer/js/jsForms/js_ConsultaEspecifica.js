function jsf_ActivaCheck(valor){
    optrdF1 = document.getElementById("optrdF1");
	optrdF2 = document.getElementById("optrdF2");
	optrdF3 = document.getElementById("optrdF3");
	optrdF4 = document.getElementById("optrdF4");
	if(valor == "1"){
	    optrdF1.checked = true;
		optrdF2.checked = false;
		optrdF3.checked = false;
		optrdF4.checked = false;
		jsf_Radio('ATE');	
	}else if(valor == "2"){
	    optrdF2.checked = true;
		optrdF1.checked = false;
		optrdF3.checked = false;
		optrdF4.checked = false;
		jsf_Radio('AFI');	
	}else if(valor == "3"){
	    optrdF3.checked = true;
		optrdF1.checked = false;	
		optrdF2.checked = false;
		optrdF4.checked = false;
		jsf_Radio('DNI');
	}else if(valor == "4"){
	    optrdF4.checked = true;
		optrdF1.checked = false;
		optrdF2.checked = false;
		optrdF3.checked = false;	
		jsf_Radio('DAT');
	}

}

function jsf_Radio(Tipo){
var doc = document.forms[0];
if (Tipo=="ATE") 
{   doc.txtDisaATE.disabled = false;
doc.txtNroLoteATE.disabled = false;
doc.txtNumReg.disabled = false;
doc.txtdisaAFI.disabled = true;
doc.txtTipoFormatoAFI.disabled = true;
doc.txtNumRegAFI.disabled = true;
doc.txtDNI.disabled = true;
doc.txtPrimerNom.disabled = true;
doc.txtOtrosNom.disabled = true;
doc.txtApePaterno.disabled = true;
doc.txtApeMaterno.disabled = true;          

doc.txtdisaAFI.value = "";
doc.txtTipoFormatoAFI.value = "";
doc.txtNumRegAFI.value = "";
doc.txtDNI.value = "";
doc.txtPrimerNom.value = "";
doc.txtOtrosNom.value = "";
doc.txtApePaterno.value = "";
doc.txtApeMaterno.value = "";          

doc.txtdisaAFI.style.backgroundColor = jsf_blanco();
doc.txtTipoFormatoAFI.style.backgroundColor = jsf_blanco();
doc.txtNumRegAFI.style.backgroundColor = jsf_blanco();
doc.txtDNI.style.backgroundColor = jsf_blanco();
doc.txtPrimerNom.style.backgroundColor = jsf_blanco();
doc.txtOtrosNom.style.backgroundColor = jsf_blanco();
doc.txtApePaterno.style.backgroundColor = jsf_blanco();
doc.txtApeMaterno.style.backgroundColor = jsf_blanco();
doc.hddMensaje.value="ATE";
}
if (Tipo=="AFI") 
{   doc.txtdisaAFI.disabled = false;
doc.txtTipoFormatoAFI.disabled = false;
doc.txtNumRegAFI.disabled = false;
doc.txtDisaATE.disabled = true;
doc.txtNroLoteATE.disabled = true;
doc.txtNumReg.disabled = true;          
doc.txtDNI.disabled = true;
doc.txtPrimerNom.disabled = true;
doc.txtOtrosNom.disabled = true;
doc.txtApePaterno.disabled = true;
doc.txtApeMaterno.disabled = true;  
doc.txtDisaATE.value = "";
doc.txtNroLoteATE.value = "";
doc.txtNumReg.value = "";
doc.txtDNI.value = "";
doc.txtPrimerNom.value = "";
doc.txtOtrosNom.value = "";
doc.txtApePaterno.value = "";
doc.txtApeMaterno.value = "";  

doc.txtDisaATE.style.backgroundColor = jsf_blanco();
doc.txtNroLoteATE.style.backgroundColor = jsf_blanco();
doc.txtNumReg.style.backgroundColor = jsf_blanco();
doc.txtDNI.style.backgroundColor = jsf_blanco();
doc.txtPrimerNom.style.backgroundColor = jsf_blanco();
doc.txtOtrosNom.style.backgroundColor = jsf_blanco();
doc.txtApePaterno.style.backgroundColor = jsf_blanco();
doc.txtApeMaterno.style.backgroundColor = jsf_blanco();   
doc.hddMensaje.value="AFI";         
}
if (Tipo=="DNI") 
{   doc.txtDNI.disabled = false;
doc.txtDisaATE.disabled = true;
doc.txtNroLoteATE.disabled = true;
doc.txtNumReg.disabled = true;
doc.txtdisaAFI.disabled = true;
doc.txtTipoFormatoAFI.disabled = true;
doc.txtNumRegAFI.disabled = true;
doc.txtPrimerNom.disabled = true;
doc.txtOtrosNom.disabled = true;
doc.txtApePaterno.disabled = true;
doc.txtApeMaterno.disabled = true;          
doc.txtDisaATE.disabled = true;
doc.txtNroLoteATE.disabled = true;
doc.txtNumReg.disabled = true;  
doc.txtdisaAFI.value = "";
doc.txtTipoFormatoAFI.value = "";
doc.txtNumRegAFI.value = "";
doc.txtPrimerNom.value = "";
doc.txtOtrosNom.value = "";
doc.txtApePaterno.value = "";
doc.txtApeMaterno.value = "";   
doc.txtDisaATE.style.backgroundColor = jsf_blanco();
doc.txtNroLoteATE.style.backgroundColor = jsf_blanco();
doc.txtNumReg.style.backgroundColor = jsf_blanco();
doc.txtdisaAFI.style.backgroundColor = jsf_blanco();
doc.txtTipoFormatoAFI.style.backgroundColor = jsf_blanco();
doc.txtNumRegAFI.style.backgroundColor = jsf_blanco();            
doc.txtPrimerNom.style.backgroundColor = jsf_blanco();
doc.txtOtrosNom.style.backgroundColor = jsf_blanco();
doc.txtApePaterno.style.backgroundColor = jsf_blanco();
doc.txtApeMaterno.style.backgroundColor = jsf_blanco();
doc.hddMensaje.value="DNI";
}  
if (Tipo=="DAT") 
{   doc.txtPrimerNom.disabled = false;
doc.txtOtrosNom.disabled = false;
doc.txtApePaterno.disabled = false;
doc.txtApeMaterno.disabled = false; 
doc.txtDisaATE.disabled = true;
doc.txtNroLoteATE.disabled = true;
doc.txtNumReg.disabled = true;
doc.txtdisaAFI.disabled = true;
doc.txtTipoFormatoAFI.disabled = true;
doc.txtNumRegAFI.disabled = true;
doc.txtDNI.disabled = true;
doc.txtDisaATE.value = "";
doc.txtNroLoteATE.value = "";
doc.txtNumReg.value = "";  
doc.txtdisaAFI.value = "";
doc.txtTipoFormatoAFI.value = "";
doc.txtNumRegAFI.value = "";
doc.txtDisaATE.style.backgroundColor = jsf_blanco();
doc.txtNroLoteATE.style.backgroundColor = jsf_blanco();
doc.txtNumReg.style.backgroundColor = jsf_blanco();
doc.txtdisaAFI.style.backgroundColor = jsf_blanco();
doc.txtTipoFormatoAFI.style.backgroundColor = jsf_blanco();
doc.txtNumRegAFI.style.backgroundColor = jsf_blanco();            
doc.txtDNI.style.backgroundColor = jsf_blanco();
doc.hddMensaje.value="DAT";
}              
}