Public Interface IPCPP

    Function SESSIONOBTENERVALOR(ByVal strSession As String) As DataTable
    Function CONSULTA_REPORTE_RESULTADOS_VALORIZACION_0001(ByVal strPeriodo As String, ByVal strMes As String) As DataTable
    Function fnConsulta_solicitudes_por_rol(ByVal strCodUsu As String) As DataTable
    Function CONSULTA_REPORTE_RESULTADOS_FUAS(ByVal strPeriodo As String, ByVal strMes As String) As DataTable
End Interface
