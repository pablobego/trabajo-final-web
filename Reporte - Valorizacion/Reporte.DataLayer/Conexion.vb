Imports System.Configuration

Public Class Conexion
    Public Shared Function ObtenerCadenaConexion() As String
        Return ConfigurationManager.AppSettings("Conexion.Cadena").ToString()
    End Function
End Class
