Imports Supervision.BusinessLayer
Imports System.Data
Imports System.Globalization

Partial Class atenciones_Menu_PCPP2
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load


        If (Not (Page.IsPostBack)) Then
            lblTitulo.Text = "Proceso de Resultado de Valorización"  '+ Session("sup_rol").ToString
        End If

    End Sub

    Public Function ColorEstado(ByVal estadoDesc As String) As String
        Dim resultado As String
        resultado = "bg-navy"
        Select Case estadoDesc
            Case "APROBADA"
                resultado = "bg-green"
            Case "PENDIENTE"
                resultado = "bg-light-blue"
            Case "RECHAZADA"
                resultado = "bg-red"
        End Select
        Return resultado
    End Function

    Public Function ColorTipo(ByVal tipo As String) As String
        'If tipo = "IP" Then
        Return "badge bg-green"
        'End If

        'Return ""
    End Function

    Public Function Tipo(ByVal tipoDesc As String) As String
        If tipoDesc = "IP" Then
            Return tipoDesc
        End If

        Return ""
    End Function

    Public Function ProcesaFecha(ByVal fecha As DateTime) As String
        Dim format As String
        format = "dd MMM yyyy"
        Return fecha.ToString(format, CultureInfo.CreateSpecificCulture("es-PE"))
    End Function
    Public Function ProcesaHora(ByVal fecha As DateTime) As String
        Dim format As String
        format = "hh:mm"
        Return fecha.ToString(format)
    End Function

End Class
