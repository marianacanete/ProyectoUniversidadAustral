  $(function(){
			$("[data-toggle='tooltip']").tooltip();    	
			$("[data-toggle='popover']").popover();   
			$('.carousel').carousel({
				interval:2000
			});
			$('#reserva').on('show.bs.modal', function(e){
				console.log('el modal se esta mostrando')

				$('#reservaBtn').removeClass('btn-danger');
				$('#reservaBtn').addClass('btn-primary');
				$('#reservaBtn').prop('disabled',true);
			});
			$('#reserva').on('shown.bs.modal', function(e){
				console.log('el modal se mostró')

				$('#reservaBtn').removeClass('btn-primary');
				$('#reservaBtn').addClass('btn-danger');
				$('#reservaBtn').prop('disabled',false);
			
			});
			$('#reserva').on('hide.bs.modal', function(e){
				console.log('el modal se oculta')
			});
			$('#reserva').on('hidden.bs.modal', function(e){
				console.log('el modal se ocultó')
			});
  });
