Public Class DataMReportes
    Implements IDataMReportes

    Public Function TraerDatos(ByVal idnumreg As Integer) As System.Data.DataTable Implements IDataMReportes.TraerDatos
        Dim objData As PrimitiveCommand = New PrimitiveCommand()
        Try
            objData.CreateInput("@I_IDNUMREG", idnumreg, 4)
            Return objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PR_MPCPP_SEL_MUESTRA_EXCEL")
            'Return objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PCPP_CONSULTA_MUESTRA_EXCEL")
        Catch ex As Exception
            Throw ex
        End Try
    End Function


End Class
