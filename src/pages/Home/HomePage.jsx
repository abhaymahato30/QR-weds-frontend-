import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const images = [
    "https://images.unsplash.com/photo-1665960213508-48f07086d49c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBpbmRpbmF8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/635831548/photo/kanyadaan-ritual-in-a-maharashtrian-wedding-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=mKDuoNLj7O1ni9MsYLimlUN_yt9HGhpK8g0uY0Zdcys=",
    "https://media.istockphoto.com/id/2199992346/photo/groom-looking-at-brides-hands-at-wedding-ceremony.webp?a=1&s=612x612&w=0&k=20&c=_qzJEK8BSr2fnLkZZ5KgEYeJmraeqvSJsfL0VUO-ZtU=",
    "https://images.unsplash.com/photo-1697684459863-308b1c497ff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
  ];
  return (
    <div className="min-h-screen bg-[#fff2ec] flex items-center justify-center p-4 pt-18 font-sans md:pt-24">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden border border-[#e8d5d5]">
      {/* Top Border */}
      <div className="p-8 pt-0 pb-5 text-center">
        <img
          className="w-auto h-32 m-auto"
          src="https://i.ibb.co/jnmDqQR/horizontal-border-with-white-flower-rose-leaves-white-528213-940-removebg-preview.png"
          alt="border"
        />
        <h1 className="text-5xl text-[#8d4548] mb-1 font-medium">Raju</h1>
        <div className="text-2xl text-[#ca9687] mb-3">weds</div>
        <h1 className="text-5xl text-[#8d4548] font-medium">Neha</h1>
      </div>

      {/* Wedding Details */}
      <div className="border-t border-[#f0e0e0] mx-6" />
      <div className="px-6 pb-6 text-center">
        <h2 className="text-2xl text-[#5d4037] mb-1 font-medium">THE WEDDING</h2>
        <p className="text-lg text-[#8d6e63] mb-1">Friday, 18th April, 2025</p>
        <p className="text-lg text-[#8d6e63] mb-1">in the evening</p>
        <p className="text-xl text-[#5d4037] font-medium">JUT Campus, Ranchi</p>
      </div>

      {/* Upload Photo Section */}
      <div className="border-t border-[#f0e0e0] mx-6" />
      <div className="p-6 pb-0 pt-1 text-center">
        <h3 className="text-3xl text-[#8d4548] mb-1 font-medium">𝓢𝓱𝓪𝓻𝓮 𝓨𝓸𝓾𝓻 𝓟𝓱𝓸𝓽𝓸𝓼</h3>
        <p className="text-[#8d6e63] mb-2">Upload and view photos from the wedding day</p>
    
        <Link to="https://waldophotos.app.link/3VtkJv8oFSb">
   <button className="px-8 py-2 bg-[#eec4b8] text-[#8d4548] rounded-full transition-colors text-base shadow-sm">
    Upload Photo
  </button>
</Link>
      </div>

      {/* Wedding Gallery */}
      <div className="p-4 bg-white">
      <div className="grid grid-cols-2 gap-3">
      {images.map((imageUrl, index) => (
        <div key={index} className="rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img
            src={imageUrl}
            alt={`Wedding moment ${index + 1}`}
            className="w-full h-32 object-cover"
          />
        </div>
      ))}
    </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-4 text-center text-black text-sm">
        We look forward to celebrating with you!
      </div>
    </div>
  </div>
  );
};

export default HomePage;
