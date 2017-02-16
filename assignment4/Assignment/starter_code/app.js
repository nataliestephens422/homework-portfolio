$(document).ready(function() { //this is the function for the document
  $('.read-more').click(function(){ //when the function is clicked, read-more will "slide-down"
    $('#show-this-on-click').slideDown();
    $('.read-more').hide();//when the function is clicked again, read more will hide or slide back up
    $('.read-less').show();
    event.preventDefault();
  });
  $('.read-less').click(function(){
    $('#show-this-on-click').slideUp();  //when read more is clicked, the info will slide down
    $('.read-less').hide();  //when it is clicked again, it will clide back up and hide
    $('.read-more').show();
    event.preventDefault();
  });
  $('.learn-more').click(function(){
    $('#learn-more-text').slideDown();  
    $('.learn-more').hide();
    event.preventDefault();
  });
});
