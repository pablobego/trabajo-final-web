/*************************************************
Creado Por      : John Borrego
Fecha Creación  : 27/11/2012


**************************************************/
//Variables Globales Ajax
var v_type = "POST";
var v_contentType = "application/json; charset=utf-8";
var v_dataType = "json";

$(function() {
    $( "#datepicker" ).datepicker();
});
$(document).ready(function(){
    $("#cboTipoSolicitud").change(function() {
        var op = $("#cboTipoSolicitud option:selected").val();
        for(var i=0; i<5; i++){
            $("#div"+i).hide('slow');
        }
        $("#div"+op).show('slow');
    });
});

//Bloquear boton derecho del mouse
document.oncontextmenu = function(){
	return false
} 

function fnBuscarEessSeleccionados(){
    var varPeriodo = $("#cboPeriodo option:selected").val();
   $.ajax({
        type: v_type,
        url: "frm_registrar_solicitud.aspx/fnBuscarEessSeleccionados",
        data: "{'strValuePeriodo':'" + varPeriodo + "'}",
        contentType: v_contentType,
        dataType: v_dataType,
        success: function (result) {
            var objTdEess;
            $("#tdEess").html(result.d);
        },
        error: function (result) { alert("Error: " + result); }
    });
}

function fnSeleccionEess(codSel){
    var varCodSelecc = "";
    varCodSelecc = $("#hddEessSeleccionado").val();
    if(varCodSelecc == ""){
        $("#imgSeleccion"+codSel).attr("src","../fotos/imgNew/i_check.PNG");
        $("#hddEessSeleccionado").val(codSel);
    }else{
        $("#imgSeleccion"+varCodSelecc).attr("src","../fotos/imgNew/i_reg.PNG");
        $("#imgSeleccion"+codSel).attr("src","../fotos/imgNew/i_check.PNG");
        $("#hddEessSeleccionado").val(codSel);
    }
    $("#lblEESSCodSeleccionado").html($("#idVisitaEess"+codSel).html());
    $("#lblEESSnomSeleccionado").html($("#nomEess"+codSel).html());
    $("#lblEESSFecSeleccionado").html($("#fecEess"+codSel).html());
    $("#lblEESSSupSeleccionado").html($("#supEess"+codSel).html());
    $("#hddIdEessSeleccionado").val($("#idEess"+codSel).html());
    
    return true;
}

function fnRegistrarSolicitud(){
    var varParam = "";
    var varTipoSol = $("#cboTipoSolicitud option:selected").val();
    var varMotivoSol = $("input[name=rdListMotivo]:checked").val();
    var varNewVal = "";
    var varActVal = "";
    var varCodEess = $("#lblEESSCodSeleccionado").html();
    var varMotivo = $("#txtMotivo").val();
    var varRequiere = $("#lblRequiereDetalle").text();
    
    if(varTipoSol == "2"){
        varNewVal = $("#datepicker").val();
        varActVal = $("#lblEESSFecSeleccionado").html();
    }else if(varTipoSol == "3"){
        varNewVal = $("#cboMedicoSup").val();
        varActVal = $("#lblEESSSupSeleccionado").html();
    }else if(varTipoSol == "4"){
        varNewVal = $("#cboEESS").val();
        varActVal = $("#hddIdEessSeleccionado").val();
    }

    if(varTipoSol == "-1"){
        alert("Debe seleccionar el Tipo de Solicitud que desea registrar!");
        return false;
    }
    if(varCodEess == "" &&  varRequiere =='S'){
        alert("Debe seleccionar un Establecimiento de Salud para registrar la Solicitud!" + varRequiere);
        return false;
    }
    if(varTipoSol == "2"){
        var arrNewVal = varNewVal.split("/");
        var arrActVal = varActVal.split("/");
        var varDateActual = new Date();
        var varDateNewVal = new Date(arrNewVal[2],arrNewVal[1]-1,arrNewVal[0]);
        var varDateActVal = new Date(arrActVal[2],arrActVal[1]-1,arrActVal[0]);
        
        if(varNewVal == ""){
            alert("Debe ingresar la nueva Fecha de Visita");
            return false;
        }/*else if(varDateNewVal <= varDateActVal){
            alert("La nueva Fecha de Visita debe ser Mayor a la fecha de visita actual");
            return false;
        }else if(varDateNewVal < varDateActual){
            alert("La nueva Fecha de Visita debe ser Mayor a la fecha actual");
            return false;
        }*/
    }
    if(varTipoSol == "3"){
        if(varNewVal == ""){
            alert("Debe seleccionar al nuevo Medico Supervisor");
            return false;
        }else if(varNewVal == varActVal){
            alert("El nuevo Medico Supervisor debe ser diferente al Medico Actual!");
            return false;
        }
    }

    if(varTipoSol == "4"){
        if(varNewVal == ""){
            alert("Debe seleccionar al nuevo EESS");
            return false;
        }else if(varNewVal == varActVal){
            alert("El nuevo EESS debe ser diferente al EESS Actual!");
            return false;
        }
    }
    if(varMotivo == "" && varRequiere=='S'){
        alert("Debe ingresar el detalle de la solicitud!");
        return false;
    }
    if (varMotivoSol == undefined) {
        alert("Debe seleccionar el motivo de la solicitud!");
        return false; 
    }

    varParam = varTipoSol + "$";                            // 0 - Tipo de Solicitud
    varParam += varCodEess + "$";                           // 1 - Codigo del EESS
    varParam += varNewVal + "$";                            // 2 - Nuevo valor
    varParam += varActVal + "$";                            // 3 - Valor Actual
    varParam += varMotivo + "$";                            // 4 - Detalle de Solicitud
    varParam += varMotivoSol;                               // 5 - Motivo de Solicitud

   $.ajax({
        type: v_type,
        url: "frm_registrar_solicitud.aspx/fnRegistrarSolicitud",
        data: "{'strParam':'" + varParam + "'}",
        contentType: v_contentType,
        dataType: v_dataType,
        success: function (result) {
           // alert(result.d +varParam);
            if(result.d == "success"){
                alert("La solicitud se registro Correctamente");
                window.close();
            }else{
                alert("No se pudo registrar la Solicitud");
            }
//            window.opener.location.href = window.opener.location.href;
        },
        error: function (result) { alert("Error: " + result); }
    });
    return true;
}