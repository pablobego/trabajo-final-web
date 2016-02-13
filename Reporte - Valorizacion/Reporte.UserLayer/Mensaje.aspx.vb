
Partial Class Mensaje
    Inherits System.Web.UI.Page

    Protected Sub btnCerrar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnCerrar.Click
        Response.Redirect("~/../SisErp/SisMenu/frmLogin.aspx", False)

    End Sub
End Class
