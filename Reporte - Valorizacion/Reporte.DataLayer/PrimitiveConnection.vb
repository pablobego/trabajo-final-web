Imports System
Imports System.Configuration
Imports System.Data.SqlClient
Imports System.Runtime.InteropServices

Public Interface ISqlConexion
    Property Connection() As SqlConnection
    Sub Construct(ByVal pstrConnectionString As String)
    ' Function Create(ByVal pstrConnectionString As String) As SqlConnection
End Interface

Public Class PrimitiveConnection
    Implements ISqlConexion

    Private _cnnConexion As SqlConnection

    Sub New()
    End Sub

    Public Overloads Sub Construct(ByVal pstrConnectionString As String) Implements ISqlConexion.Construct
        Me._cnnConexion = New SqlConnection(pstrConnectionString)
    End Sub

    Public Shared Function Create(ByVal pstrConnectionString As String) As SqlConnection
        Return New SqlConnection(pstrConnectionString)
    End Function

    Public Property Connection() As System.Data.SqlClient.SqlConnection Implements ISqlConexion.Connection
        Get
            Return Me._cnnConexion
        End Get
        Set(ByVal Value As System.Data.SqlClient.SqlConnection)
            Me._cnnConexion = Value
        End Set
    End Property
End Class
