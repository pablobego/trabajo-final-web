<%@ Page Language="VB" AutoEventWireup="false" CodeFile="default.aspx.vb" Inherits="atenciones_login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <title>Módulo PCPP</title>
    <%--INICIO ZP--%>
    <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet" />
    <link href="css/font-awesome.min.css" type="text/css" rel="stylesheet" />
    <link href="css/AdminLTE.css" type="text/css" rel="stylesheet" />
    
    <meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR" /> 
    <meta content="Visual Basic .NET 7.1" name="CODE_LANGUAGE" />
    <meta content="JavaScript" name="vs_defaultClientScript" />

    <link href="css/dataTables/dataTables.bootstrap.css" type="text/css" rel="stylesheet" />
    <link href="css/datepicker/datepicker3.css" type="text/css" rel="stylesheet" />
    <link href="css/chosen.min.css" type="text/css" rel="stylesheet" />
    <link href="css/chosen-bootstrap.css" type="text/css" rel="stylesheet" />

    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/jquery-ui-1.10.3.js" type="text/javascript"></script>  
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/Admin.app.js" type="text/javascript"></script>

</head>
<body class="bg-black" >


    <div class="form-box" id="login-box">
        <div class="header">Módulo</div>
        <form  method="post" runat="server" id="login">
            <div class="body bg-gray">
                <div class="alert alert-danger alert-dismissable" ID="divMensaje" runat="server" visible="False">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <b>Alerta: </b> <asp:Label ID="lblMensaje" runat="server" Text="Label" ></asp:Label> 
                </div>
                <div class="form-group">
                    <asp:TextBox   ID="userid" runat="server" class="form-control" placeholder="Usuario"></asp:TextBox>
                </div>
                <div class="form-group">
                    <asp:TextBox  ID="password" runat="server" class="form-control" 
                        placeholder="Contraseña" TextMode="Password" Visible="False"></asp:TextBox>
                </div>          
                
            </div>
            <div class="footer">                                                               
                <button type="submit"  runat="server" id="btnIngresar"  class="btn bg-olive btn-block">Ingresar</button>  
                
                    
                <%--<p><a href="#">Olvi</a></p>
                    
                <a href="register.html" class="text-center">Register a new membership</a>--%>
            </div>
        </form>
    </div>

  
</body>
</html>
