function jsf_VerDatallexId(pIdAtencion,pRetorno)
{
    
	if (jsf_Trim(pIdAtencion).length > 0 && jsf_Trim(pRetorno).length > 4 ) {
	 strLink = 'frmAtencion.aspx?NumReg='+pIdAtencion+'&Retorno='+pRetorno;
	 window.open(strLink, "wDetalle", "top=0, left=0, width=780,height=740,menubar=no, scrollbars=yes, resizable =yes, status = yes");
	}
}        

function jsf_Retorno(){
   var doc = document.forms[0];
   if (doc.hddRetorno.value!="")
   {    location.href = doc.hddRetorno.value;   }
}


function jsf_Detalle(pagina,pDisa,pTipoFormato,pNroRegistro,pIdPer){
    
	// location.href ='frmDetalleAtencion.aspx?Disa='+pDisa+'&TipoFormato='+pTipoFormato+'&NroRegistro='+pNroRegistro+'&IdPer='+pIdPer;
	if (jsf_Trim(pagina).length > 4 && jsf_Trim(pIdPer).length > 0 ) {
	 strLink = 'frmDetalleAtencion.aspx?Disa='+pDisa+'&TipoFormato='+pTipoFormato+'&NroRegistro='+pNroRegistro+'&IdPer='+pIdPer;
	 window.open(strLink, "wDetalle", "top=0, left=0, width=780,height=740,menubar=no, scrollbars=yes, resizable =yes, status = yes");
	}	
}	

function jsf_DetalleDiagnosticos(idAtencion){
        var doc = document.forms[0];
        jsf_VentanaPopUp('frmDetalleAtencionDiagnostico.aspx?IdAtencion='+idAtencion, '','location=no,status=yes,scrollbars=yes,width=850,height=400');
		return true;
}

function jsf_DetalleInsumos(idAtencion){
        var doc = document.forms[0];
        jsf_VentanaPopUp('frmDetalleAtencionInsumo.aspx?IdAtencion='+idAtencion, '','location=no,status=yes,scrollbars=yes,width=850,height=400');
		return true;
}

function jsf_DetalleMedicamentos(idAtencion){
        var doc = document.forms[0];
        jsf_VentanaPopUp('frmDetalleAtencionMedicamento.aspx?IdAtencion='+idAtencion, '','location=no,status=yes,scrollbars=yes,width=850,height=400');
		return true;
}

function jsf_DetalleProcedimientos(idAtencion){
        var doc = document.forms[0];
        jsf_VentanaPopUp('frmDetalleAtencionProcedimiento.aspx?IdAtencion='+idAtencion, '','location=no,status=yes,scrollbars=yes,width=850,height=400');
		return true;
}

function jsf_DetalleMaternoInfantil(idAtencion){
        var doc = document.forms[0];
        jsf_VentanaPopUp('frmDetalleAtencionMaternoInfantil.aspx?IdAtencion='+idAtencion, '','location=no,status=yes,scrollbars=yes,width=850,height=400');
		return true;
}

function jsf_DetalleValidacion(idAtencion){
        
        jsf_VentanaPopUp('frmAtencionesObservadas.aspx?IdAtencion='+idAtencion, '','location=no,status=yes,scrollbars=yes,width=850,height=400');
		return true;
		
}

function jsf_LimpiarATE(){
    var doc = document.forms[0];
    doc.txtDisaATE.value = "" ;
    doc.txtNroLoteATE.value = "";
    doc.txtNumReg.value = "";
    doc.txtdisaAFI.value = "";
    doc.txtTipoFormatoAFI.value= "";
    doc.txtNumRegAFI.value = "";
    doc.txtDNI.value = "";
    doc.txtPrimerNom.value = "";
    doc.txtOtrosNom.value = "";
    doc.txtApePaterno.value = "";
    doc.txtApeMaterno.value = "";
}

function jsf_LimpiarServicios(){
    var doc = document.forms[0];
    doc.txtCodigo.value = "";
    doc.txtDescripcion.value = "";
}

function jsf_BuscarServicio()
{ 
	var strRetorno = window.showModalDialog('../Comun/frmConsultas.aspx?Tipo=SERVICIO', null, "dialogWidth=700px;dialogHeight=400px;status=0")
	// arrRetorno : [0:Codigo],[1:Nombre]
	if(strRetorno!=null)
	{   var arrRetorno = strRetorno.split("|")
	    var doc = document.forms[0];
        doc.txtCodSer.value = arrRetorno[0];
        doc.txtDescripcionServ.value = arrRetorno[1];
	}
}

