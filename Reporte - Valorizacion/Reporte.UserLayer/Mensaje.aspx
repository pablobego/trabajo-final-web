<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Mensaje.aspx.vb" Inherits="Mensaje" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Error</title>
    <LINK href="css/EstilosFrm.css" type="text/css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <table border="0" align="center" cellPadding="6" cellSpacing="0" bordercolor="#999999"
				width="480">
				<tr>
					<td height="264"><table cellSpacing="0" cellPadding="0" align="center" border="0">
							<tr>
								<td class="Frm_Texto_TituloGeneral">&nbsp;</td>
							</tr>
							<tr>
								<td style="PADDING-BOTTOM:5px" class="Frm_Texto_TituloEncabezado">&nbsp;</td>
							</tr>
							<tr>
								<td>
									<table border="1" align="center" cellpadding="0" cellspacing="4" bordercolor="#999999">
										<tr>
											<td bgcolor="#ffffff">
												<table border="0" cellspacing="0" cellpadding="0">
													<tr>
														<td align="right"><img class="imagen" height="22" 
                                                                alt="Cerrar" src="~/fotos/i_barra_salir_01.gif"
																width="22" id="imgSalir" name="imgSalir" runat="server"></td>
													</tr>
													<tr class="Frm_Texto_Etiqueta">
														<td align="center" class="Frm_Texto_TituloGeneral" height="100">&nbsp;¡ERROR !<br>
                                                            SU SESSION DE TRABAJO HA ESPIRADO POR FAVOR VUELVA A CONECTARSE AL SISTEMA<br />
                                                            </td>
													</tr>
													<TR>
														<td height="40" align="center">
                                                                <asp:Button ID="btnCerrar" runat="server" Text="Cerrar"  class="boton" style="WIDTH: 100px" /></td>
													</TR>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
    </div>
    </form>
</body>
</html>
