jQuery(document).ready(function(){
	
	/* 
	var srcValue=jQuery('#imgHolder img').attr('src');

       /*   alert(srcValue); 
	
	
	jQuery('#imgHolder img').on('click',function(){
		
		jQuery('#imgHolder img').attr('src', 'images/blue.png')
		
		
	}); */
	
	jQuery('#colorsSelector .colorItem.colorBlue').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/blue.png').fadeIn(200);
		
	});
	
	jQuery('#colorsSelector .colorItem.colorWhite').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/white.png').fadeIn(200);
		
	});
	
	jQuery('#colorsSelector .colorItem.colorRed').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/red.jpg').fadeIn(200);
		
	});
	
	jQuery('#colorsSelector .colorItem.colorOrange').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/orange.jpg').fadeIn(200);
		
	});
	
	jQuery('#colorsSelector .colorItem.colorWhitePure').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/whitePure.png').fadeIn(200);
		
	});
	
	 jQuery('#colorsSelector .colorItem.colorGraphite').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/Graphite.png').fadeIn(200);
		
	});
	
	jQuery('#colorsSelector .colorItem.colorBlack').on('click',function(){
		
		jQuery('#imgHolder img').fadeOut(200).attr('src', 'images/black.png').fadeIn(200);
		
	});
});
