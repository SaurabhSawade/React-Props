import React from "react";
 
function Card({title,description,image}) {
    
    return (
      <> 
      <div>
        <div className="max-w-xs bg-white rounded-lg shadow-lg border-1 border-transparent bg-gradient-to-r p-[1px] from-pink-500 via-red-400 to-yellow-800">
        <div className="bg-black p-10 rounded-lg">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />}
        <h2 className="mt-2 text-2xl font-semibold text-purple-800">{title}</h2>
        <p className="mt-2 text-purple-600 ">{description}</p>
      </div>
    </div>
    </div>
      </>
    )
  }
  export default Card