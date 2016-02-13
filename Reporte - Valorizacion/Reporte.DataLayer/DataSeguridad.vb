Imports Reportes.EntityLayer

Public Class DataSeguridad
 
    Public Function Consultarolesusuario(ByVal usuario As String) As DataTable
        Dim objDt As DataTable
        Dim objData As PrimitiveCommand

        Try
            objData = New PrimitiveCommand
            objData.CreateInput("@V_USUARIO", usuario, 20)
            objDt = objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PR_VALOR_SEL_LISTA_ROL_USUARIO")
            Return objDt

        Catch ex As Exception
            Throw ex
        End Try
    End Function
  
    Function ConsultarformulariosUsuario(ByVal idUsuario As String) As DataTable
        Dim objDt As DataTable
        Dim objData As PrimitiveCommand

        Try
            objData = New PrimitiveCommand
            objData.CreateInput("@V_IDUSUARIO", idUsuario, 20)
            objDt = objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PR_VALOR_SEL_FORMULARIOS_POR_USUARIO")
            Return objDt

        Catch ex As Exception
            Throw ex
        End Try
    End Function

    Function ConsultaSaludoUsuario(ByVal idUsuario As String) As DataTable
        Dim objDt As DataTable
        Dim objData As PrimitiveCommand

        Try
            objData = New PrimitiveCommand
            objData.CreateInput("@V_IDUSUARIO", idUsuario, 20)
            objDt = objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "PR_MPCPP_SEL_SALUDO_POR_USUARIO")
            Return objDt

        Catch ex As Exception
            Throw ex
        End Try
    End Function



End Class
