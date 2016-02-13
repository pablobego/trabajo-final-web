
//Variables Globales Ajax
var v_type = "POST";
var v_contentType = "application/json; charset=utf-8";
var v_dataType = "json";

//Bloquear boton derecho del mouse
document.oncontextmenu = function(){
	return false
} 

function fnVerificaPrestacion(){
    
        varParam = $("#txtDisa").val() + "$";                       
        varParam += $("#txtLote").val() + "$";                      
        varParam += $("#txtNumregate").val() + "$";                
      
       $("#imgGifProcesando").show();
       $("#divMensajeExito").hide();
       $("#divMensajeError").hide();
       $.ajax({
           type: v_type,
           url: "frmAgregaPrestacionMuestra.aspx/fnVerificaPrestacion",
           data: "{'strParam':'" + varParam + "'}",
           contentType: v_contentType,
           dataType: v_dataType,
           success: function (result) {
               if (result.d == "true" ) {
                   $("#imgGifProcesando").hide();                   
                    $("#divMensajeExito").show();
                    $("#divMensajeError").hide();                  
                   
                   // alert("La prestación está disponible para ser evaluada por PCPP");
                   //                    window.close();
                   //                    window.opener.location.href = window.opener.location.href;
               } else {
                    $("#divMensajeExito").hide();
                    $("#divMensajeError").show();    
                   $("#imgGifProcesando").hide();
                   //                    document.getElementById("btnAprobar").disabled = true
                   //                    document.getElementById("btnRechazar").disabled = true
               }
           },
           error: function (result) { alert("Error: " + result); $("#imgGifProcesando").hide(); }
       });


    return true;
}