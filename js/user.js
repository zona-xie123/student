$(document).ready(function(){
	$( "#tabs" ).tabs();
	setTimeout(function(){
		$('.js-cell-title').addClass('is-selected')
		$('.kv .dots span').addClass('is-selected')
	}, 1000);
		 //faq_down
		 $('.faq-section .qa').each(function(i) {
		
			var _number = i;
			$(this).click(function() {
				$(this).toggleClass('active-qa')
					$('.answer').eq(_number).slideToggle(200);
			});
	});

// Split each word in the cell title into a span.
var $cellTitle = $('.js-cell-title');

// Wrap every letter in the cell title 
$cellTitle.each(function() {
  var $this = $(this);
  var letters = $this.text().split('');

  $this = $(this);
  $this.empty();

  $.each(letters, function(i, el) {
    $this.append($('<span class="text-split">')
      .append($('<span class="text-split__inner">')
        .text(el)));
  });

  // Dirty way of getting the whitespace
  var emptySplits = $this.find('.text-split__inner:contains( )');
  emptySplits.addClass('whitespace');
  emptySplits.parent().addClass('whitespace');

});
})