import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [115.9358737, -32.0160237],
      zoom: 16,
    });
    new maplibregl.Marker()
      .setLngLat([115.9358737, -32.0160237])
      .addTo(map);
  },);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;
