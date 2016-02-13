function jsf_ValidarDia(valor, mes, anio, mensaje, obligatorio){
	var sResp;
	
	if (jsf_Trim(valor.value) != ""){
		if(jsf_ValidarEntero(valor.value) == ""){
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
		}else{
			if(jsf_ValidarEntero(valor.value) > 0 && jsf_ValidarEntero(valor.value) <= 31){
				if(jsf_Trim(mes.value) != "" && jsf_Trim(anio.value) != ""){
					sResp = jsf_ValidarFecha(valor, mes, anio);
					//JEGD: se valida que la fecha no sea mayor que hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActual(valor, mes, anio);
						
					if(sResp == true){
						valor.style.backgroundColor = jsf_blanco();
						mes.style.backgroundColor = jsf_blanco();
						anio.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						valor.style.backgroundColor = jsf_rojo();
						mes.style.backgroundColor = jsf_rojo();
						anio.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{
					valor.style.backgroundColor = jsf_blanco(); 
					mensaje.innerHTML = ""
					return true;
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
			}
		}
	}else{			
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true;
		}		
	}
}
		
function jsf_ValidarMes(valor, dia, anio, mensaje, obligatorio){
	var sResp;
	if (jsf_Trim(valor.value) != ""){
		// valida el dato de la caja mes
		// Si fuera letra A la function devuelve un vacio ""
		if(jsf_ValidarEntero(valor.value) == ""){
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
		//caso contrario es un numero entero		
		}else{
			if(jsf_ValidarEntero(valor.value) > 0 && jsf_ValidarEntero(valor.value) <= 12){
			//Analizo si estan llenos todos los valores de la fecha
				if(jsf_Trim(dia.value) != "" && jsf_Trim(anio.value) != ""){
				//Analizo el Formato de la Fecha
					sResp = jsf_ValidarFecha(dia, valor, anio);
					// Si la informacion de la variable sResp == 0 es correcta la fecha
					//JEGD: se valida que la fecha no sea mayor que hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActual(dia, valor, anio);				
					if(sResp == true){
						dia.style.backgroundColor = jsf_blanco();
						valor.style.backgroundColor = jsf_blanco();
						anio.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						dia.style.backgroundColor = jsf_rojo();
						valor.style.backgroundColor = jsf_rojo();
						anio.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{ 
					valor.style.backgroundColor = jsf_blanco();
					mensaje.innerHTML = ""
					return true;
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
			}
		}
	}else{
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true; 				
		}				
	}
}

function jsf_ValidarAnio(valor, AnioInicio, AnioFin, dia, mes, mensaje, obligatorio){
	var sResp;
	if (jsf_Trim(valor.value) != ""){
		if(jsf_ValidarEntero(valor.value) == ""){
				//alert("No es numero");
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false
		}else{  //Caso contrario tiene un valor y es entero
		// Si es Valido es un año correcto
			if(jsf_ValidarEntero(valor.value) >= AnioInicio && jsf_ValidarEntero(valor.value) <= AnioFin){
				//alert("Es numero: "+jsf_ValidarEntero(valor.value));
				//si Tengo el dia y tengo el mes
				if(jsf_Trim(dia.value) != "" && jsf_Trim(mes.value) != ""){
					//Valido la Fecha completa
					sResp = jsf_ValidarFecha(dia, mes, valor);
					//alert("Validar Fecha: " + sResp);
					//JEGD: se valida que la fecha no sea mayor que hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActual(dia, mes, valor);
						
					if(sResp == true){
						dia.style.backgroundColor = jsf_blanco();
						mes.style.backgroundColor = jsf_blanco();
						valor.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						dia.style.backgroundColor = jsf_rojo();
						mes.style.backgroundColor = jsf_rojo();
						valor.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{ 
					valor.style.backgroundColor = jsf_blanco();
					mensaje.innerHTML = ""
					return true			
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false
			}
		}
	}else{
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true; 				
		}				
	}
}
//Funcion creada por Yeny Ramos 04/04/2008
function jsf_ValidarDiaVence(valor, mes, anio, mensaje, obligatorio){
	var sResp;
	
	if (jsf_Trim(valor.value) != ""){
		if(jsf_ValidarEntero(valor.value) == ""){
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
		}else{
			if(jsf_ValidarEntero(valor.value) > 0 && jsf_ValidarEntero(valor.value) <= 31){
				if(jsf_Trim(mes.value) != "" && jsf_Trim(anio.value) != ""){
					sResp = jsf_ValidarFecha(valor, mes, anio);
					//JEGD: se valida que la fecha no sea mayor que hoy
					//if(sResp == true) 
					//	sResp =jsf_ValidarFechaActual(valor, mes, anio);
						
					if(sResp == true){
						valor.style.backgroundColor = jsf_blanco();
						mes.style.backgroundColor = jsf_blanco();
						anio.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						valor.style.backgroundColor = jsf_rojo();
						mes.style.backgroundColor = jsf_rojo();
						anio.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{
					valor.style.backgroundColor = jsf_blanco(); 
					mensaje.innerHTML = ""
					return true;
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
			}
		}
	}else{			
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true;
		}		
	}
}
function jsf_ValidarMesVence(valor, dia, anio, mensaje, obligatorio){
	var sResp;
	
	if (jsf_Trim(valor.value) != ""){
		// valida el dato de la caja mes
		// Si fuera letra A la function devuelve un vacio ""
		if(jsf_ValidarEntero(valor.value) == ""){
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
		//caso contrario es un numero entero		
		}else{
			if(jsf_ValidarEntero(valor.value) > 0 && jsf_ValidarEntero(valor.value) <= 12){
			//Analizo si estan llenos todos los valores de la fecha
				if(jsf_Trim(dia.value) != "" && jsf_Trim(anio.value) != ""){
				//Analizo el Formato de la Fecha
					sResp = jsf_ValidarFecha(dia, valor, anio);
					// Si la informacion de la variable sResp == 0 es correcta la fecha
					//JEGD: se valida que la fecha no sea mayor que hoy
					//if(sResp == true) 
					//	sResp =jsf_ValidarFechaActual(dia, valor, anio);				
					
					if(sResp == true){
						dia.style.backgroundColor = jsf_blanco();
						valor.style.backgroundColor = jsf_blanco();
						anio.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						dia.style.backgroundColor = jsf_rojo();
						valor.style.backgroundColor = jsf_rojo();
						anio.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{ 
					valor.style.backgroundColor = jsf_blanco();
					mensaje.innerHTML = ""
					return true;
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
			}
		}
	}else{
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true; 				
		}				
	}
}

function jsf_ValidarAnioVence(valor, AnioInicio, AnioFin, dia, mes, mensaje, obligatorio){
	var sResp;
	if (jsf_Trim(valor.value) != ""){
		if(jsf_ValidarEntero(valor.value) == ""){
				//alert("No es numero");
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false
		}else{  //Caso contrario tiene un valor y es entero
		// Si es Valido es un año correcto
			if(jsf_ValidarEntero(valor.value) >= AnioInicio && jsf_ValidarEntero(valor.value) <= AnioFin){
				//alert("Es numero: "+jsf_ValidarEntero(valor.value));
				//si Tengo el dia y tengo el mes
				if(jsf_Trim(dia.value) != "" && jsf_Trim(mes.value) != ""){
					//Valido la Fecha completa
					sResp = jsf_ValidarFecha(dia, mes, valor);
					//alert("Validar Fecha: " + sResp);
					//JEGD: se valida que la fecha no sea mayor que hoy
					//if(sResp == true) 
					//	sResp =jsf_ValidarFechaActual(dia, mes, valor);
						
					if(sResp == true){
						dia.style.backgroundColor = jsf_blanco();
						mes.style.backgroundColor = jsf_blanco();
						valor.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						dia.style.backgroundColor = jsf_rojo();
						mes.style.backgroundColor = jsf_rojo();
						valor.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{ 
					valor.style.backgroundColor = jsf_blanco();
					mensaje.innerHTML = ""
					return true			
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false
			}
		}
	}else{
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true; 				
		}				
	}
}

//Funcion Relizada por Lenin Chiara Lopez 05022008
function jsf_ValidarDiaInscripcion(valor, mes, anio, mensaje, obligatorio){
	var sResp;
	
	if (jsf_Trim(valor.value) != ""){
		if(jsf_ValidarEntero(valor.value) == ""){
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
		}else{
			if(jsf_ValidarEntero(valor.value) > 0 && jsf_ValidarEntero(valor.value) <= 31){
				if(jsf_Trim(mes.value) != "" && jsf_Trim(anio.value) != ""){
					sResp = jsf_ValidarFecha(valor, mes, anio);
					//JEGD: se valida que la fecha no sea mayor que hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActual(valor, mes, anio);
						
					if(sResp == true){
						valor.style.backgroundColor = jsf_blanco();
						mes.style.backgroundColor = jsf_blanco();
						anio.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						valor.style.backgroundColor = jsf_rojo();
						mes.style.backgroundColor = jsf_rojo();
						anio.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{
					valor.style.backgroundColor = jsf_blanco(); 
					mensaje.innerHTML = ""
					return true;
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
			}
		}
	}else{			
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true;
		}		
	}
}
//Funcion Relizada por Lenin Chiara Lopez 05022008
function jsf_ValidarMesInscripcion(valor, dia, anio, mensaje, obligatorio){
	var sResp;
	if (jsf_Trim(valor.value) != ""){
		// valida el dato de la caja mes
		// Si fuera letra A la function devuelve un vacio ""
		if(jsf_ValidarEntero(valor.value) == ""){
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
		//caso contrario es un numero entero		
		}else{
			if(jsf_ValidarEntero(valor.value) > 0 && jsf_ValidarEntero(valor.value) <= 12){
			//Analizo si estan llenos todos los valores de la fecha
				if(jsf_Trim(dia.value) != "" && jsf_Trim(anio.value) != ""){
				//Analizo el Formato de la Fecha
					sResp = jsf_ValidarFecha(dia, valor, anio);
					// Si la informacion de la variable sResp == 0 es correcta la fecha
					//JEGD: se valida que la fecha no sea mayor que hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActual(dia, valor, anio);
					//LCL 05/02/2008: se valida que la fecha no sea mayor 2 meses de antiguedad con respecto a hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActualInscripcion(dia, valor, anio);
					if(sResp == true){
						dia.style.backgroundColor = jsf_blanco();
						valor.style.backgroundColor = jsf_blanco();
						anio.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						dia.style.backgroundColor = jsf_rojo();
						valor.style.backgroundColor = jsf_rojo();
						anio.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{ 
					valor.style.backgroundColor = jsf_blanco();
					mensaje.innerHTML = ""
					return true;
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false;
			}
		}
	}else{
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true; 				
		}				
	}
}
//Funcion Relizada por Lenin Chiara Lopez 31012008
function jsf_ValidarAnioInscripcion(valor, AnioInicio, AnioFin, dia, mes, mensaje, obligatorio){
	var sResp;
	if (jsf_Trim(valor.value) != ""){
		if(jsf_ValidarEntero(valor.value) == ""){
				//alert("No es numero");
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false
		}else{  //Caso contrario tiene un valor y es entero
		// Si es Valido es un año correcto
		//Codigo introducido, agregado +1 al parametro valor  31/01/2008 Lenin Chiara Lopez
		//para que pueda modificar F.Inscripcion de un año atras
		//if(jsf_ValidarEntero(valor.value) >= AnioInicio && jsf_ValidarEntero(valor.value) <= AnioFin){
				if(jsf_ValidarEntero((valor.value)+1) >= AnioInicio && jsf_ValidarEntero(valor.value) <= AnioFin){
				//alert("Es numero: "+jsf_ValidarEntero(valor.value));
				//si Tengo el dia y tengo el mes
				if(jsf_Trim(dia.value) != "" && jsf_Trim(mes.value) != ""){
					//Valido la Fecha completa
					sResp = jsf_ValidarFecha(dia, mes, valor);
					//alert("Validar Fecha: " + sResp);
					//JEGD: se valida que la fecha no sea mayor que hoy
					if(sResp == true) 
						sResp =jsf_ValidarFechaActual(dia, mes, valor);
						
					if(sResp == true){
						dia.style.backgroundColor = jsf_blanco();
						mes.style.backgroundColor = jsf_blanco();
						valor.style.backgroundColor = jsf_blanco();
						mensaje.innerHTML = "";
						return true;
					}else{
						dia.style.backgroundColor = jsf_rojo();
						mes.style.backgroundColor = jsf_rojo();
						valor.style.backgroundColor = jsf_rojo();
						mensaje.innerHTML = "";
						return false;
					}
				}else{ 
					valor.style.backgroundColor = jsf_blanco();
					mensaje.innerHTML = ""
					return true			
				}
			}else{
				valor.style.backgroundColor = jsf_rojo();
				mensaje.innerHTML = "";
				return false
			}
		}
	}else{
		if(obligatorio == 1){
			valor.style.backgroundColor = jsf_rojo();
			mensaje.innerHTML = "";
			return false; 				
		}else{
			valor.style.backgroundColor = jsf_ambar();
			mensaje.innerHTML = ""
			return true; 				
		}				
	}
}


function jsf_ValidarFecha(dia, mes, anio){
	if(jsf_ValidarEntero(mes.value) == 2){
		if(jsf_ValidarEntero(dia.value) == 29){
			//Si el resto es igual a Cero retorna Cero
			if(jsf_ValidarEntero(anio.value) % 4 == 0){							
				return true;
			}else{							
				return false;
			}
		}else if(jsf_ValidarEntero(dia.value) >= 1 && jsf_ValidarEntero(dia.value) < 29){						
			return true;
		}else{						
			return false;
		}
	}else if(jsf_ValidarEntero(mes.value) == 4 || 
		jsf_ValidarEntero(mes.value) == 6 ||
		jsf_ValidarEntero(mes.value) == 9 ||
		jsf_ValidarEntero(mes.value) == 11){
		if(jsf_ValidarEntero(dia.value) >= 1 && jsf_ValidarEntero(dia.value) < 31){						
			return true;
		}else{						
			return false;
		}
	}else if(jsf_ValidarEntero(mes.value) == 1 ||
			jsf_ValidarEntero(mes.value) == 3 ||
			jsf_ValidarEntero(mes.value) == 5 ||
			jsf_ValidarEntero(mes.value) == 7 ||
			jsf_ValidarEntero(mes.value) == 8 ||
			jsf_ValidarEntero(mes.value) == 10 ||
			jsf_ValidarEntero(mes.value) == 12){					
		if(jsf_ValidarEntero(dia.value) >= 1 && jsf_ValidarEntero(dia.value) < 32){						
			return true;
		}else{						
			return false;
		}
	}	
}

//JEGD: funcion creada para validar que la fecha de digitacion no sea mayor q la fecha de hoy
function jsf_ValidarFechaActual(dia, mes, anio){
	var Dia, Mes, Anio;
	Dia = document.getElementById("Dia");
	Mes = document.getElementById("Mes");
	Anio = document.getElementById("Anio");
	
	if(jsf_ValidarEntero(anio.value) > Anio.value) 
		return false;
		
	if((jsf_ValidarEntero(mes.value) > Mes.value) && (jsf_ValidarEntero(anio.value)==Anio.value)) 
		return false;
		
	if((jsf_ValidarEntero(dia.value) > Dia.value) && (jsf_ValidarEntero(mes.value)==Mes.value) && (jsf_ValidarEntero(anio.value)==Anio.value))
		return false;
		
	return true;
}
//LCL: funcion creada para validar que la fecha de digitacion(Fecha de Inscripcion) no sea mayor a 2 meses de la fecha de hoy
function jsf_ValidarFechaActualInscripcion(dia, mes, anio){
	var Dia, Mes, Anio;
	Dia = document.getElementById("Dia");
	Mes = document.getElementById("Mes");
	Anio = document.getElementById("Anio");
		//alert("Es numero: "+jsf_ValidarEntero(valor.value));
	if (jsf_ValidarEntero(anio.value) == Anio.value) 
		{
		if (jsf_ValidarEntero(mes.value) < Mes.value)
			{
			if (!(jsf_ValidarEntero((mes.value+1)) >= Mes.value) && (jsf_ValidarEntero(mes.value) <= Mes.value ))
				return false;
			}	
		}
	if (jsf_ValidarEntero(anio.value) < Anio.value)
	{
		if(jsf_ValidarEntero(mes.value) > Mes.value)
			{
			if (!(jsf_ValidarEntero((mes.value)+1) >= (12+Mes.value)) && (jsf_ValidarEntero(mes.value) < (12+Mes.value)))
				//alert("Es numero: "+jsf_ValidarEntero(mes.value)");
				return false;
			}
		if (jsf_ValidarEntero(mes.value) < Mes.value)
			{
			if (!(jsf_ValidarEntero((mes.value+1)) >= Mes.value) && (jsf_ValidarEntero(mes.value) <= Mes.value ))
				//alert("Es numero: "+jsf_ValidarEntero(mes.value)");
				return false;
			}	
	}
	return true;
	}
	
