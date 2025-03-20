import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    new maplibregl.Map({
      container: "map",
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [0, 0],
    //   center: [-32.01577, 115.9363],
      zoom: 2,
    });
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;
