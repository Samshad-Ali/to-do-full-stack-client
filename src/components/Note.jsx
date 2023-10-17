import React from "react";

const Note=()=>{
    return(
        <div className="sm:w-96 w-full flex flex-col gap-1 rounded-sm bg-white shadow-md shadow-gray-400 p-2">
            <h5 className="font-bold text-lg text-gray-900 break-words">title</h5>
            <p className=" font-semibold text-gray-800 break-words">description..d..</p>
            <div className="w-full h-52 rounded-sm">
                <img className="w-full h-full object-cover rounded-sm" src="https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="w-full flex items-center justify-between mt-2">
                <button className="px-4 p-1 bg-white border border-blue-800 rounded-sm font-semibold text-blue-800 transition-all hover:bg-blue-800 hover:text-white">Edit</button>
                <button className="px-4 p-1 bg-white border border-red-800 rounded-sm font-semibold text-red-800 hover:text-white hover:bg-red-800 transition-all">Delete</button>
            </div>
        </div>
    )
}

export default Note;