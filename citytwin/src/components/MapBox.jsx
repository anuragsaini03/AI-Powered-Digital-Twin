import {
  MapPin,
  Home,
  Trees,
  Building2,
  Droplets,
  AlertTriangle,
} from "lucide-react";

export default function MapBox({ height = "420px" }) {
  return (
    <div
      className="map-container"
      style={{ height }}
    >
      <div className="map-toolbar">
        <button className="map-tool active">Map</button>
        <button className="map-tool">Satellite</button>
      </div>

      <div className="map-roads">
        <div className="road road-one"></div>
        <div className="road road-two"></div>
        <div className="road road-three"></div>
      </div>

      <div className="map-location location-one">
        <Home size={17} />
      </div>

      <div className="map-location location-two">
        <Building2 size={17} />
      </div>

      <div className="map-location location-three warning-marker">
        <AlertTriangle size={17} />
      </div>

      <div className="map-location location-four tree-marker">
        <Trees size={17} />
      </div>

      <div className="map-location location-five water-marker">
        <Droplets size={17} />
      </div>

      <div className="map-label label-one">
        Main Road
      </div>

      <div className="map-label label-two">
        Ward 12
      </div>

      <div className="map-label label-three">
        Water Issue
      </div>

      <div className="map-controls">
        <button>+</button>
        <button>−</button>
      </div>
    </div>
  );
}
