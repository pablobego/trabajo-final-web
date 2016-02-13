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

function fnListarSolicitudes(){
    $.ajax({
        type: v_type,
        url: "frm_consultar_solicitud.aspx/fnConsultarSolicitudes",
        data: "{strNumPage : '1'}",
        contentType: v_contentType,
        dataType: v_dataType,
        success: function (result) {
            $("#divListaSolicitud").html(result.d);
            if($("#hddCantPages").val() > 1){
			    $("#divPaginacion").paginate({
				    count 		            : $("#hddCantPages").val(),
				    start 		            : 1,
				    display                 : 10,
				    border					: false,
				    text_color  			: '#888',
				    background_color    	: '#EEE',
				    text_hover_color  		: 'black',
				    background_hover_color	: '#CFCFCF',
				    onChange     			: function(page){
				                                fnListarSolicitudesPaginate(page);
										      }
			    });
			}
        },
        error: function (result) { alert("Error"); }
    });
}

function fnListarSolicitudesPaginate(varNumPage){
    $.ajax({
        type: v_type,
        url: "frm_consultar_solicitud.aspx/fnConsultarSolicitudes",
        data: "{'strNumPage':'" + varNumPage + "'}",
        contentType: v_contentType,
        dataType: v_dataType,
        success: function (result) {
            $("#divListaSolicitud").html(result.d);
        },
        error: function (result) { alert("Error"); }
    });
}

function fnEliminaSolicitud(codSol,codSolCor){
    if(confirm("¿Está seguro de eliminar la solicitud?")){
        var varParam = "";
        varParam = codSol + "$";            // 0 - Codigo de solicitud
        varParam += codSolCor;              // 1 - Correlativo de Solicitud
        $.ajax({
            type: v_type,
            url: "frm_consultar_solicitud.aspx/fnEliminarSolicitud",
            data: "{'strParam':'" + varParam + "'}",
            contentType: v_contentType,
            dataType: v_dataType,
            success: function (result) {
                if(result.d == "success"){
                    fnListarSolicitudes();
                    alert("La solicitud se elimino Correctamente!");
                }else{
                    alert("No se pudo eliminar la solicitud!");
                }
            },
            error: function (result) { alert("Error"); }
        });
    }
}