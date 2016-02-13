Imports Reportes.DataLayer
Imports Reportes.EntityLayer

Public Class BSeguridad
    
    Public Function Consultarolesusuario(ByVal usuario As String) As DataTable
        Dim objData As DataSeguridad
        Dim objDt As DataTable
        Try
            objData = New DataSeguridad
            objDt = objData.Consultarolesusuario(usuario)
            Return objDt
        Catch ex As Exception
            Throw ex
        End Try
    End Function
    'ZP 29/08/2014
    Public Function ConsultaSaludoUsuario(ByVal usuario As String) As DataTable
        Dim objData As DataSeguridad
        Dim objDt As DataTable
        Try
            objData = New DataSeguridad
            objDt = objData.ConsultaSaludoUsuario(usuario)
            Return objDt
        Catch ex As Exception
            Throw ex
        End Try
    End Function

   
    

    'ZP 28/09/2014
    Public Function ConsultarFormulariosUsuario(ByVal idUsuario As String) As DataTable
        Dim objData As DataSeguridad
        Dim objDt As DataTable
        Try
            objData = New DataSeguridad
            objDt = objData.ConsultarformulariosUsuario(idUsuario)
            Return objDt
        Catch ex As Exception
            Throw ex
        End Try
    End Function
End Class
