$(function(){
	
	//var_estados_cidades (array) está no arquivo var_estados_cidades.js

	function lerEstadosCidades(){
		for(var i = 0; i < 27; i++){
			var estado = var_estados_cidades[i];
			console.log(estado.sigla);
			console.log(estado.nome);
			var cidades = estado.cidades;
			for(var j = 0; j < cidades.length; j++){
				console.log(cidades[j]);
			}
		}
	}
	
	
	//lerEstadosCidades();
	
	function carregarComboEstados(){
		$('#estados').empty();
				
		var $estados = $('#estados');
		
		for(var i = 0; i < 27; i++){
			var estado = var_estados_cidades[i];
			
			$estados.append("<option value = '" + i + "'>" + estado.nome + "</option>");
		}
		
		carregarComboCidades();
	}
	
	carregarComboEstados();
	
	function carregarComboCidades(){
		$('#cidades').empty();
		var $cidades = $('#cidades'); 
		
		var value_estado = $("#estados").val();
		
		var estado = var_estados_cidades[value_estado];
		
		var cidades = estado.cidades;
		
		for(var i = 0; i < cidades.length; i++){
			$cidades.append("<option value = '" + i + "'>" + cidades[i] + "</option>");
		}
		
	}
	
	$("#estados").change(carregarComboCidades);
	
	function enviarFormulario(){
		var estado = $("#estados :selected").text();
		var cidade = $("#cidades :selected").text();
		
		alert("Estado: " + estado + "\nCidade: " + cidade);
	}
	
	$("#form").submit(enviarFormulario);
	
});