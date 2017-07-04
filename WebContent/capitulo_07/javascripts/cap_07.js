//modo 1 (requisição AJAX)

var servico1 = "http://livro-capitulo07.herokuapp.com/hello";

$.get(servico1, function(data) {
	alert(data);
});

//modo 2

var parametros2 = {nome: "Caro Leitor"};
var servico2 = "http://livro-capitulo07.herokuapp.com/hello";

$.get(servico2, parametros2, function(data) {
	alert(data);
});

//modo 3

var parametros3 = {nome: "Caro Leitor Novo"};
var servico3 = "http://livro-capitulo07.herokuapp.com/hello";

var $xhr = $.get(servico3, parametros3);
$xhr.done(function(data) {
	alert(data);
});

//modo 4

var parametros4 = {nome: "Caro Leitor Esperto"};
var servico4 = "http://livro-capitulo07.herokuapp.com/hello";
$.get(servico4, parametros4)
	.done(function(data) {
		alert(data);
});

//modo 5

var servico5 = "http://livro-capitulo07.herokuapp.com/error";
$.get(servico5)
	.fail(function(data) {
		alert(data.responseText);
});

//JSON

var livro = {
		  "autor" : "Plínio Balduino",
		  "titulo" : "Dominando JavaScript com jQuery",
		  "ano" : 2013,
		  "editora" : "Casa do Código",
		  "usa_drm" : false,
		  "capitulos": [
		    "Apresentação",
		    "Refazendo uma loja virtual",
		    "Adicionando JavaScript",
		    "Um JavaScript diferente em cada navegador",
		    "Simplifique com jQuery"
		  ]
		};

console.log(livro.titulo);
console.log(livro.capitulos[2]);

//juntando JSON e AJAX
var servico6 = "http://api.postmon.com.br/v1/cep/";
var cep = "04101-300";

function onCepDone(data) {
	console.log("A Casa do Código fica na " + data.logradouro);
}

$.getJSON(servico6 + cep)
.done(onCepDone);

function onCepError(error) {
	console.log("Erro: " + error.statusText)
};

var cepErrado = "12345-789";

$.getJSON(servico6 + cepErrado)
.done(onCepDone)
.fail(onCepError);

//verificando CEP digitado

$(function() {
	
// ao dar o enter
//	function onCepEditKeydown(event) {
//		if(event.which === 13) {
//			var cep = $("#cep").val();
//			var servico = "http://api.postmon.com.br/v1/cep/";
//			$.getJSON(servico + cep)
//			.done(onCepDone)
//			.fail(onCepError);
//		}
//	}
//	
//	$("#cep").keydown(onCepEditKeydown);
	
	//ao sair o foco (focusout)
	function onCepFocusOut() {
		var cep = $("#cep").val();
		var servico = "http://api.postmon.com.br/v1/cep/";
		$.getJSON(servico + cep)
		.done(onCepDone)
		.fail(onCepError);
	}
	
	$("#cep").focusout(onCepFocusOut);
	
});
