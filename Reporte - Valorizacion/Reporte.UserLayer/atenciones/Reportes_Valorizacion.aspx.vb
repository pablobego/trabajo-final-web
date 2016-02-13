Imports System.Data
Imports Reportes.BusinessLayer
Imports Reportes.DataLayer
Imports System.Data.OleDb
Imports Microsoft.Office.Interop

Partial Class atenciones_Reportes_PCPP2
    Inherits System.Web.UI.Page
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If (Not (Page.IsPostBack)) Then
            Inicio_parametros()
        End If

        lblTitulo.Text = "Reportes de Resultados de Valorización"

    End Sub

    Private Sub Inicio_parametros()
        reporte1.Visible = False
    End Sub

    Public Function Consulta_Rol_Usuario() As String
        Dim retorno As String
        retorno = ""
        lblMensaje.Visible = False
        Dim objperfil As BSeguridad = New BSeguridad()
        Dim dtperfil As DataTable
        Try
            dtperfil = objperfil.Consultarolesusuario(Session("sup_usuario").ToString())
            If dtperfil.Rows.Count > 0 Then
                retorno = dtperfil.Rows(0)("RUS_IDROL")
            Else
                Response.Write("<script>alert('UD no tiene un rol asiganado...')</script>")
            End If
        Catch ex As Exception
            lblMensaje.Text = ex.Message.ToString()
            lblMensaje.Visible = True
        End Try
        Return retorno
    End Function

    Protected Sub ddl_reportes_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles ddl_reportes.SelectedIndexChanged
        reporte1.Visible = False
        Select Case ddl_reportes.SelectedValue
            Case "all"
                divReportePanel.Visible = False
                divBotones.Visible = False
            Case "1"
                mostrar_combos()
            Case "2"
                mostrar_combos()

        End Select

    End Sub

    Private Sub mostrar_combos()
        cboperiodo.Value = "all"
        cbomes.Value = "all"
        divReportePanel.Visible = True
        divBotones.Visible = True
        reporte1.Visible = True
        lblMensaje.Visible = False
    End Sub

    Protected Sub imgExcel_Click(sender As Object, e As ImageClickEventArgs) Handles imgExcel.Click
        GenerarReportes()
    End Sub

    Private Sub GenerarReportes()
        If ddl_reportes.SelectedValue <> "all" Then
            Select Case ddl_reportes.SelectedValue
                Case "1"
                    ejecutar_reporte_resultado_valorizacion()
                Case "2"
                    ejecutar_reporte_superantopesUIT()
            End Select
        Else
            Response.Write("<script>alert('Debe seleccionar un reporte :');</script>")
        End If
    End Sub

    Private Sub ejecutar_reporte_resultado_valorizacion()
        lblMensaje.Visible = False
        Dim RptOperacion As New CrystalDecisions.CrystalReports.Engine.ReportDocument

        Dim rptStream As New System.IO.MemoryStream

        Dim objconsulta As BPCPP = New BPCPP
        Dim dtReporte As DataTable

        Try

            If cboperiodo.Value <> 0 Then
                If cbomes.Value <> 0 Then
                    dtReporte = objconsulta.CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001(cboperiodo.Value, cbomes.Value)

                    If dtReporte.Rows.Count > 0 Then

                        RptOperacion = New CrystalDecisions.CrystalReports.Engine.ReportDocument()

                        Dim reportPath As String
                        Dim nombreArch As String
                        reportPath = ""

                        reportPath = Server.MapPath("Rpt_ReporteResultado.rpt")
                        nombreArch = "ReporteResultadoValorizacion" + cboperiodo.Value + cbomes.Value

                        RptOperacion.Load(reportPath)
                        RptOperacion.SetDataSource(dtReporte)
                        RptOperacion.ExportToHttpResponse(CrystalDecisions.Shared.ExportFormatType.Excel, Response, True, nombreArch)

                    ElseIf dtReporte.Rows.Count = 0 Then
                        Response.Write("<script>alert('No se encontraron registro para el periodo :" + cboperiodo.Value + " mes :" + cbomes.Value + "');</script>")
                    End If
                Else
                    Response.Write("<script>alert('Debe Seleccionar el Mes para generar el reporte...');</script>")
                End If
            Else
                Response.Write("<script>alert('Debe Seleccionar el Periodo para generar el reporte...');</script>")
            End If

        Catch ex As Exception
            lblMensaje.Text = ex.Message.ToString()
            lblMensaje.Visible = True
        End Try

    End Sub


    Private Sub ejecutar_reporte_superantopesUIT()
        lblMensaje.Visible = False
        Dim objconsulta As BPCPP = New BPCPP
        Dim dtReporte As DataTable

        Try

            If cboperiodo.Value <> 0 Then
                If cbomes.Value <> 0 Then
                    dtReporte = objconsulta.CONSULTA_REPORTE_RESULTADOS_FUAS(cboperiodo.Value, cbomes.Value)

                    If dtReporte.Rows.Count > 0 Then
                       
                        ' Creacion de la aplicacion en excel
                        Dim app As Microsoft.Office.Interop.Excel.Application = New Microsoft.Office.Interop.Excel.Application()
                        ' Creamos nueva hoja de trabajao en la aplicacin excel
                        Dim workbook As Microsoft.Office.Interop.Excel.Workbook = app.Workbooks.Add(Type.Missing)
                        ' Creando nueva hoja de trabajo en el libro
                        Dim worksheet As Microsoft.Office.Interop.Excel.Worksheet = Nothing

                        'Obtenemos la referencia de la primera hoja que por el momento tiene nombre Hoja1
                        worksheet = workbook.Sheets("Hoja3")
                        worksheet = workbook.Sheets("Hoja2")
                        worksheet = workbook.Sheets("Hoja1")
                        worksheet = workbook.ActiveSheet
                        'creamos nuevas hojasworkbook.Sheets.Add(After:=workbook.Worksheets("Hoja3"))
                        'workbook.Sheets.Add(After:=workbook.Worksheets("Hoja4"))
                        'workbook.Sheets.Add(After:=workbook.Worksheets("Hoja5"))
                        'workbook.Sheets.Add(After:=workbook.Worksheets("Hoja6"))
                        'workbook.Sheets.Add(After:=workbook.Worksheets("Hoja7"))
                        'workbook.Sheets.Add(After:=workbook.Worksheets("Hoja8"))


                        'Enviamos al excel por hojas'hoja 1
                        For c As Integer = 1 To dtReporte.Columns.Count
                            workbook.Sheets("Hoja1").Cells(1, c) = dtReporte.Columns(c - 1).ColumnName
                        Next
                        For c As Integer = 0 To dtReporte.Rows.Count - 1
                            For d As Integer = 0 To dtReporte.Columns.Count - 1
                                workbook.Sheets("Hoja1").Cells(c + 2, d + 1) = dtReporte.Rows(c).Item(d).Value.ToString()
                            Next
                        Next
                        'hoja2
                        For a As Integer = 1 To dtReporte.Columns.Count
                            workbook.Sheets("Hoja2").Cells(1, a) = dtReporte.Columns(a - 1).ColumnName
                        Next
                        For a As Integer = 0 To dtReporte.Rows.Count - 1
                            For b As Integer = 0 To dtReporte.Columns.Count - 1
                                workbook.Sheets("Hoja2").Cells(a + 2, b + 1) = dtReporte.Rows(a).Item(b).Value.ToString()
                            Next
                        Next
                        'hoja3
                        For f As Integer = 1 To dtReporte.Columns.Count
                            workbook.Sheets("Hoja3").Cells(1, f) = dtReporte.Columns(f - 1).ColumnName
                        Next
                        For f As Integer = 0 To dtReporte.Rows.Count - 1
                            For g As Integer = 0 To dtReporte.Columns.Count - 1
                                workbook.Sheets("Hoja3").Cells(f + 2, g + 1) = dtReporte.Rows(f).Item(g).Value.ToString()
                            Next
                        Next

                        'Para abrir el excel
                        app.Visible = True
                        'Salir de la aplicacin borrar de memoria, los archivos basura y todo 
                        'app = Nothingworkbook = Nothingworksheet = NothingFileClose(1)
                        'GC.Collect()

                    ElseIf dtReporte.Rows.Count = 0 Then
                            Response.Write("<script>alert('No se encontraron registro para el periodo :" + cboperiodo.Value + " mes :" + cbomes.Value + "');</script>")
                    End If
                Else
                    Response.Write("<script>alert('Debe Seleccionar el Mes para generar el reporte...');</script>")
                End If
            Else
                Response.Write("<script>alert('Debe Seleccionar el Periodo para generar el reporte...');</script>")
            End If

        Catch ex As Exception
            lblMensaje.Text = ex.Message.ToString()
            lblMensaje.Visible = True
        End Try

    End Sub

End Class
