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

function fnEvaluaSolicitud(codEval){
    var varParam;
    var varTextoEval;
    
    
    
    if(codEval == "2"){
        varTextoEval = "Aprobar";
    }else{
        varTextoEval = "Rechazar";
        if ($("#txtObservacion").val() == "") {
            alert("Debe ingresar la observación de la Evaluación!");
            return false;
        }
    }
    
    if(confirm("¿Está seguro de " + varTextoEval + " la Solicitud?")){
        varParam = $("#hddCodSol").val() + "$";                       // 0 - Codigo de la solicitud
        varParam += $("#hddCodCor").val() + "$";                      // 1 - Correlativo del codigo de la solicitud
        varParam += $("#hddTipoCambio").val() + "$";                  // 2 - Codigo del tipo de Solicitud
        varParam += codEval + "$";                                    // 3 - Codigo de la evaluación
        varParam += $("#txtObservacion").val();                       // 4 - Observación de la evaluación
       $("#imgGifProcesando").show();
       document.getElementById("btnAprobar").disabled = true
       document.getElementById("btnRechazar").disabled = true
       $.ajax({
            type: v_type,
            url: "frm_evaluar_solicitud.aspx/fnEvaluaSolicitud",
            data: "{'strParam':'" + varParam + "'}",
            contentType: v_contentType,
            dataType: v_dataType,
            success: function (result) {
                if(result.d == "success"){
                    $("#imgGifProcesando").hide();
                    alert("La evaluación de la solicitud se registro Correctamente");
                    window.close();
                    window.opener.location.href = window.opener.location.href;
                }else{
                    alert("No se pudo registrar la evaluación de la Solicitud");
                    document.getElementById("btnAprobar").disabled = false
                    document.getElementById("btnRechazar").disabled = false
                    $("#imgGifProcesando").hide();
                }
            },
            error: function (result) { alert("Error: " + result); }
        });
    }else{
        return false;
    }

    return true;
}