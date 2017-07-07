
$(function(){
	
	function listaCidadesCPTEC(){		
		var servico = "http://servicos.cptec.inpe.br/XML/listaCidades?city=sao paulo";
		
		$.ajax({
	        url: servico,
	        dataType: 'jsonp',
	        crossDomain: true,
	        //jsonp: false,
	        //jsonpCallback: 'jsonCallback',
	
	        success: function(){
	        	console.log("success");
	        },
	        
			error: function(xhr, status, error) {
				console.log(xhr.status + " / " + status + " / " + error);
	        }
	    });
		
	}
	
	function jsonCallback(){
		console.log("callback");
	}
	
//	$.ajax({
//		type: "GET",
//        url: servico,
//        crossOrigin: true,
//        crossDomain: true,
//        jsonp: true,
//        dataType: "jsonp xml",
//        contentType: "text/xml; charset=utf-8",
//        async: false,
//
//        success: function(){
//        	console.log("success");
//        },
//        
//		error: function(xhr, status, error) {
//			console.log(xhr.status + " / " + status + " / " + error);
//        }
//    });
	
	
//	function myCallback(response){
//	    alert(response.data);
//	}
		
//	$.getJSON(servico, function (data) {
//	    console.log(data);
//	});
		
//		$.ajax({
//	        url: servico,
//	        dataType: "jsonp",
//	        crossDomain: true,
//	        contentType: "application/json",
//	        success: function(data) {
//	            console.log("ok");
//	        }
//	    });
			
//		$.ajax({
//		    type: 'POST',
//		    crossDomain: true,
//		    url: servico,
//		    success: function (responseData, textStatus, jqXHR) {
//		        console.log("foi");
//		    },
//		    error: function (responseData, textStatus, errorThrown) {
//		        alert('ñ foi.');
//		    }
//		});
		
//		$.ajax({
//		    url: servico,
//		    type: "post",
//		    data: "xml",
//		    cache: false,
//		    async: false,
//		    dataType: "jsonp",
//		    jsonpCallback: "resultado",
//		    success: function( data, textStatus, jqXHR ) {
//		        html = data;
//		    }
//		});
		
//		$.get(servico, function(data){
//			console.log("ok");
//		});
		
//		$.ajax({
//		     type : "GET",
//		     dataType : "jsonp",
//		     url : servico,
//		     success: function(data){
//		    	 console.log("ok");
//		     }
//		});
		
//		$.ajax({
//			url: servico,
//			jsonp: "callback",
//			dataType: "jsonp",
//			success: function( response ) {
//		        console.log( "ok" ); // server response
//		    }
//        });
		
//		$.ajax({
//            type: "POST",
//            url: servico,
//            dataType: "jsonp",
//            success: function () {
//                alert("ok");
//            },
//            error: function () {
//                alert("Ocorreu um erro inesperado durante o processamento.");
//            }
//        });
//	}
	
	listaCidadesCPTEC();
	
	function cep(){
		var cepGet = "13253032";
		$.ajax({
	        url: "http://correiosapi.apphb.com/cep/"+cepGet,
	        dataType: "jsonp",
	        crossDomain: true,
	        contentType: "application/json",
	        success: function(data) {
	            $("#results").html("****** Resultado ******");
	            $.each(data, function(index, obj) {
	                $("#results").append(""+index+": "+obj);
	            });
	            console.log("ok");
	        }
	    });
	}
	
	//cep();
	
});