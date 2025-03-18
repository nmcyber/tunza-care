import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MdOutlineCall } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import MapComponent from "../shared/MapComponent";
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
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Say <span className="text-sky-700">Hello..!</span></h2>
          <ul className="space-y-6 ">
            <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg">
              <span className=" bg-[#50bfeb] text-white p-3 rounded-full">
                <MdOutlineLocationOn  size={'32'}/>
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
            <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg">
              <span className=" bg-[#60b360] text-white p-3 rounded-full">
              <MdMailOutline size={'32'} />
              </span>
              <div>
                <h4 className="text-sm text-gray-500">Email</h4>
                <p className="text-gray-700 font-medium">
                  loremipsum@email.com
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg">
              <span className=" bg-[#e06565] text-white p-3 rounded-full">
              <MdOutlineCall size={'32'}/>
              </span>
              <div>
                <h4 className="text-sm text-gray-500">Phone</h4>
                <p className="text-gray-700 font-medium">08 9387 6326</p>
              </div>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 w-48  bg-[#64cdf6]/60 text-white rounded-lg shadow-md hover:bg-blue-300">
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
