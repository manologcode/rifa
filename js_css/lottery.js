appDataIni={'nIni':1 , 'nEnd' : 1000, 'speed': 1 , 'round' : [] };

var numberElement=0

var sonidoclick = $("#audio1")[0];
var j=0;

var Lottery={

	ini: function(){
		appData=Board.read_localStorage();
		$('#nIni').val(appData['nIni']);
		$('#nEnd').val(appData['nEnd']);
		$('#speed').val(appData['speed']);

		Board.initElement();
		Board.drawElement();
		Lottery.drawNumber();

	},
	drawNumber:function(){
		numberElement=$('#nEnd').val().length;
		$('.marcador').detach();
		for(i=1;i<=numberElement;i++){
			Board.drawElementDinamic('id'+i);
		}
	},

	startLotery:function(){
		Lottery.drawNumber();
		nmax=parseInt($('#nEnd').val());
		nmin=parseInt($('#nIni').val());
		premio=Math.floor( (Math.random() * (nmax - nmin + 1) )+ nmin );
		npremio=premio.toString().split("").reverse()

		for(i=1;i<=numberElement;i++){
			value=npremio[i-1] ? npremio[i-1] : 0;
			Board.animaElement(i,value);
		}

	}
};

var Board={

		initElement: function() {
			    dialog = $( "#dialog-form" ).dialog({
			      autoOpen: false,
			      modal: true,
						position: {
							my: "left top",
							at: "left top",
							of: window,
							collision: "none"
						},
			      close : function(){
								Lottery.drawNumber();
								appData['nIni']=$('#nIni').val();
								appData['nEnd']=$('#nEnd').val();
								appData['speed']=$('#speed').val();
								Board.update_localStorage()
              	}
			    });

		},
		drawElement:function(){
			$("#tablero").append('<a href="#" id="btnOpenMenu"><img src="images/options.png"></a>')
			$("#btnOpenMenu").on("click", function(){Board.showFormProyect(); });
			$("#tablero").append('<a href="#" id="btnStart"><img src="images/start.png"></a>')
			$("#btnStart").on("click", Lottery.startLotery);


		},
		drawElementDinamic:function(idElement){
			$("#counter").prepend('<div id="'+idElement+'" class="marcador">0</div>')
		},

		animaElement:function(n,valueEnd) {
			j=0;
			end=(n*100)+valueEnd
		    $('#id'+n).animate({
		        Counter: end
		    }, {
		        duration: $('#speed').val() * 1000+(n*1000 * $('#speed').val()),
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now).toString().slice(-1));
		        },
		        complete: function(){
		        	j++
		        	sonidoclick.play();

		        }
		    });
		},

		read_localStorage:function(){
			//localStorage.canvaspostit="";
		    localStorage.appData = localStorage.appData || JSON.stringify(appDataIni);
		    return JSON.parse(localStorage.appData);
		},

		update_localStorage:function(){
			localStorage.appData = JSON.stringify(appData);
		},

		showFormProyect:function(){
			dialog.dialog( "open" );
		},

};



$(function() {
	Lottery.ini();
});