function jsf_LimpiarFrecuencia(){
    var doc = document.forms[0];
    doc.cboDisa.value="";
    doc.cboMesDesde.value="";
    doc.cboAniodesde.value="";
    doc.cboPeriodoHasta.value="";
    doc.cboAnioHasta.value="";
    doc.txtCodDisa.value = "";
    doc.txtTipoFormato.value = "";
    doc.txtNumContrato.value = "";
    doc.txtDNI.value = "";
    doc.txtCodSer.value = "";
    doc.txtDescripcionServ.value = "";
    doc.cboEtareo.value="";
    doc.txtAutogenerado.value = "";

}

function jsf_LimpiarCriterios(){
    var doc = document.forms[0];

    doc.cboMesDesde.value="";
    doc.cboMesHasta.value="";
    doc.cboAniodesde.value="";
    doc.cboAnioHasta.value="";
    doc.cboDisa.value="";
    doc.cboCategoria.value="";
    doc.cboNivelEESS.value="";
    doc.txtCodEESS.value = "";
    doc.txtNomEESS.value = "";
    doc.txtCodSer.value = "";
    doc.txtDescripcionServ.value = "";
    doc.cboTipoProfesional.value="";
    doc.cboSexo.value="";
    doc.cboTipo.value="";
    doc.txtCodCIE10.value = "";
    doc.txtDescCIE10.value = "";
    doc.cboPresMedicamento.value="";
    doc.txtCodMedicamento.value = "";
    doc.txtDescMedicamento.value = "";
    doc.txtCodProc.value = "";
    doc.txtDescProcedimiento.value = "";
    doc.txtCodInsumos.value = "";
    doc.txtNomInsumos.value = "";
        
}

function jsf_LimpiarObservada(){
    var doc = document.forms[0];
    doc.cboMesDesde.value="00";
    doc.cboAniodesde.value="0000";
    doc.cboPeriodoHasta.value="00";
    doc.cboAnioHasta.value="0000";
    doc.cboRegla.value = "";

}

function wServicio(Filtro){
   	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=1";
	scad += "&AnchoCol=60,450";
	scad += "&Alinea=0,0";
	scad += "&Formato=0,0";
	scad += "&Campos=txtCodSer,txtDescripcionServ";
	scad += "&Tpag=20";
	scad += "&val=1,2";
	scad += "&ncol=Codigo$Nombre";
	window.open(scad, "wServicios", "top=0, left=0, width=685,height=500,menubar=no,scrollbars=yes, resizable=yes, status=1");	
			
} 

function jsf_Procedimiento(Filtro){
   	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=0";
	scad += "&AnchoCol=10,320,110,110,40";
	scad += "&Alinea=1,0,0,0,0";
	scad += "&Formato=0,0,0,0,0";
	scad += "&Campos=txtProcId,txtProcDesc,hddGrupo,hddSubGrupo,hddCostoOrigen";
	scad += "&Tpag=20";
	scad += "&val=1,2,3,4,5";
	scad += "&ncol=Codigo$Nombre$Grupo$SubGrupo$Costo";
	window.open(scad, "jsf_Procedimiento", "top=0, left=0, width=685,height=500,menubar=no,scrollbars=yes, resizable=yes, status=1");	
}
function jsf_Insumos(Filtro){
   	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=0";
	scad += "&AnchoCol=45,320,70,70,50,20";
	scad += "&Alinea=1,0,0,0,0,0,0";
	scad += "&Formato=0,0,0,0,0,0,0";
	scad += "&Campos=txtInsumoId,txtInsumoDesc,hddPresentacion,hddConcentracion,hddCostoOrigenInsumo,hdPetitorio";
	scad += "&Tpag=20";
	scad += "&val=1,2,3,4,5,6";
	scad += "&ncol=Codigo$Nombre$Presentacion$Concentracion$Costo$Petit";
	window.open(scad, "jsf_Insumos", "top=0, left=0, width=685,height=500,menubar=no,scrollbars=yes, resizable=yes, status=1");	
}

function jsf_Diagnostico(Filtro){
	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=0";
	scad += "&AnchoCol=50,550";
	scad += "&Alinea=0,0";
	scad += "&Formato=0,0";
	scad += "&Campos=txtDiagId,txtDiagDesc"; 
	scad += "&Tpag=20";
	scad += "&val=1,2";
	scad += "&ncol=Codigo$Nombre";
	window.open(scad, "jsf_Diagnostico", "top=0, left=0, width=685,height=600,menubar=no,scrollbars=yes, resizable =yes");	
} 


function jsf_Medicamento(Filtro){
	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=0";
	scad += "&AnchoCol=45,420,70,70,20";
	scad += "&Alinea=1,0,0,0,0,0";
	scad += "&Formato=0,0,0,0,0,0";
	scad += "&Campos=txtMedId,txtMedDesc,hddPresentMed,hddConcenMed,hdPetitorio"; 
	scad += "&Tpag=20";
	scad += "&val=1,2,3,4,5";
	scad += "&ncol=Codigo$Nombre$Presentacion$Concentracion$Petitorio";
	window.open(scad, "jsf_Medicamento", "top=0, left=0, width=685,height=600,menubar=no,scrollbars=yes, resizable =yes,status=1");	
}  



