Imports System
Imports System.Data.SqlClient
Imports System.Runtime.InteropServices

#Region "Interface IPrimitiveTransaction"

Public Interface IPrimitiveTransaction
    Property Trans() As SqlTransaction
    Sub SP_CreateTransaction(ByVal pstrConnection As String)
    Sub SP_Commit()
    Sub SP_Rollback()
End Interface

#End Region

Public Class PrimitiveTransaction
    Implements IPrimitiveTransaction

#Region "Atributos"
    Private _trans As SqlTransaction
    Private _connection As SqlConnection
#End Region


    Sub New()
        _connection = New SqlConnection
    End Sub

#Region "Metodos"

    Public Property Trans() As System.Data.SqlClient.SqlTransaction Implements IPrimitiveTransaction.Trans
        Get
            Return Me._trans
        End Get
        Set(ByVal Value As System.Data.SqlClient.SqlTransaction)
            Me._trans = Value
        End Set
    End Property

    Public Sub SP_CreateTransaction(ByVal pstrConnection As String) Implements IPrimitiveTransaction.SP_CreateTransaction
        Try
            _connection = PrimitiveConnection.Create(pstrConnection)
            _connection.Open()
            _trans = _connection.BeginTransaction

        Catch ex As Exception
            Throw ex
        End Try

    End Sub

    Public Sub SP_Commit() Implements IPrimitiveTransaction.SP_Commit
        _trans.Commit()
        If _connection.State = Data.ConnectionState.Open Then
            _connection.Close()
        End If
        If Not _connection Is Nothing Then
            CType(_connection, IDisposable).Dispose()
            _connection = Nothing
        End If
        If Not _trans Is Nothing Then _trans.Dispose()
        _trans = Nothing
    End Sub

    Public Sub SP_Rollback() Implements IPrimitiveTransaction.SP_Rollback
        _trans.Rollback()
        If _connection.State = Data.ConnectionState.Open Then
            _connection.Close()
        End If
        If Not _connection Is Nothing Then
            CType(_connection, IDisposable).Dispose()
            _connection = Nothing
        End If
        If Not _trans Is Nothing Then _trans.Dispose()
        _trans = Nothing
    End Sub
#End Region


End Class

