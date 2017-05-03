mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaG55a2FtcCIsImEiOiJjajI3dmd5cTEwMDFmMzFvYWw3ZmszejNrIn0.vxbC2YRK2ywRvqLVbBj11w';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 13,
  center: [-117.830, 33.682]
});

map.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
}));

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}
