import React, { useState } from 'react';
import Mapquest from '../components/Mapquest';
import MyLocation from '../components/MyLocation';
import SearchMap from '../components/SearchMap';


function Map() {
  //component state
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [markers, setMarkers] = useState([]);

  //fijar el centro del mapa 
  const setCenter = (lat, lng) => {
    setLat(lat);
    setLng(lng);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat, lng), 12);
  };

  //crea el marcador 
  const addMarker = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat, lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position: 'right',
        type: 'marker',
        icon: {
          primaryColor: '#1373F6',
          secondaryColor: '#2679EA',
          size: 'md'
        }
      }
    )
      .addTo(window.L.mapquest.Map.getMap('map'));

    const copyMarkers = markers.slice(0);

    copyMarkers.splice(0, 0, marker);   //copyMarkers.push(marker);
    setMarkers(copyMarkers);
  };


  //esto borraria los marcadores ya marcados, pero no se si es buena idea borrarlos todavia
  const clearMarkers = () => {
    markers.forEach(marker => {
      window.L.mapquest.Map.getMap('map').removeLayer(marker);
    });

    //limpiar state
    setMarkers([]);
  };


  //lo que veo por pantalla
  return (
    <div className="container-fluid">
      <div>
        <div className="col-sm-5">
          <SearchMap setCenter={setCenter} addMarker={addMarker} clearMarkers={clearMarkers} />
        </div>
        <div className="col-sm-5" className="mr-12" >
          <MyLocation setCenter={setCenter} addMarker={addMarker} />
        </div>
      </div>

      <Mapquest
        height="60vh"
        width="100%"
        center={[lat, lng]}
        tileLayer={'map'} //map o dark
        zoom={12}
        apiKey="DU0Iw1t8ZHPClYX7uXXhlYpUPGScKGUk"
      />
    </div>

  );
}

export default Map;
