Imports Microsoft.VisualBasic

Public Class SelectorColor
    Public Shared Function ObtenerRutaSegunColor(ByVal pColor As String) As String
        Dim resultado As String = String.Empty
        If (pColor = "AMARILLO") Then
            resultado = "../fotos/v_amarillo.gif"
        End If
        If (pColor = "NARANJA") Then
            resultado = "../fotos/v_naranja.gif"
        End If
        If (pColor = "ROJO") Then
            resultado = "../fotos/v_rojo.gif"
        End If
        If (pColor = "VERDE") Then
            resultado = "../fotos/v_verde.gif"
        End If
        If (pColor = "AZUL") Then
            resultado = "../fotos/v_azul.gif"
        End If
        Return resultado
    End Function

End Class
