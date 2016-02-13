Imports System.Data
Imports Supervision.BusinessLayer

Partial Class atenciones_login
    Inherits System.Web.UI.Page

    Protected Sub Page_PreLoad(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.PreLoad
     

        'Inicio: SESSION SQL
        Session("sup_usuario") = Nothing
        Session("Logeado") = "NO_LOGEADO"
        Session("dtformulariosUsuario") = Nothing

        If Not Page.IsPostBack Then
            Session("PageIndex") = Nothing

            Response.Redirect("atenciones/Menu_PCPP.aspx", True)
        End If

    End Sub

End Class
