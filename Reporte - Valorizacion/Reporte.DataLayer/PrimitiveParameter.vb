Imports System
Imports System.Data
Imports System.Data.SqlClient
Imports System.Collections
Imports System.Runtime.InteropServices

#Region "Interface IPrimitiveParameter"
Public Interface IPrimitiveParameter
    Sub SP_CreateInput(ByVal name As String, ByVal value As Object, ByVal size As Int32)
    Sub SP_CreateOutInput(ByVal name As String, ByVal value As Object, ByVal size As Int32)
End Interface

#End Region

Public Class PrimitiveParameter
    Implements IList, IPrimitiveParameter

    Private _parameter As SqlParameter
    Private arrList As New ArrayList



    Public Sub SP_CreateInput(ByVal name As String, ByVal value As Object, ByVal size As Int32) Implements IPrimitiveParameter.SP_CreateInput
        Me._parameter = New SqlParameter(name, value)
        Me._parameter.Size = size
        Me._parameter.Direction = ParameterDirection.Input
        Me.Add(_parameter)
    End Sub


    Public Sub SP_CreateOutInput(ByVal name As String, ByVal value As Object, ByVal size As Int32) Implements IPrimitiveParameter.SP_CreateOutInput
        Me._parameter = New SqlParameter(name, value)
        Me._parameter.Size = size
        Me._parameter.Direction = ParameterDirection.Output
        Me.Add(_parameter)
    End Sub


#Region "Metodos"

    Public Function Add(ByVal value As SqlParameter) As Integer
        If value Is Nothing Then
            Throw New ArgumentNullException("value", "La collecion no acepta valores nulos")
        End If
        Return arrList.Add(value)

    End Function
    Public Sub Clear()
        arrList.Clear()
    End Sub
    Public Function Contains(ByVal value As SqlParameter) As Boolean
        If value Is Nothing Then
            Return False
        End If

        Return arrList.Contains(value)

    End Function
    Public Sub Insert(ByVal index As Integer, ByVal value As SqlParameter)
        If value Is Nothing Then
            Throw New ArgumentNullException("value", "La collecion no acepta valores nulos")
        End If

        arrList.Insert(index, value)

    End Sub
    Public Function IndexOf(ByVal value As SqlParameter) As Integer
        If value Is Nothing Then
            Return -1
        End If

        Return arrList.IndexOf(value)
    End Function
    Default Public Property Item(ByVal index As Integer) As SqlParameter
        Get
            Return CType(arrList(index), SqlParameter)
        End Get
        Set(ByVal Value As SqlParameter)
            If Not Value Is Nothing Then
                arrList(index) = Value
            Else
                Throw New ArgumentNullException("value", "Collection does not accept null members")
            End If
        End Set
    End Property
    Public Sub Remove(ByVal value As SqlParameter)
        If value Is Nothing Then
            Throw New ArgumentNullException("value", "You cannot remove collection member using null reference")
        End If

        arrList.Remove(value)

    End Sub
    Public Sub RemoveAt(ByVal index As Integer)
        arrList.RemoveAt(index)
    End Sub
    Public ReadOnly Property IsReadOnly() As Boolean
        Get
            Return arrList.IsReadOnly
        End Get
    End Property

#End Region

#Region "Interface Ilist"

    Public Sub CopyTo(ByVal array As System.Array, ByVal index As Integer) Implements System.Collections.ICollection.CopyTo
        arrList.CopyTo(array, index)

    End Sub
    Public ReadOnly Property Count() As Integer Implements System.Collections.ICollection.Count
        Get
            Return arrList.Count
        End Get
    End Property
    Public ReadOnly Property IsSynchronized() As Boolean Implements System.Collections.ICollection.IsSynchronized
        Get
            Return arrList.IsSynchronized
        End Get
    End Property
    Public ReadOnly Property SyncRoot() As Object Implements System.Collections.ICollection.SyncRoot
        Get
            Return Me
        End Get
    End Property
    Public Function GetEnumerator() As System.Collections.IEnumerator Implements System.Collections.IEnumerable.GetEnumerator
        Return arrList.GetEnumerator
    End Function
    Private Function _Add(ByVal value As Object) As Integer Implements System.Collections.IList.Add
        If (value Is Nothing) Then
            Throw New ArgumentNullException("value", "La collecion no acepta valores nulos")
        End If

        If Not TypeOf (value) Is SqlParameter Then
            Throw New ArgumentException("value", "La collecion no acepta valores nulos")
        End If

        Return Add(CType(value, SqlParameter))

    End Function
    Private Sub _Clear() Implements System.Collections.IList.Clear
        Clear()
    End Sub
    Private Function _Contains(ByVal value As Object) As Boolean Implements System.Collections.IList.Contains
        If value Is Nothing Then
            Return False
        End If

        If Not TypeOf (value) Is SqlParameter Then
            Return False
        End If

        Return Contains(CType(value, SqlParameter))
    End Function
    Private Function _IndexOf(ByVal value As Object) As Integer Implements System.Collections.IList.IndexOf

        If value Is Nothing Then
            Return -1
        End If

        If Not TypeOf (value) Is SqlParameter Then
            Return -1
        End If

        Return IndexOf(CType(value, SqlParameter))

    End Function
    Private Sub _Insert(ByVal index As Integer, ByVal value As Object) Implements System.Collections.IList.Insert
        If value Is Nothing Then
            Throw New ArgumentNullException("value", "La collecion no acepta valores nulos")
        End If

        If Not TypeOf (value) Is SqlParameter Then
            Throw New ArgumentException("La collecion no acepta valores nulos", "value")
        End If

        Insert(index, CType(value, SqlParameter))
    End Sub
    Private ReadOnly Property IsFixedSize() As Boolean Implements System.Collections.IList.IsFixedSize
        Get
            Return arrList.IsFixedSize
        End Get
    End Property
    Private ReadOnly Property _IsReadOnly() As Boolean Implements System.Collections.IList.IsReadOnly
        Get
            Return IsReadOnly
        End Get
    End Property
    Private Sub _Remove(ByVal value As Object) Implements System.Collections.IList.Remove
        If value Is Nothing Then
            Throw New ArgumentNullException("value", "La collecion no acepta valores nulos")
        End If

        If Not TypeOf (value) Is SqlParameter Then
            Throw New ArgumentException("La collecion no acepta valores nulos", "value")
        End If

        Remove(CType(value, SqlParameter))

    End Sub
    Private Sub _RemoveAt(ByVal index As Integer) Implements System.Collections.IList.RemoveAt
        RemoveAt(index)
    End Sub
    Private Property _Item(ByVal index As Integer) As Object Implements System.Collections.IList.Item
        Get
            Return CType(arrList(index), SqlParameter)
        End Get
        Set(ByVal Value As Object)
            If Not Value Is Nothing Then

                If Not TypeOf (Value) Is SqlParameter Then '
                    Throw New ArgumentException("La collecion no acepta valores nulos", "value")
                Else
                    arrList(index) = CType(Value, SqlParameter)
                End If
            Else
                Throw New ArgumentNullException("value", "La collecion no acepta valores nulos")
            End If
        End Set
    End Property

#End Region



End Class
