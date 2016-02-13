Imports Reportes.DataLayer

Public Class BUsuarios
    Implements IBUsuarios

    Public Function fnUsuario_por_rol_udr(ByVal codRol As String, ByVal codUdr As String) As System.Data.DataTable Implements IBUsuarios.fnUsuario_por_rol_udr
        Dim objData As DataUsuarios = New DataUsuarios
        Try
            Return objData.fnUsuario_por_rol_udr(codRol, codUdr)
        Catch ex As Exception
            Throw ex
        End Try
    End Function

End Class
