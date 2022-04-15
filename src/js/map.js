(function () {
  var LatMarker = new google.maps.LatLng(55.737125,37.6888405),
      LatCenter = new google.maps.LatLng(55.7365,37.688),
      googlemap = new google.maps.Map(document.getElementById('map'),
      {
        center: LatCenter,
        zoom: 16,
        scrollwheel: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    );
    var contentString =
        '<div id="content">'+
        '<b id="siteNotice" style="color:#0232f4">*selected address*</b>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
     content: contentString
   });
    function customIcon (opts) {
      return Object.assign({
        path: 'M13.714 11.429c0-2.518-2.054-4.571-4.571-4.571s-4.571 2.054-4.571 4.571 2.054 4.571 4.571 4.571 4.571-2.054 4.571-4.571zM18.286 11.429c0 1.089-0.125 2.214-0.589 3.196l-6.5 13.821c-0.375 0.786-1.196 1.268-2.054 1.268s-1.679-0.482-2.036-1.268l-6.518-13.821c-0.464-0.982-0.589-2.107-0.589-3.196 0-5.054 4.089-9.143 9.143-9.143s9.143 4.089 9.143 9.143z',
        fillColor: '#0058a3',
        fillOpacity: 1,
        strokeColor: '#0058a3',
        strokeWeight: 1,
        scale: 1.3,
      }, opts);
    };
    var marker = new google.maps.Marker({
          position: LatMarker,
          map: googlemap,
          title:"street # 1 (custom address)",
          icon: customIcon()
          // icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
      });
    // infowindow.open(map, marker);
    marker.addListener('click', function() {infowindow.open(map, marker);});
}());