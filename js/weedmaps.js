map.on('load', () => {
    map.loadImage('https://cdn2.iconfinder.com/data/icons/agriculture-1/512/cannabis-128.png', (error, image) => {
        if (error) throw error;
        map.addImage('potleaf', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.75641351938249,33.66667087657421]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "potleaf",
                "icon-size": 0.25
            }
        });
    });
});
