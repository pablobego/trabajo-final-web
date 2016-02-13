Public Class DataPCPP
    Implements IPCPP

    Public Function CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001(ByVal strPeriodo As String, ByVal strMes As String) As System.Data.DataTable Implements IPCPP.CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001
        Dim objData As PrimitiveCommand = New PrimitiveCommand()
        Try
            objData.CreateInput("@V_PERIODO", strPeriodo, 4)
            objData.CreateInput("@V_MES", strMes, 2)
            Return objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PR_VALOR_SEL_RESULVALOR_0001")
        Catch ex As Exception
            Throw ex
        End Try
    End Function

    Public Function SessionObtenerValor(ByVal strSession As String) As System.Data.DataTable Implements IPCPP.SESSIONOBTENERVALOR
        Dim pData As PrimitiveCommand = New PrimitiveCommand()

        Try
            pData.CreateInput("@SessionID", strSession, 30)

            Return pData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "SEG_ObtenerValorSession")
        Catch ex As Exception
            Throw ex
        End Try
    End Function

    Public Function fnConsulta_solicitudes_por_rol(ByVal strCodUsu As String) As System.Data.DataTable Implements IPCPP.fnConsulta_solicitudes_por_rol
        Dim objData As PrimitiveCommand = New PrimitiveCommand()
        Try
            objData.CreateInput("@cod_usu", strCodUsu, 20)
            Return objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PCPP_CONSULTA_SOLICITUDES_POR_ROL")
        Catch ex As Exception
            Throw ex
        End Try
    End Function

    Public Function CONSULTA_REPORTE_RESULTADOS_FUAS(ByVal strPeriodo As String, ByVal strMes As String) As System.Data.DataTable Implements IPCPP.CONSULTA_REPORTE_RESULTADOS_FUAS
        Dim objData As PrimitiveCommand = New PrimitiveCommand()
        Try
            objData.CreateInput("@V_PERIODO", strPeriodo, 4)
            objData.CreateInput("@V_MES", strMes, 2)
            Return objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PR_VALOR_SEL_SUPERANTOPESUIT")
        Catch ex As Exception
            Throw ex
        End Try
    End Function

End Class
