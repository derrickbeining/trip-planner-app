  // BULMA NAVBURGER JS /////////////////////////

  document.addEventListener( 'DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call( document.querySelectorAll( '.navbar-burger' ), 0 );

    // Check if there are any nav burgers
    if ( $navbarBurgers.length > 0 ) {

      // Add a click event on each of them
      $navbarBurgers.forEach( function ( $el ) {
        $el.addEventListener( 'click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById( target );

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle( 'is-active' );
          $target.classList.toggle( 'is-active' );

        } );
      } );
    }

  } );

// Google Map Load ///////////////////////////////

  function initialize_gmaps () {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng( 40.705189, -74.009209 );
    // set the map options hash
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById( "map-canvas" );
    // initialize a new Google Map with the options
    var map = new google.maps.Map( map_canvas_obj, mapOptions );
    // Add the marker to the map
    var marker = new google.maps.Marker( {
      position: myLatlng,
      title: "Hello World!"
    } );
    // Add the marker to the map by calling setMap()
    marker.setMap( map );
  }

  $( document ).ready( function () {
    initialize_gmaps();
  } );

  ////////////////////////////////////////////////////
