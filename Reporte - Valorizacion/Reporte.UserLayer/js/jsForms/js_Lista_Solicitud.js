/*************************************************
Creado Por      : John Borrego
Fecha Creación  : 27/11/2012


**************************************************/

//Variables Globales Ajax
var v_type = "POST";
var v_contentType = "application/json; charset=utf-8";
var v_dataType = "json";

//Bloquear boton derecho del mouse

document.oncontextmenu = function(){
	return false
} 

function fnVerDetalleSolicitud(codSol,codCorr){
    window.open("frm_detalle_solicitud.aspx?codSol=" + codSol + "&codCorr=" + codCorr,"mywindow","menubar=no,resizable=no,width=700,height=320");
}

function jsf_ConsultarSolicitud(){
    var sResp = "1";
    $.ajax({
        type: v_type,
        url: "frm_listar_solicitud.aspx/FnEjemplo",
        data: "{'sResp':'" + sResp + "'}",
        contentType: v_contentType,
        dataType: v_dataType,
        success: function (result) {
            alert(result);
        },
        error: function (result) { alert("Error"); }
    });
}

function fnEvaluarSolicitud(codSol,codCorr){
    window.open("frm_evaluar_solicitud.aspx?codSol=" + codSol + "&codCorr=" + codCorr, "mywindow", "menubar=no, resizable=no,width=900,height=600, scrollbars=yes");
}