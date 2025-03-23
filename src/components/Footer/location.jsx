import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MdOutlineCall } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import MapComponent from "../shared/MapComponent";
import Typography from "../shared/Typography";
import { MapPin } from "lucide-react";
import { callIcon, mapPin, messageIcon } from "@/assets";
// import { bgMaps } from "@/assets";


const Location = () => {
//   const mapContainerStyle = {
//     width: "100%",
//     height: "300px",
//   };

//   const officeLocation = {
//     lat: -32.019704, // Replace with actual latitude
//     lng: 115.927773, // Replace with actual longitude
//   };



  return (
    <div className="bg-gray-100 py-5 ">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Contact Info Section */}
        <div className=" space-y-8">
          <div className=" grid place-items-start space-y-4 ">
        <Typography variant='subtitle'>Tunza</Typography>
          <Typography variant="h1" className=" mb-4" h1Parts={[ { text: 'Say', color: 'color1' }, { text: 'Hello..!', color: 'color2' } ]} />
          </div>
          <ul className="space-y-6 md:pr-8 ">
            <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-md">
              <span className=" bg-[#13668E33] p-3 rounded-md">
                <img src={mapPin} alt="Location Pin" size={32} className="" />
              </span>
              <div>
                <h4 className="text-sm text-gray-500">Address</h4>
                <p className="text-gray-700 font-medium">
                  6/15 Pattie St
                  <br />
                  Cannington WA 6107
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-md">
              <span className=" bg-[#30B99633] p-3 rounded-md">
              <img src={messageIcon} alt="mail icon" size={32} />
              </span>
              <div>
                <h4 className="text-sm text-gray-500">Email</h4>
                <p className="text-gray-700 font-medium">
                  loremipsum@email.com
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-md">
              <span className=" bg-[#FF990033] p-3 rounded-md">
              <img src={callIcon} alt="phone icon" size={32} />
              </span>
              <div>
                <h4 className="text-sm text-gray-500">Phone</h4>
                <p className="text-gray-700 font-medium">08 9387 6326</p>
              </div>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 w-48  bg-primary text-white rounded-md outline outline-transparent shadow-xl hover:outline-white hover:shadow-2xl hover:bg-primary/95">
            Contact Form
          </button>
        </div>

        {/* Google Map Section */}
        <div className="relative overflow-hidden rounded-lg shadow-md">

        < MapComponent />
        </div>
        {/* <div className="relative overflow-hidden rounded-lg shadow-md">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={officeLocation}
              zoom={15}
            >
              <Marker position={officeLocation} />
            </GoogleMap>
          </LoadScript>
        </div> */}
        
      </div>
    </div>
  );
};

export default Location;
