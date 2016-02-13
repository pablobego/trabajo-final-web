Imports System.Data
Imports Supervision.BusinessLayer

Partial Class Master
    Inherits System.Web.UI.MasterPage


    Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Try
            If (Not Page.IsPostBack) Then  

            End If



            'Actualizar datos de Session
            lblIdUsuario.Text = "PABLO BENITES"

            'Mostrar Menú de Opciones
            'MostrarDatosMenu()

        Catch ex As Exception
            Response.Redirect("../Mensaje.aspx")
        End Try

    End Sub

    'ZP 22/08/2014
    Public Sub CargarDatosSesion()
        'LISTA DE FORMULARIOS DEL MODULO
        Dim objformularios1 As BSeguridad = New BSeguridad
        Dim dtformulariosUsuario As DataTable
        dtformulariosUsuario = objformularios1.ConsultarFormulariosUsuario(Session("sup_usuario").ToString())
        Session("dtformulariosUsuario") = dtformulariosUsuario
    End Sub

    'ZP 29/08/2014
    Public Sub MostrarDatosMenu()
        'Cargar Icono
        imgUsuario.ImageUrl = "../img/" + Session("SUP_ICONO") + ".png"
       

        'Obtener Página Actual
        Dim arrPath As String()
        arrPath = HttpContext.Current.Request.Url.AbsolutePath.Split(CType("/", Char))
        arrPath(0) = arrPath(arrPath.Length - 1)

        Dim dtformularios As DataTable
        'dtformularios = Session("dtformulariosUsuario")

        Dim row As DataRow

        Dim lkOpcion As HyperLink

        'If dtformularios.Rows.Count > 0 Then
        ulMenuOpciones.Controls.Clear()

        lkOpcion = New HyperLink
        lkOpcion.ID = "0"
        lkOpcion.Text = "<i class=""fa fa-home""></i> <span>Inicio</span>"
        'Agrega el Inicio
        If (arrPath(0) = "Menu_PCPP.aspx") Then
            ulMenuOpciones.Controls.Add(New LiteralControl("<li class=""active"">"))
        Else
            ulMenuOpciones.Controls.Add(New LiteralControl("<li>"))
        End If
        lkOpcion.NavigateUrl = "Menu_PCPP.aspx"
        ulMenuOpciones.Controls.Add(lkOpcion)
        ulMenuOpciones.Controls.Add(New LiteralControl("</li>"))


        For Each row In dtformularios.Rows
            lblMensajeOpciones.Text += row(2)
            lblMensajeOpciones.Visible = True


            Dim strOpcion As String

            strOpcion = row("FRM_DESCRIPCIONFORM")

            'Ver si esta activa o no
            If (arrPath(0) = strOpcion) Then
                ulMenuOpciones.Controls.Add(New LiteralControl("<li class=""active"">"))
            Else
                ulMenuOpciones.Controls.Add(New LiteralControl("<li>"))

            End If

            lkOpcion = New HyperLink
            lkOpcion.ID = row("ID_ROL_FORMULARIO")

            'Agregar icono
            Dim arrNombre As String()
            arrNombre = row("FRM_NOMBRE").Split(CType(".", Char))
            Dim strNumero As String = arrNombre(0)
            Select Case strNumero
                Case "05"
                    lkOpcion.Text = "<i class=""fa fa-list-alt""></i> <span>"
                Case "08"
                    lkOpcion.Text = "<i class=""fa fa-bar-chart-o""></i> <span>"
                Case "06"
                    lkOpcion.Text = "<i class=""fa fa-file-o""></i> <span>"
                Case "01"
                    lkOpcion.Text = "<i class=""fa fa-calendar""></i> <span>"
                Case "03"
                    lkOpcion.Text = "<i class=""fa fa-gear""></i> <span>"
                Case "02"
                    lkOpcion.Text = "<i class=""fa fa-gears""></i> <span>"
                Case Else
                    lkOpcion.Text = "<i class=""fa fa-dashboard""></i> <span>"
            End Select

            'Fin Agregar icono
            lkOpcion.Text += row("FRM_NOMBRE") + "</span>"
            lkOpcion.NavigateUrl = strOpcion 'row("FRM_DESCRIPCIONFORM")
            ulMenuOpciones.Controls.Add(lkOpcion)
            ulMenuOpciones.Controls.Add(New LiteralControl("</li>"))
        Next


        'Else
        'lblMensajeOpciones.Visible = True
        'lblMensajeOpciones.Text = "ERROR CARGAR FORMULARIO"
        'End If
    End Sub

 

 

    Protected Sub btnSIASIS_ServerClick(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSIASIS.ServerClick

        'Session("sup_usuario") = Nothing
        'Session("Logeado") = "NO_LOGEADO"
        'Session("dtformulariosUsuario") = Nothing
        'Response.Redirect("../login.aspx")


        If Not IsNothing(Session("sup_usuario")) Then
            Dim sUsuario As String
            sUsuario = Session("sup_usuario").ToString
            Dim sID As String
            sID = Session.SessionID

            'http://www.sis.gob.pe/sissme/SisMenu/frmMenu.aspx
            'Response.Redirect("../../sisSME/SisMenu/frmGestionVinculos.aspx?smconect=QSIS134ASDEAQWESAESAS23&devresourceMax=" + Session.SessionID + "&devresourceTop=" + Session("sup_usuario").ToString, False)
            Response.Redirect("~/../SisErp/SisMenu/frmGestionVinculos.aspx?sid=" + Session.SessionID, False)
        Else
            'Response.Redirect("../../sisSME/SisMenu/frmLogin.aspx")
            Response.Redirect("~/../SisErp/SisMenu/frmLogin.aspx", False)
        End If
    End Sub
End Class

