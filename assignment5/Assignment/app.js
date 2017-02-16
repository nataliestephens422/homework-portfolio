//wait for the DOM elements to load before executing - this means not to load the js elements before the html elements have loaded.
$(document).ready(function() {
  //prevent the submit button from refreshing the page - this prevents the page from refreshing everytime the user clicks submit and it keeps the current picture of that city on it until they enter a new one.
  $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization - this allows the user to type in variations of each city, and abbreviations.
    var city = $('#city-type').val();
    $('#city-type').val(''); //clear input field on submission
    city = city.toLowerCase().trim();  //converts input to lowercase and removes whitespace from both sides
    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(city === 'new york city' || city === 'nyc' || city === 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (city === 'austin' || city === 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city === 'los angeles' || city === 'la' || city === 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city === 'sydney' || city === 'syd') {
      $('body').attr('class','sydney');
    }
    else {
      $("#error").html("<p>Please enter a different city!</p>"); //this shows an error message stating that the city the user chose isn't an option and to enter a different city.
    }
  });
});
