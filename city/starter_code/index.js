
 

//when city is entered, picture of that city is now the background//


//need to clear out the previous city when the other city is enetered and update button is clicked//


//user input to be stored with var city

 $('.entry').on('submit', function(event){
  event.preventDefault();
  showCity();
})

function showCity () {
    var userEntry = $('#city-type').val();

    var newYork = ["New York", "New York City", "NYC"];
    var sanFran = ["San Francisco", "SF", "Bay Area"];
    var losAngeles = ["Los Angeles", "LA", "LAX"];
    var austin = ["Austin", "ATX"];
    var sydney = ["Sydney", "SYD"];

    //console.log(userEntry);

    if(userEntry == newYork; || userEntry == newYork; || userEntry == newYork; ) {
        $('body').css('background','url(../images/nyc.jpg)');
     } else if(userEntry == sanFran; || userEntry == sanFran; || userEntry == sanFran;) {
        $('body').css('background','url(../images/sf.jpg)');
     } else if(userEntry == losAngeles; || userEntry == losAngeles; || userEntry == losAngeles;) {
        $('body').css('background','url(../images/la.jpg)');
     } else if(userEntry == austin; || userEntry == austin;) {
        $('body').css('background','url(../austin.jpg)');
     } else if(userEntry == sydney; || userEntry == sydney;) {
        $('body').css('background','url(../images/sydney.jpg)');
     }

};