function jsf_EESS(Filtro){
	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=0";
	scad += "&AnchoCol=30,60,60,250,30,50,250";
	scad += "&Alinea=1,1,0,0,0,0,0";
	scad += "&Formato=0,0,0,0,0,0,0";
	scad += "&Campos=txtCodEESS,txtNomEESS";
	scad += "&Tpag=20";
	scad += "&val=3,4";
	scad += "&ncol=DISA$Und.Ejec.$Codigo$Nombre$Categoria$Abrv.$Cat.Nombre";
	window.open(scad, "jsf_EESS", "top=0, left=0, width=685,height=500,menubar=no,scrollbars=yes, resizable =yes");	
	
	
} 

//6		
function jsf_AyudaServicio(e, Filtro){
	//document.getElementById('tecla').value = e.keyCode;
	if(e.keyCode == 118){
		wServicio(Filtro);
	}						
}
function jsf_AyudaEESS(e, Filtro){
	//document.getElementById('tecla').value = e.keyCode;
	if(e.keyCode == 118){
		jsf_EESS(Filtro);
	}						
}
function jsf_AyudaCIE10(e, Filtro){
	//document.getElementById('tecla').value = e.keyCode;
	if(e.keyCode == 118){
		jsf_Diagnostico(Filtro);
	}						
}
function jsf_AyudaProc(e, Filtro){
	//document.getElementById('tecla').value = e.keyCode;
	if(e.keyCode == 118){
		jsf_Procedimiento(Filtro);
	}						
}
function jsf_AyudaInsumo(e, Filtro){
	//document.getElementById('tecla').value = e.keyCode;
	if(e.keyCode == 118){
		jsf_Insumos(Filtro);
	}						
}
function jsf_AyudaMedic(e, Filtro){
	//document.getElementById('tecla').value = e.keyCode;
	if(e.keyCode == 118){
		jsf_Medicamento(Filtro);
	}						
}


function jsf_Medicamento_jhony(Filtro){
	var scad = "";
	scad += "../Comun/frmConsultaComun.aspx?nCnx=0&nSQL=0&FiltroInicio=" + Filtro;
	scad += "&Criterio=0";
	scad += "&AnchoCol=45,420,70,70,20";
	scad += "&Alinea=1,0,0,0,0,0";
	scad += "&Formato=0,0,0,0,0,0";
	scad += "&Campos=txtValor,hddMedDesc,hddPresentMed,hddConcenMed,hdPetitorio"; 
	scad += "&Tpag=20";
	scad += "&val=1,2,3,4,5";
	scad += "&ncol=Codigo$Nombre$Presentacion$Concentracion$Petitorio";
	window.open(scad, "jsf_Medicamento", "top=0, left=0, width=685,height=600,menubar=no,scrollbars=yes, resizable =yes,status=1");	
}  

function jsf_prueba(e){
	var control=document.getElementById("ddlParametro");
		
	if(e.keyCode == 118){
		//alert(control.value);
		if(control.value== "108"){
		jsf_Medicamento_jhony("MEDIX$" + "$0");
		}
	}						
}



function jsf_Buscar(){
    var doc = document.forms[0];   
    var flagBusca;
    var flagTipo;
    var mensaje;
    mensaje=""
    flagBusca=0;
    flagTipo="";
    if (doc.hddMensaje.value=="")
     {   doc.hddMensaje.value="ATE";  }
        
    if (doc.hddMensaje.value=="ATE")
    {    if (doc.txtDisaATE.value=="" || doc.txtNroLoteATE.value=="" || doc.txtNumReg.value=="")
            mensaje="Ingrese los datos completos para la busqueda de la Atencion."
            doc.txtDisaATE.focus();
    }

    if (doc.hddMensaje.value=="AFI")
    {    if (doc.txtdisaAFI.value=="" || doc.txtTipoFormatoAFI.value=="" || doc.txtNumRegAFI.value=="")    
            mensaje="Ingrese los datos completos para la busqueda de la Afiliacion."
            doc.txtdisaAFI.focus();
    }
    
    if (doc.hddMensaje.value=="DNI")
    {   if (doc.txtDNI.value=="")
            mensaje="Ingrese el numero del DNI."
            doc.txtDNI.focus();
    }

    if (doc.hddMensaje.value=="DAT")
    {    if (doc.txtPrimerNom.value=="" || doc.txtApePaterno.value=="")
            mensaje="Ingrese los datos completos para la busqueda de la Persona."  
            doc.txtPrimerNom.focus();
    }        
    
    if (mensaje!="")
    {
        alert(mensaje);
    }
}

    
     
