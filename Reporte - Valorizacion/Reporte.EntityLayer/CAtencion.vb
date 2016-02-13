Imports System

Public Class CAtencion
    ' Properties
    Public Property ApellidoMaterno() As String
        Get
            Return Me._apMat
        End Get
        Set(ByVal value As String)
            Me._apMat = value
        End Set
    End Property
    Public Property fecha_reviso() As DateTime
        Get
            Return Me._fecha_revision
        End Get
        Set(ByVal value As DateTime)
            Me._fecha_revision = value
        End Set
    End Property
    Public Property usuario_reviso() As String
        Get
            Return Me._usuario_revisado
        End Get
        Set(ByVal value As String)
            Me._usuario_revisado = value
        End Set
    End Property

    Public Property ApellidoPaterno() As String
        Get
            Return Me._apPat
        End Get
        Set(ByVal value As String)
            Me._apPat = value
        End Set
    End Property

    Public Property Autogenerado() As String
        Get
            Return Me._autogenerado
        End Get
        Set(ByVal value As String)
            Me._autogenerado = value
        End Set
    End Property

    Public Property AutoGenInstitucion() As String
        Get
            Return Me._autogeninstitucion
        End Get
        Set(ByVal value As String)
            Me._autogeninstitucion = value
        End Set
    End Property

    Public Property CategoriaPago() As String
        Get
            Return Me._categoPago
        End Get
        Set(ByVal value As String)
            Me._categoPago = value
        End Set
    End Property

    Public Property CodAte() As Integer
        Get
            Return Me._codate
        End Get
        Set(ByVal value As Integer)
            Me._codate = value
        End Set
    End Property

    Public Property CodDestino() As String
        Get
            Return Me._coddestino
        End Get
        Set(ByVal value As String)
            Me._coddestino = value
        End Set
    End Property

    Public Property CodInstitucion() As String
        Get
            Return Me._codinstitucion
        End Get
        Set(ByVal value As String)
            Me._codinstitucion = value
        End Set
    End Property

    Public Property CodSituacionAfiIns() As String
        Get
            Return Me._codsituacionafiins
        End Get
        Set(ByVal value As String)
            Me._codsituacionafiins = value
        End Set
    End Property

    Public Property CostoInsumos() As Decimal
        Get
            Return Me._costoinsu
        End Get
        Set(ByVal value As Decimal)
            Me._costoinsu = value
        End Set
    End Property

    Public Property CostoMedicamento() As Decimal
        Get
            Return Me._costomedi
        End Get
        Set(ByVal value As Decimal)
            Me._costomedi = value
        End Set
    End Property

    Public Property CostoServicio() As Decimal
        Get
            Return Me._costoserv
        End Get
        Set(ByVal value As Decimal)
            Me._costoserv = value
        End Set
    End Property

    Public Property CostoTotal() As Decimal
        Get
            Return Me._costototal
        End Get
        Set(ByVal value As Decimal)
            Me._costototal = value
        End Set
    End Property

    Public Property Disa() As String
        Get
            Return Me._disa
        End Get
        Set(ByVal value As String)
            Me._disa = value
        End Set
    End Property

    Public Property DisaAfiIns() As String
        Get
            Return Me._disaafiins
        End Get
        Set(ByVal value As String)
            Me._disaafiins = value
        End Set
    End Property

    Public Property DisaCom() As String
        Get
            Return Me._disacom
        End Get
        Set(ByVal value As String)
            Me._disacom = value
        End Set
    End Property

    Public Property DisaRec() As String
        Get
            Return Me._disarec
        End Get
        Set(ByVal value As String)
            Me._disarec = value
        End Set
    End Property

    Public Property Dni() As String
        Get
            Return Me._dni
        End Get
        Set(ByVal value As String)
            Me._dni = value
        End Set
    End Property

    Public Property DniPersonaSalud() As String
        Get
            Return Me._dnipersonasalud
        End Get
        Set(ByVal value As String)
            Me._dnipersonasalud = value
        End Set
    End Property

    Public Property Edad() As Integer
        Get
            Return Me._edad
        End Get
        Set(ByVal value As Integer)
            Me._edad = value
        End Set
    End Property

    Public Property EsAltoCosto() As String
        Get
            Return Me._esaltocosto
        End Get
        Set(ByVal value As String)
            Me._esaltocosto = value
        End Set
    End Property

    Public Property EsCierre() As String
        Get
            Return Me._escierre
        End Get
        Set(ByVal value As String)
            Me._escierre = value
        End Set
    End Property

    Public Property EsGestante() As String
        Get
            Return Me._esgestante
        End Get
        Set(ByVal value As String)
            Me._esgestante = value
        End Set
    End Property

    Public Property EsRec() As String
        Get
            Return Me._esrec
        End Get
        Set(ByVal value As String)
            Me._esrec = value
        End Set
    End Property

    Public Property Estado() As String
        Get
            Return Me._estado
        End Get
        Set(ByVal value As String)
            Me._estado = value
        End Set
    End Property

    Public Property EstadoObservacion() As String
        Get
            Return Me._estadoobservacion
        End Get
        Set(ByVal value As String)
            Me._estadoobservacion = value
        End Set
    End Property

    Public Property EstadoValida() As String
        Get
            Return Me._estadovalida
        End Get
        Set(ByVal value As String)
            Me._estadovalida = value
        End Set
    End Property

    Public Property EstPago() As String
        Get
            Return Me._estpago
        End Get
        Set(ByVal value As String)
            Me._estpago = value
        End Set
    End Property

    Public Property FecAct() As DateTime
        Get
            Return Me._fecAct
        End Get
        Set(ByVal value As DateTime)
            Me._fecAct = value
        End Set
    End Property

    Public Property FecAltaHosp() As DateTime
        Get
            Return Me._fecaltahosp
        End Get
        Set(ByVal value As DateTime)
            Me._fecaltahosp = value
        End Set
    End Property

    Public Property FecAtencion() As DateTime
        Get
            Return Me._fecatencion
        End Get
        Set(ByVal value As DateTime)
            Me._fecatencion = value
        End Set
    End Property

    Public Property FecBaja() As DateTime
        Get
            Return Me._fecbaja
        End Get
        Set(ByVal value As DateTime)
            Me._fecbaja = value
        End Set
    End Property

    Public Property FecCrea() As DateTime
        Get
            Return Me._feccrea
        End Get
        Set(ByVal value As DateTime)
            Me._feccrea = value
        End Set
    End Property

    Public Property FechaNacimiento() As DateTime
        Get
            Return Me._fecNac
        End Get
        Set(ByVal value As DateTime)
            Me._fecNac = value
        End Set
    End Property

    Public Property FecIngHosp() As DateTime
        Get
            Return Me._fecinghosp
        End Get
        Set(ByVal value As DateTime)
            Me._fecinghosp = value
        End Set
    End Property

    Public Property FecParto() As DateTime
        Get
            Return Me._fecparto
        End Get
        Set(ByVal value As DateTime)
            Me._fecparto = value
        End Set
    End Property

    Public Property Flag() As String
        Get
            Return Me._flag
        End Get
        Set(ByVal value As String)
            Me._flag = value
        End Set
    End Property

    Public Property Formato() As String
        Get
            Return Me._formato
        End Get
        Set(ByVal value As String)
            Me._formato = value
        End Set
    End Property

    Public Property HistoriaClinica() As String
        Get
            Return Me._historiaclinica
        End Get
        Set(ByVal value As String)
            Me._historiaclinica = value
        End Set
    End Property

    Public Property HorAtencion() As String
        Get
            Return Me._horAtencion
        End Get
        Set(ByVal value As String)
            Me._horAtencion = value
        End Set
    End Property

    Public Property IdCategoriaEeSs() As String
        Get
            Return Me._idcategoriaeess
        End Get
        Set(ByVal value As String)
            Me._idcategoriaeess = value
        End Set
    End Property

    Public Property IdComponente() As String
        Get
            Return Me._idcomp
        End Get
        Set(ByVal value As String)
            Me._idcomp = value
        End Set
    End Property

    Public Property IdEeSs() As String
        Get
            Return Me._ideess
        End Get
        Set(ByVal value As String)
            Me._ideess = value
        End Set
    End Property

    Public Property IdEeSsContraRefiere() As String
        Get
            Return Me._ideesscontrarefiere
        End Get
        Set(ByVal value As String)
            Me._ideesscontrarefiere = value
        End Set
    End Property

    Public Property IdEsSsRefirio() As String
        Get
            Return Me._ideessrefirio
        End Get
        Set(ByVal value As String)
            Me._ideessrefirio = value
        End Set
    End Property

    Public Property IdGrupoEtareo() As String
        Get
            Return Me._idgrupoetareo
        End Get
        Set(ByVal value As String)
            Me._idgrupoetareo = value
        End Set
    End Property

    Public Property IdLugar() As String
        Get
            Return Me._idlugar
        End Get
        Set(ByVal value As String)
            Me._idlugar = value
        End Set
    End Property

    Public Property IdModalidad() As Integer
        Get
            Return Me._idmodalidad
        End Get
        Set(ByVal value As Integer)
            Me._idmodalidad = value
        End Set
    End Property

    Public Property IdNumReg() As Integer
        Get
            Return Me._idnumreg
        End Get
        Set(ByVal value As Integer)
            Me._idnumreg = value
        End Set
    End Property

    Public Property IdNumRegCom() As Integer
        Get
            Return Me._idnumregcom
        End Get
        Set(ByVal value As Integer)
            Me._idnumregcom = value
        End Set
    End Property

    Public Property IdPer() As Integer
        Get
            Return Me._idper
        End Get
        Set(ByVal value As Integer)
            Me._idper = value
        End Set
    End Property

    Public Property IdPpDd() As Integer
        Get
            Return Me._idppdd
        End Get
        Set(ByVal value As Integer)
            Me._idppdd = value
        End Set
    End Property

    Public Property IdServicio() As String
        Get
            Return Me._idservicio
        End Get
        Set(ByVal value As String)
            Me._idservicio = value
        End Set
    End Property

    Public Property IdSexo() As String
        Get
            Return Me._idsexo
        End Get
        Set(ByVal value As String)
            Me._idsexo = value
        End Set
    End Property

    Public Property IdTipoPersonaSalud() As Integer
        Get
            Return Me._idtipopersonasalud
        End Get
        Set(ByVal value As Integer)
            Me._idtipopersonasalud = value
        End Set
    End Property

    Public Property IdUbigeo() As String
        Get
            Return Me._idubigeo
        End Get
        Set(ByVal value As String)
            Me._idubigeo = value
        End Set
    End Property

    Public Property IdUsuarioAct() As String
        Get
            Return Me._idusuarioact
        End Get
        Set(ByVal value As String)
            Me._idusuarioact = value
        End Set
    End Property

    Public Property IdUsuarioCrea() As String
        Get
            Return Me._idusuariocrea
        End Get
        Set(ByVal value As String)
            Me._idusuariocrea = value
        End Set
    End Property

    Public Property Lote() As String
        Get
            Return Me._lote
        End Get
        Set(ByVal value As String)
            Me._lote = value
        End Set
    End Property

    Public Property LoteAfiIns() As String
        Get
            Return Me._loteafiins
        End Get
        Set(ByVal value As String)
            Me._loteafiins = value
        End Set
    End Property

    Public Property LoteCom() As String
        Get
            Return Me._lotecom
        End Get
        Set(ByVal value As String)
            Me._lotecom = value
        End Set
    End Property

    Public Property LoteRec() As String
        Get
            Return Me._loterec
        End Get
        Set(ByVal value As String)
            Me._loterec = value
        End Set
    End Property

    Public Property Mes() As String
        Get
            Return Me._mes
        End Get
        Set(ByVal value As String)
            Me._mes = value
        End Set
    End Property

    Public Property ModPago() As String
        Get
            Return Me._modpago
        End Get
        Set(ByVal value As String)
            Me._modpago = value
        End Set
    End Property

    Public Property Monto() As Decimal
        Get
            Return Me._monto
        End Get
        Set(ByVal value As Decimal)
            Me._monto = value
        End Set
    End Property

    Public Property NroHojaReferencia() As String
        Get
            Return Me._nrohojareferencia
        End Get
        Set(ByVal value As String)
            Me._nrohojareferencia = value
        End Set
    End Property

    Public Property NumAutorizacion() As String
        Get
            Return Me._numautorizacion
        End Get
        Set(ByVal value As String)
            Me._numautorizacion = value
        End Set
    End Property

    Public Property NumHojaContraRefiere() As String
        Get
            Return Me._numhojacontrarefiere
        End Get
        Set(ByVal value As String)
            Me._numhojacontrarefiere = value
        End Set
    End Property

    Public Property NumRegAfi() As Integer
        Get
            Return Me._numregafi
        End Get
        Set(ByVal value As Integer)
            Me._numregafi = value
        End Set
    End Property

    Public Property NumRegAfinIns() As String
        Get
            Return Me._numregafiins
        End Get
        Set(ByVal value As String)
            Me._numregafiins = value
        End Set
    End Property

    Public Property NumRegAte() As String
        Get
            Return Me._numregate
        End Get
        Set(ByVal value As String)
            Me._numregate = value
        End Set
    End Property

    Public Property NumRegAteCom() As String
        Get
            Return Me._numregatecom
        End Get
        Set(ByVal value As String)
            Me._numregatecom = value
        End Set
    End Property

    Public Property NumRegAteRec() As String
        Get
            Return Me._numregaterec
        End Get
        Set(ByVal value As String)
            Me._numregaterec = value
        End Set
    End Property

    Public Property NumRegEsc() As Integer
        Get
            Return Me._numregesc
        End Get
        Set(ByVal value As Integer)
            Me._numregesc = value
        End Set
    End Property

    Public Property Obs() As String
        Get
            Return Me._obs
        End Get
        Set(ByVal value As String)
            Me._obs = value
        End Set
    End Property

    Public Property Observacion() As String
        Get
            Return Me._observacion
        End Get
        Set(ByVal value As String)
            Me._observacion = value
        End Set
    End Property

    Public Property OrigenPersonal() As Integer
        Get
            Return Me._origenpersonal
        End Get
        Set(ByVal value As Integer)
            Me._origenpersonal = value
        End Set
    End Property

    Public Property Pago() As String
        Get
            Return Me._pago
        End Get
        Set(ByVal value As String)
            Me._pago = value
        End Set
    End Property

    Public Property Periodo() As String
        Get
            Return Me._periodo
        End Get
        Set(ByVal value As String)
            Me._periodo = value
        End Set
    End Property

    Public Property PrimerNombre() As String
        Get
            Return Me._pNom
        End Get
        Set(ByVal value As String)
            Me._pNom = value
        End Set
    End Property

    Public Property SegundoNombre() As String
        Get
            Return Me._sNom
        End Get
        Set(ByVal value As String)
            Me._sNom = value
        End Set
    End Property

    Public Property TablaAfi() As String
        Get
            Return Me._tablaafi
        End Get
        Set(ByVal value As String)
            Me._tablaafi = value
        End Set
    End Property

    Public Property TipDig() As String
        Get
            Return Me._tipdig
        End Get
        Set(ByVal value As String)
            Me._tipdig = value
        End Set
    End Property

    Public Property TipoDocumento() As String
        Get
            Return Me._tipodocumento
        End Get
        Set(ByVal value As String)
            Me._tipodocumento = value
        End Set
    End Property

    Public Property TipoFormatoAfiIns() As String
        Get
            Return Me._tipoformatoafiins
        End Get
        Set(ByVal value As String)
            Me._tipoformatoafiins = value
        End Set
    End Property

    Public Property TipoPerSalud() As String
        Get
            Return Me._tipopersalud
        End Get
        Set(ByVal value As String)
            Me._tipopersalud = value
        End Set
    End Property

    Public Property TipoTransporte() As String
        Get
            Return Me._tipotransporte
        End Get
        Set(ByVal value As String)
            Me._tipotransporte = value
        End Set
    End Property

    Public Property TipoTraslado() As String
        Get
            Return Me._tipotraslado
        End Get
        Set(ByVal value As String)
            Me._tipotraslado = value
        End Set
    End Property

    Public Property UbigeoAfi() As String
        Get
            Return Me._ubigeoafi
        End Get
        Set(ByVal value As String)
            Me._ubigeoafi = value
        End Set
    End Property

    Public Property UE() As String
        Get
            Return Me._ue
        End Get
        Set(ByVal value As String)
            Me._ue = value
        End Set
    End Property


    ' Fields
    Private _usuario_revisado As String
    Private _fecha_revision As DateTime
    Private _apMat As String
    Private _apPat As String
    Private _autogenerado As String
    Private _autogeninstitucion As String
    Private _categoPago As String
    Private _codate As Integer
    Private _coddestino As String
    Private _codinstitucion As String
    Private _codsituacionafiins As String
    Private _costoinsu As Decimal
    Private _costomedi As Decimal
    Private _costoserv As Decimal
    Private _costototal As Decimal
    Private _disa As String
    Private _disaafiins As String
    Private _disacom As String
    Private _disarec As String
    Private _dni As String
    Private _dnipersonasalud As String
    Private _edad As Integer
    Private _esaltocosto As String
    Private _escierre As String
    Private _esgestante As String
    Private _esrec As String
    Private _estado As String
    Private _estadoobservacion As String
    Private _estadovalida As String
    Private _estpago As String
    Private _fecAct As DateTime
    Private _fecaltahosp As DateTime
    Private _fecatencion As DateTime
    Private _fecbaja As DateTime
    Private _feccrea As DateTime
    Private _fecinghosp As DateTime
    Private _fecNac As DateTime
    Private _fecparto As DateTime
    Private _flag As String
    Private _formato As String
    Private _historiaclinica As String
    Private _horAtencion As String
    Private _idcategoriaeess As String
    Private _idcomp As String
    Private _ideess As String
    Private _ideesscontrarefiere As String
    Private _ideessrefirio As String
    Private _idgrupoetareo As String
    Private _idlugar As String
    Private _idmodalidad As Integer
    Private _idnumreg As Integer
    Private _idnumregcom As Integer
    Private _idper As Integer
    Private _idppdd As Integer
    Private _idservicio As String
    Private _idsexo As String
    Private _idtipopersonasalud As Integer
    Private _idubigeo As String
    Private _idusuarioact As String
    Private _idusuariocrea As String
    Private _lote As String
    Private _loteafiins As String
    Private _lotecom As String
    Private _loterec As String
    Private _mes As String
    Private _modpago As String
    Private _monto As Decimal
    Private _nrohojareferencia As String
    Private _numautorizacion As String
    Private _numhojacontrarefiere As String
    Private _numregafi As Integer
    Private _numregafiins As String
    Private _numregate As String
    Private _numregatecom As String
    Private _numregaterec As String
    Private _numregesc As Integer
    Private _obs As String
    Private _observacion As String
    Private _origenpersonal As Integer
    Private _pago As String
    Private _periodo As String
    Private _pNom As String
    Private _sNom As String
    Private _tablaafi As String
    Private _tipdig As String
    Private _tipodocumento As String
    Private _tipoformatoafiins As String
    Private _tipopersalud As String
    Private _tipotransporte As String
    Private _tipotraslado As String
    Private _ubigeoafi As String
    Private _ue As String
End Class

