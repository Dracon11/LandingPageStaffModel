$(function(){

	$('#mc-embedded-subscribe').click(function(){

		if($('#mce-EMAIL').val()=='')
		{
			$('#alert-error').removeClass('hidden').addClass('show');
		} 
		else 
		{

				//$('#alert-exito').removeClass('hidden').addClass('show');
				//$('#alert-error').removeClass('show').addClass('hidden');


			if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( $('mce-EMAIL').val() )){
				$('#alert-error').removeClass('show').addClass('hidden');

				$('#alert-exito').removeClass('hidden').addClass('show');

				$('#first-to-try').removeClass('show').addClass('hidden');

				$('#mc-embedded-subscribe-form').removeClass('show').addClass('hidden');

			} 
			else 
			{
				$('#alert-exito').removeClass('hidden').addClass('show');
			}	
		}

	});
});