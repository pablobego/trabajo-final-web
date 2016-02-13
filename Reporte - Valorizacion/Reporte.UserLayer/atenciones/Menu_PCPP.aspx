<%@ Page Title="" Language="VB" MasterPageFile="~/atenciones/Site.master" AutoEventWireup="false" CodeFile="Menu_PCPP.aspx.vb" Inherits="atenciones_Menu_PCPP2"  EnableEventValidation="false" %>

<%--ACTUALIZACION DE VARIABLES GENERALES--%>
<asp:Content ID="loginTitle" ContentPlaceHolderID="Titulo" runat="server">
    SIASIS - EVALUACIONES PCPP
</asp:Content>

<%--CONTENIDO--%>

<asp:Content ID="registerContent" ContentPlaceHolderID="Contenido" runat="server">
    
	<script src="../js/js_Menu.js" type="text/javascript"></script>
	<script src="../js/jsForms/js_Lista_Solicitud.js?n=1" type="text/javascript"></script>
    <section class="content-header">
        <h1>
            <asp:label runat="server" text="Label" ID="lblTitulo"></asp:label>
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li class="active"><a href="#"><i class="fa fa-home"></i> Inicio</a></li>
        </ol>
    </section>
   
    <section class="content">

    <form id="MainForm" runat="server">
        	
        <asp:ScriptManager ID="ScriptManager" runat="server">
        </asp:ScriptManager>
        <asp:UpdatePanel ID="UpdatePanel" runat="server"> <ContentTemplate>
        <asp:Label ID="lblPruebas" runat="server" Text="Label" Visible="False"></asp:Label>
        
	    	                                                               
        <!-- INICIO DATOS DE PÁGINA-->
        <div id="divSolicitud" runat="server" visible="false">

            <%--<iframe id="ifSolicitudes" src="frm_listar_solicitud.aspx" frameborder="0"  height="100%" scrolling="auto"></iframe>--%>
			 
                    <!-- Repeater para los Responsables de GREP-->
                

                     <!-- SOLICITUDES INICIO-->
                    <div class="mailbox row">
                        <div class="col-xs-12">
                            <div class="box box-solid">
                                <div class="box-header">
                                        <i class="fa fa-inbox"></i>
                                        <h3 class="box-title">Solicitudes (<label id="lblTotalSolicitud" runat="server"></label>)</h3>
                                        <a id="divRegistrarSolicitud" runat="server" visible="true" class="btn btn-primary pull-right " href="#"   style="    color: #fff;      margin: 10px;"><i class="fa fa-pencil"></i> Registrar Solicitud</a>      
                                        <a id="divConsultarSolicitud" runat="server" visible="true" class="btn btn-default pull-right " href="#"   style="         margin: 10px;"><i class="fa fa-search"></i> Consultar Solicitudes</a>      
		
                                </div>
                                
                                <div class="box-body" >                                                                                                                                                                                                                                                                  
                                <div class="table-responsive" id="divSolicitudesUDR" runat="server">
                                    <table class="table table-bordered table-hover table-striped dataTable" id="jsTable"> 
                                        <thead class="bg-light-blue">
                                            <tr><th></th>
                                                <th>EESS</th>
                                                <th>Tipo de Solicitud</th>
                                                <th>Estado</th>
                                                <th>Solicitado por</th>
                                                <th>Fecha de Solicitud</th>
                                                <th>Evaluado por</th>
                                                <th>Fecha de Evaluación</th>
                                            </tr>
                                        </thead>
                                    <%--SOLICITUDES MÉDICOS--%>
                                        <asp:Repeater ID="rptSolicitudesUDR" runat="server">
                                            <ItemTemplate >
                                                <tr > <%--class="unread"--%>
                                                    <td class="small-col" >
                                                         <a class="btn btn-info btn-sm " data-toggle="modal" data-target="#rptDetalle_<%#Eval("scam_idnumreg").ToString%>_<%#Eval("scam_idmov").ToString%>" data-toggle="tooltip" data-placement="right" title="Ver detalle"><i class="fa fa-play-circle-o" style="   font-size: 15px;"></i></a>  
                                                    </td>
                                                    <td class="name"><label id="lblNumSolUdr" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"><%#Eval("eessNombre").ToString%> - <%#Eval("scam_idmov").ToString%></label></a></td>
                                                    <td class="subject">
                                                         <label id="lblEESS" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;" ><%#Eval("descTipoCambio").ToString%></label>
                                                    </td>
                                                    <td class="subject">
                                                         <label id="lblEstado" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;" ><span class="badge <%#ColorEstado(Eval("descEstado").ToString)%>"><%#Eval("descEstado").ToString%></span></label>
                                                    </td>
                                                    <td class="subject">
                                                         <label id="lblRegistra" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"></label>
                                                    </td>
                                                    <td class="time">
                                                        <label id="lblFechaRegistro" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"><%#Eval("scam_fecha_sol").ToString%></label>
                                                    </td>
                                                    <td class="subject">
                                                         <label id="lblEvaluador" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"></label>
                                                    </td>
                                                    <td class="time">
                                                        <label id="lblFecha" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"><%#Eval("scam_fecha_eval").ToString%></label>
                                                    </td>
                                                </tr>
                                                    
                                            </ItemTemplate>        
                                        </asp:Repeater>
                                    </table>                             
                                </div>
                                 <div class="table-responsive" id="divSolicitudesGREP" runat="server">
                                    <table class="table table-bordered table-hover table-striped dataTable" id="tablaSolicitudesGREP" > 
                                        <thead class="bg-light-blue">
                                            <tr>
                                                <th>UDR/RED</th>
                                                <th>EESS</th>
                                                <th>Tipo de Solicitud</th>
                                                <th>Estado</th>
                                                <th>Solicitado por</th>
                                                <th>Fecha de Solicitud</th>
                                                <th></th>
                                            </tr>
                                            
                                        </thead>
                                        <%--SOLICITUDES DE GREP--%>
                                            <asp:Repeater ID="rptSolicitudesGREP" runat="server">
                                                <ItemTemplate>
                                                
                                                    <tr > <%--class="unread"--%>
                                                        <td class="name">
                                                            <label id="Label1" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;" ><span class="<%#ColorTipo(Eval("tipoEval").ToString)%>"><%# Tipo(Eval("tipoEval").ToString)%></span></label>

                                                            <label id="lblNombUDR" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"></label>
                                                          </td>
                                                        <td class="name"><label id="lblNumSolUdr" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"></label></td>
                                                        <td class="subject">
                                                             <label id="lblEESS" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;" ></label>
                                                        </td>
                                                        <td class="subject">
                                                             <label id="lblEstado" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;" ><span class="badge <%#ColorEstado(Eval("descEstado").ToString)%>"><%#Eval("descEstado").ToString%></span></label>
                                                        </td>
                                                        <td class="subject">
                                                             <label id="lblRegistra" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"><%# Eval("nombreUsuarioSolicitud").ToString%></label>
                                                        </td>
                                                        <td class="time">
                                                            <label id="lblFechaRegistro" class="Frm_Texto_Etiqueta3" style="FONT-SIZE: 11px;"><%#Eval("scam_fecha_sol").ToString%></label>
                                                        </td>
                                                        <td>
                                                            <input id="btnEvaluar" type="button" value="Evaluar" class="btn btn-info" onclick=""/>
                                                        </td>
                                                    </tr>
                                                </ItemTemplate>        
                                            </asp:Repeater>
                                    </table>                             
                                </div>
                               </div>
                        </div>
                       </div>


                    <!-- FIN DATOS DE PÁGINA-->
            </div> 
        </div>
    
    

    </ContentTemplate> </asp:UpdatePanel>
       
    </form>

    
   
   
    <!-- REPETIDOR MODALES DETALLE-->

    
 <asp:Repeater ID="rptDetalles" runat="server">
    <ItemTemplate >
        <div  class="modal fade"  id="rptDetalle_<%#Eval("scam_idnumreg").ToString%>_<%#Eval("scam_idmov").ToString%>" tabindex="-1" role="dialog" aria-hidden="true">
            <div class=modal-dialog >  
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title"><i class="fa fa-envelope-o"></i> Detalle de Solicitud Evaluada</h4>
                    </div>
                    <div class="modal-body">
                        <ul class="timeline">
                                
                                <!-- timeline time label -->
                                <li class="time-label">
                                    <span class="bg-yellow"><%# ProcesaFecha(Eval("scam_fecha_sol"))%>                                        
                                    </span>
                                </li>
                                <li>
                                    <i class="fa  fa-envelope bg-blue"></i>
                                    <div class="timeline-item">
                                        <span class="time"><i class="fa fa-clock-o"></i><%# ProcesaHora(Eval("scam_fecha_sol"))%></span>
                                        <h3 class="timeline-header"><a href="#">Solicitud: </a><%# Eval("scam_idnumreg").ToString%>-<%# Eval("scam_idmov").ToString%><%# Eval("descTipoCambio").ToString%></h3>
                                        <div class="timeline-body">
                                            <dl class="dl-horizontal">
                                                <dt>EESS:</dt>
                                                <dd><%# Eval("eessNombre").ToString%></dd>
                                                <dt>Solicitado por:</dt>
                                                <dd><%# Eval("nombreUsuarioSolicitud").ToString%></dd>
                                                <dt><dt>
                                                <dd></dd>
                                                <dt><dt>
                                                <dd></dd>
                                                <dt>Motivo:<dt>
                                                <dd><%# Eval("tipomotivo").ToString%></dd> 
                                                <dt>Detalle:<dt>
                                                <dd><%# Eval("scam_motivo").ToString%></dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                                <li class="time-label" >
                                    <span class=" <%#ColorEstado(Eval("descEstado").ToString)%>"><%# ProcesaFecha(Eval("scam_fecha_eval"))%>                                        
                                    </span>
                                </li>
                                <li>
                                    <i class="fa fa-hand-o-right bg-aqua"></i>
                                    <div class="timeline-item">
                                        <span class="time"><i class="fa fa-clock-o"></i><%# ProcesaHora(Eval("scam_fecha_eval"))%></span>
                                        <h3 class="timeline-header"><a href="#">Evaluación: </a><%# Eval("descEstado").ToString%></h3>
                                        <div class="timeline-body">  
                                            <dl class="dl-horizontal">
                                                <dt>Evaluador:</dt>
                                                <dd><%# Eval("nombreUsuarioEvaluacion").ToString%></dd>
                                                <dt>Observaciones:</dt>
                                                <dd><%# Eval("scam_observacion_eval").ToString%></dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-clock-o"></i>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div >
    </ItemTemplate>        
</asp:Repeater>


    </section>
     <script type="text/jscript">
         function pageLoad(sender, args) {

             InitialiseSettings();
         }


         function InitialiseSettings() {
             $('.dataTable').dataTable({
                 "bPaginate": true,
                 "bFilter": true,
                 "bSort": true,
                 "bInfo": true,
                 "bAutoWidth": false
             });


         }
    </script>

       
</asp:Content>

