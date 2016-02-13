Imports System
Imports System.Data
Imports System.Data.SqlClient
Imports System.Runtime.InteropServices


#Region "Interface IPrimitiveCommand"

Public Interface IPrimitiveCommand
    Function FP_ExecuteNonQuery(ByVal pstrConnection As String, ByVal pstrProcedure As String) As Integer
    Function FP_ExecuteNonQueryTx(ByVal pTrans As PrimitiveTransaction, ByVal pstrProcedure As String) As Integer
    Function FP_ExecuteDataTable(ByVal pstrConnection As String, ByVal pstrProcedure As String) As DataTable
    Function FP_ExecuteDataTable_Query(ByVal pstrConnection As String, ByVal pstrQuery As String) As DataTable
    Function FP_ExecuteScalar(ByVal pTrans As PrimitiveTransaction, ByVal pstrProcedure As String) As String
    Function FP_ExecuteDataSet(ByVal pstrConnection As String, ByVal pstrProcedure As String) As DataSet
    Function SP_OutInPut(ByVal pPosition As Int32) As Object
    Sub SP_CreateInput(ByVal name As String, ByVal value As Object, ByVal size As Int32)
    Sub SP_CreateOutInput(ByVal name As String, ByVal value As Object, ByVal size As Int32)
End Interface

#End Region

Public Class PrimitiveCommand
    Implements IPrimitiveCommand


#Region "Atributos"

    Private _command As SqlCommand
    Private _objParameter As PrimitiveParameter

#End Region


    Sub New()
        _objParameter = New PrimitiveParameter
    End Sub

