var $ul = $('.items-list'),
    $clear = $('#refresh');


$(document).ready(function(){
	//add items with enter button
	$('#addarea').keyup(function(event){
		if(event.keyCode == 13){
			event.preventDefault();
			var item = $('#addarea').val();
		var text = '<li class="items active"><span>'+item+'</span><div class="item-remove"><span><i class="fa fa-trash"></i></span></div>'+'<div class="item-bought"><span><i class="fa fa-check"></span></div></li>';
		$('.items-list').append(text);
		$('#addarea').val('');
		}
	});

	//add items by clicking cart icon
	$('#submit-item').on('click', function(){
        var item = $('#addarea').val();
        var text = '<li class="items active"><span>'+item+'</span><div class="item-remove"><span><i class="fa fa-trash"></i></span></div>'+'<div class="item-bought"><span><i class="fa fa-check"></span></div></li>';
        $('.items-list').append(text);
        $('#addarea').val('');
    });

    //remove items by clicking trash can icon
    $(document).on('click','.item-remove', function(){
        $(this).closest('li.items').fadeOut(400);
    });

    //mark items as bought by clicking checkmark
    $(document).on('click','.item-bought',function(){
        $(this).closest('li.items').removeClass('active');
        $(this).closest('li.items').addClass('bought');
        
    });

})

    $clear.click(function(){
    $ul.empty();
    });
