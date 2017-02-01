
 

//when city is entered, picture of that city is now the background//


//need to clear out the previous city when the other city is enetered and update button is clicked//


//user input to be stored with var city

 $('.entry').on('submit', function(event){
  e.preventDefault();
  showCity();
})


var city = ['NYC', 'SF', 'LA', 'ATX', 'SYD']



switch (cityPic) {
  case 'NYC':
    $('body').attr('class','nyc');
    break;
  case 'SF':
    $('body').attr('class','sf');
    break;
  case 'LA':
    $('body').attr('class','la');
    break;
  case 'ATX':
    $('body').attr('class','austin');
    break;
  case 'SYD':
    $('body').attr('class','sydney');
    break;
  default:
}


