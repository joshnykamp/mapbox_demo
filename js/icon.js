dataUrl = 'https://wanderdrone.appspot.com/';
map.on('load', function() {
  window.setInterval(function() {
    map.getSource('drone').setData(dataUrl || 'https://wanderdrone.appspot.com/');
  }, 1000)

  map.addSource('drone', {type: 'geojson', data: dataUrl || 'https://wanderdrone.appspot.com/'});
  map.addLayer({
    "id": "drone",
    "type": "symbol",
    "source": "drone",
    "layout": {
      "icon-image": "rocket-15"
    }
  });
});

map.scrollZoom.enable();