#Region "metodos"

    Public Sub CreateInput(ByVal name As String, ByVal value As Object, ByVal size As Int32) Implements IPrimitiveCommand.SP_CreateInput
        _objParameter.SP_CreateInput(name, value, size)
    End Sub

    Public Sub CreateOutInput(ByVal name As String, ByVal value As Object, ByVal size As Int32) Implements IPrimitiveCommand.SP_CreateOutInput
        _objParameter.SP_CreateOutInput(name, value, size)
    End Sub

    Public Function OutInPut(ByVal pPosition As Int32) As Object Implements IPrimitiveCommand.SP_OutInPut
        Return _objParameter(pPosition).Value
    End Function


    Public Function FP_ExecuteNonQuery(ByVal pstrConnection As String, ByVal pstrProcedure As String) As Integer Implements IPrimitiveCommand.FP_ExecuteNonQuery

        Dim i As Int32
        Try
            Me._command = New SqlCommand(pstrProcedure, PrimitiveConnection.Create(pstrConnection))
            Me._command.CommandType = CommandType.StoredProcedure
            Me._command.CommandTimeout = 0
            For i = 0 To _objParameter.Count - 1
                Me._command.Parameters.Add(_objParameter.Item(i))
            Next
            Me._command.Connection.Open()
            Return Me._command.ExecuteNonQuery()

        Catch ex As Exception
            Throw ex
        Finally
            Me._command.Connection.Close()
            Me._command = Nothing
        End Try

    End Function


    Public Function FP_ExecuteNonQueryTx(ByVal pTrans As PrimitiveTransaction, ByVal pstrProcedure As String) As Integer Implements IPrimitiveCommand.FP_ExecuteNonQueryTx

        Dim i As Int32
        Try
            Me._command = New SqlCommand(pstrProcedure, pTrans.Trans.Connection)
            Me._command.CommandType = CommandType.StoredProcedure
            Me._command.CommandTimeout = 0
            For i = 0 To _objParameter.Count - 1
                Me._command.Parameters.Add(_objParameter.Item(i))
            Next

            If pTrans.Trans.Connection.State <> ConnectionState.Open Then
                pTrans.Trans.Connection.Open()
            End If
            Me._command.Transaction = pTrans.Trans

            Return Me._command.ExecuteNonQuery()

        Catch ex As Exception
            Throw ex
        Finally
            Me._command = Nothing
        End Try

    End Function
    Public Function FP_ExecuteScalar(ByVal pTrans As PrimitiveTransaction, ByVal pstrProcedure As String) As String Implements IPrimitiveCommand.FP_ExecuteScalar

        Dim i As Int32
        Try
            Me._command = New SqlCommand(pstrProcedure, pTrans.Trans.Connection)
            Me._command.CommandType = CommandType.StoredProcedure
            Me._command.CommandTimeout = 0
            For i = 0 To _objParameter.Count - 1
                Me._command.Parameters.Add(_objParameter.Item(i))
            Next

            If pTrans.Trans.Connection.State <> ConnectionState.Open Then
                pTrans.Trans.Connection.Open()
            End If
            Me._command.Transaction = pTrans.Trans

            Return Me._command.ExecuteScalar()

        Catch ex As Exception
            Throw ex
        Finally
            Me._command = Nothing
        End Try

    End Function

    Public Function FP_ExecuteDataTable(ByVal pstrConnection As String, ByVal pstrProcedure As String) As System.Data.DataTable Implements IPrimitiveCommand.FP_ExecuteDataTable
        Dim i As Int32
        Dim _connection As SqlConnection
        Dim _dataAdatpter As SqlDataAdapter
        Dim _ds As New DataSet
        _dataAdatpter = Nothing
        _connection = Nothing
        Try
            _connection = PrimitiveConnection.Create(pstrConnection)
            Me._command = New SqlCommand(pstrProcedure, _connection)
            Me._command.CommandType = CommandType.StoredProcedure
            Me._command.CommandTimeout = 0

            For i = 0 To _objParameter.Count - 1
                Me._command.Parameters.Add(_objParameter.Item(i))
            Next

            Me._command.Connection.Open()
            _dataAdatpter = New SqlDataAdapter(_command)
            _dataAdatpter.Fill(_ds)

            Return _ds.Tables(0)

        Catch ex As Exception
            Throw ex
        Finally
            If (Not _dataAdatpter Is Nothing) Then _dataAdatpter.Dispose()
            If Me._command.Connection.State = ConnectionState.Open Then
                Me._command.Connection.Close()
            End If
            If _connection.State = ConnectionState.Open Then
                _connection.Close()
            End If
            If Not _connection Is Nothing Then _connection.Dispose()
            _connection = Nothing
            _command = Nothing
        End Try
    End Function

    Public Function FP_ExecuteDataSet(ByVal pstrConnection As String, ByVal pstrProcedure As String) As System.Data.DataSet Implements IPrimitiveCommand.FP_ExecuteDataSet
        Dim i As Int32
        Dim _connection As SqlConnection
        Dim _dataAdatpter As SqlDataAdapter
        Dim _ds As New DataSet
        _dataAdatpter = Nothing
        _connection = Nothing
        Try
            _connection = PrimitiveConnection.Create(pstrConnection)
            Me._command = New SqlCommand(pstrProcedure, _connection)
            Me._command.CommandType = CommandType.StoredProcedure
            Me._command.CommandTimeout = 0

            For i = 0 To _objParameter.Count - 1
                Me._command.Parameters.Add(_objParameter.Item(i))
            Next

            Me._command.Connection.Open()
            _dataAdatpter = New SqlDataAdapter(_command)
            _dataAdatpter.Fill(_ds)

            Return _ds

        Catch ex As Exception
            Throw ex
        Finally
            If (Not _dataAdatpter Is Nothing) Then _dataAdatpter.Dispose()
            If Me._command.Connection.State = ConnectionState.Open Then
                Me._command.Connection.Close()
            End If
            If _connection.State = ConnectionState.Open Then
                _connection.Close()
            End If
            If Not _connection Is Nothing Then _connection.Dispose()
            _connection = Nothing
            _command = Nothing
        End Try
    End Function
#End Region



    Public Function FP_ExecuteDataTable_Query(ByVal pstrConnection As String, ByVal pstrQuery As String) As System.Data.DataTable Implements IPrimitiveCommand.FP_ExecuteDataTable_Query
        Dim _connection As SqlConnection
        Dim _dataAdatpter As SqlDataAdapter
        Dim _ds As New DataSet
        _dataAdatpter = Nothing
        _connection = Nothing
        Try
            _connection = PrimitiveConnection.Create(pstrConnection)
            Me._command = New SqlCommand(pstrQuery, _connection)
            Me._command.CommandType = CommandType.Text
            Me._command.CommandTimeout = 0

            Me._command.Connection.Open()
            _dataAdatpter = New SqlDataAdapter(_command)
            _dataAdatpter.Fill(_ds)

            Return _ds.Tables(0)

        Catch ex As Exception
            Throw ex
        Finally
            If (Not _dataAdatpter Is Nothing) Then _dataAdatpter.Dispose()
            If Me._command.Connection.State = ConnectionState.Open Then
                Me._command.Connection.Close()
            End If
            If _connection.State = ConnectionState.Open Then
                _connection.Close()
            End If
            If Not _connection Is Nothing Then _connection.Dispose()
            _connection = Nothing
            _command = Nothing
        End Try
    End Function
End Class
