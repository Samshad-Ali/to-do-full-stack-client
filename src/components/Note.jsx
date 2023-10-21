import React from "react";

const Note=({note})=>{
    const {title,description} = note;
    return(
        <div className="sm:w-1/2 min-h-[172px] w-full flex justify-between flex-col rounded-sm bg-white shadow-md shadow-gray-400 p-2">
         <div>
         <h5 className="font-bold text-lg text-gray-900 break-words">{title}</h5>
            <p className=" font-semibold text-gray-800 break-words">{description}</p>
            {
                note?.image?.url?
            <div className="w-full h-52 mt-4 rounded-sm">
                    <img className="w-full h-full object-cover rounded-sm" src={note.image.url} alt="" />:''
            </div>:''
            }
         </div>
            <div className="w-full flex justify-between items-center mt-2">
                <button className="px-4 p-1 bg-white border border-blue-800 rounded-sm font-semibold text-blue-800 transition-all hover:bg-blue-800 hover:text-white">Edit</button>
                <button className="px-4 p-1 bg-white border border-red-800 rounded-sm font-semibold text-red-800 hover:text-white hover:bg-red-800 transition-all">Delete</button>
            </div>
        </div>
    )
}

export default Note;