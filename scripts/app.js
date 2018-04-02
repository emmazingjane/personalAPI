console.log("Sanity Check: JS is working!");
var template;
var $placesList;
var allPlaces = [];
var $booksList;
var allBooks = [];


$(document).ready(function(){

	$placesList = $('#placesTarget');
	$booksList = $('#bookTarget');

  $.ajax({
    method: 'GET',
    url: '/api/places',
    success: handleSuccess,
    error: handleError
  });


  // $.ajax({
  //   method: 'GET',
  //   url: '/api/books',
  //   success: showSuccess,
  //   error: showError
  // });


function getPlacesHtml(places) {
  return `<hr>
          <p>
          	<b>${places.city}</b>
      
            <br>
          `;
}



});