Imports Reportes.DataLayer
Imports Reportes.EntityLayer
Imports System.Text

Public Class BPCPP
    Implements IBPCPP

    Public Function SessionObtenerValor(ByVal strSesion As String) As System.Data.DataTable Implements IBPCPP.SESSIONOBTENERVALOR
        Dim objData As DataPCPP = New DataPCPP()
        Try
            Return objData.SessionObtenerValor(strSesion)
        Catch ex As Exception
            Throw ex
        End Try
    End Function

    'Metodos para el Proceso de Solicitud
    Public Function fnConsulta_solicitudes_por_rol(ByVal strCodUsu As String) As DataTable Implements IBPCPP.fnConsulta_solicitudes_por_rol
        Dim objData As DataPCPP = New DataPCPP()
        Try
            Return objData.fnConsulta_solicitudes_por_rol(strCodUsu)
        Catch ex As Exception
            Throw ex
        End Try

    End Function

    Public Function CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001(ByVal strPeriodo As String, ByVal strMes As String) As DataTable Implements IBPCPP.CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001
        Dim objData As DataPCPP = New DataPCPP()
        Try
            Return objData.CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001(strPeriodo, strMes)
        Catch ex As Exception
            Throw ex
        End Try

    End Function

    Public Function CONSULTA_REPORTE_RESULTADOS_FUAS(ByVal strPeriodo As String, ByVal strMes As String) As DataTable Implements IBPCPP.CONSULTA_REPORTE_RESULTADOS_FUAS
        Dim objData As DataPCPP = New DataPCPP()
        Try
            Return objData.CONSULTA_REPORTE_RESULTADOS_FUAS(strPeriodo, strMes)
        Catch ex As Exception
            Throw ex
        End Try

    End Function

End Class
