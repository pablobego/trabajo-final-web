Public Class DataGenerico
    Implements IGenerico

    Public Function EjecutarQueryDinamico(ByVal query As String) As System.Data.DataTable Implements IGenerico.EjecutarQueryDinamico
        Dim objData As PrimitiveCommand = New PrimitiveCommand
        Try
            Return objData.FP_ExecuteDataTable_Query(Conexion.ObtenerCadenaConexion, query)
        Catch ex As Exception
            Throw ex
        End Try
    End Function
End Class
