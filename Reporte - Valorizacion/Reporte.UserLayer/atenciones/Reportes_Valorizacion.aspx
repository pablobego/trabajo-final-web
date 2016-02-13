<%@ Page Title="" Language="VB" MasterPageFile="~/atenciones/Site.master" AutoEventWireup="false" CodeFile="Reportes_Valorizacion.aspx.vb" Inherits="atenciones_Reportes_PCPP2" EnableEventValidation="false"  %>
<%--ACTUALIZACION DE VARIABLES GENERALES--%>
<asp:Content ID="loginTitle" ContentPlaceHolderID="Titulo" runat="server">
    SIASIS - EVALUACIONES PCPP
</asp:Content>


<%--CONTENIDO--%>

<asp:Content ID="registerContent" ContentPlaceHolderID="Contenido" runat="server">

    <section class="content-header">
        <h1>
            <asp:label runat="server" text="Label" ID="lblTitulo"></asp:label>
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li>
                <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/atenciones/Menu_PCPP.aspx"><i class="fa fa-home"></i> Inicio</asp:HyperLink>
            </li>
            <li class="active">Reportes</li>
        </ol>
    </section>
   
    <section class="content">

    <form id="MainForm" runat="server">
        <%--<asp:ScriptManager ID="ScriptManager" runat="server">
        </asp:ScriptManager>--%>
        <%--<asp:UpdatePanel ID="UpdatePanel" runat="server"> <ContentTemplate>--%>
        <asp:Label ID="lblMensaje" runat="server" Text="Label" Visible="False"></asp:Label>
        <!-- INICIO DATOS DE PÁGINA-->
        <asp:ScriptManager ID="ScriptManager1" runat="server" />
      
		<asp:UpdatePanel ID="UpdatePanel2" runat="server">
		    <ContentTemplate>
                <div class="form-horizontal"> 
                    <div class="form-group">
                        <label class="col-sm-2 control-label"  >Seleccione reporte: </label>
                        <div class= "col-sm-10" >
                            <div class="input-group"><div class="input-group-addon"><i class="fa fa-fw fa-bar-chart-o"></i></div>
                            <asp:DropDownList ID="ddl_reportes" runat="server" CssClass="form-control" AutoPostBack="True">
                                    <asp:ListItem Value="0" Selected="True">--SELECCIONE--</asp:ListItem>
                                    <asp:ListItem Value="1">RESULTADO DE VALORIZACION</asp:ListItem>
                                    <asp:ListItem Value="2">LISTADO DE FUAS QUE SUPERAN TOPES DE UIT</asp:ListItem>
                            </asp:DropDownList>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div class="panel panel-default" runat="server" id="divReportePanel" style="    margin-top: 15px;" visible="false">
                  <div class="panel-heading bg-blue" >
                    <h3 class="panel-title">Datos de Reporte</h3>
                  </div>
                  <div class="panel-body">
                    <div class="form-horizontal" runat="server" id="reporte1" > 
                    <div class="form-group"  >
                        <label  class="col-sm-2 control-label" >Periodo : </label>
                        <div class= "col-sm-10" >
                            <div class="input-group"><div class="input-group-addon"><i class="fa fa-fw fa-calendar-o"></i></div>
                                <select id="cboperiodo" name="cboperiodo"  class="form-control"   runat="server"   >
                                    <option value="0" selected="selected">--Seleccione--</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>   
                                    <option value="2018">2018</option>                 
                                </select>
                            </div>
                        </div> 
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label"  >Mes : </label>
                        <div class= "col-sm-10" >
                            <div class="input-group"><div class="input-group-addon"><i class="fa fa-fw fa-calendar"></i></div>      
                                <select id="cbomes" name="cbomes" runat="server"  class="form-control">
                                    <option value="0" selected="selected">--Seleccione--</option>
                                    <option value="01">Enero</option>
                                    <option value="02">Febrero</option>
                                    <option value="03">Marzo</option>
                                    <option value="04">Abril</option>
                                    <option value="05">Mayo</option>
                                    <option value="06">Junio</option>
                                    <option value="07">Julio</option>
                                    <option value="08">Agosto</option>
                                    <option value="09">Setiembre</option>
                                    <option value="10">Octubre</option>
                                    <option value="11">Noviembre</option>
                                    <option value="12">Diciembre</option>
                                </select>
                                </div>
                        </div>
                    </div>
                        
                    </div>
                    
                  </div>


                </div>

              
			</ContentTemplate> 
        </asp:UpdatePanel>  
        <div align="center" runat="server" id="divBotones">
            <asp:ImageButton ID="imgExcel" runat="server" ImageUrl="~/fotos/excel_new.png"
                ToolTip="Exportar al Excel" style="height: 50px;"/>
        </div>	
                       
				
    </form>
    </section>
    
    
    <!--UTILITARIOS SESION -->
    
       
</asp:Content>