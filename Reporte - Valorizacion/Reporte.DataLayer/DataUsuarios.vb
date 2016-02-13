Public Class DataUsuarios
    Implements IUsuarios

   
    Public Function fnUsuario_por_rol_udr(ByVal codRol As String, ByVal codUdr As String) As System.Data.DataTable Implements IUsuarios.fnUsuario_por_rol_udr
        Dim objData As PrimitiveCommand

        Try
            objData = New PrimitiveCommand
            objData.CreateInput("@id_Rol", codRol, 3)
            objData.CreateInput("@id_Udr", codUdr, 20)
            Return objData.FP_ExecuteDataTable(Conexion.ObtenerCadenaConexion(), "SEG_USUARIO_POR_ROL_UDR")
        Catch ex As Exception
            Throw ex
        End Try
    End Function

End Class
