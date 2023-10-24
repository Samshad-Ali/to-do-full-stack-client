import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../utils/axiosClient";
import { setLoading, setRefresh } from "../redux/slices/noteSlice";
import { useState } from "react";

const Note=({note})=>{
    const [edit,setEdit] = useState(false);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const {title:t,description:desc,_id} = note;
    const loading = useSelector(state=>state.noteReducer.loading);
  const refresh = useSelector(state=>state.noteReducer.refresh);

    const dispatch=useDispatch();
    // ---------- delete btn-----------------
    const handleDeleteBtn = async(id)=>{
        try {
            dispatch(setLoading(true))
            dispatch(setRefresh(!refresh))
            const response = await axiosClient.delete(`/note/delete/${id}`);
            toast.success(response.data.result)
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
            toast.error(error.message)
        }
    }

    // ----------edit and save btn--------------------
    const handleSaveBtn=async(id)=>{
        try {
            dispatch(setLoading(true))
            dispatch(setRefresh(!refresh))
            const response = await axiosClient.put(`/note/update/${id}`,{title,description})
            if(response.data.statusCode===201){
                setEdit(false)
                setLoading(false)
                return toast.success(response.data.result)
            }
            toast.error(response.data.result)
            dispatch(setLoading(false))
        } catch (error) {
            toast.error(error.message)
        }finally{
            setTitle('')
            setDescription('')
        }
    }
    return(
        <div className="sm:w-1/2 min-h-[172px] w-full flex justify-between flex-col rounded-sm bg-white shadow-md shadow-gray-400 p-2">
            {
                edit ?  <div className=" w-full flex flex-col gap-0 rounded-sm   bg-white p-2">
                <input 
                onChange={(e)=>{setTitle(e.target.value)}}
                value={title}
                className=' bg-transparent placeholder:text-gray-600 font-semibold text-gray-800 pl-2 p-1 overflow-hidden rounded-sm outline-none ' type="text" placeholder='Title..' />
                <textarea 
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
                className=' bg-transparent placeholder:text-gray-600 font-semibold text-gray-600 pl-2 p-1 overflow-hidden rounded-sm resize-none outline-none ' placeholder='Description...' cols="30" rows="2"></textarea>
               
                <div className="w-full flex items-center justify-end mt-2">
                    <button className={`px-4 p-1 bg-white border border-teal-800 rounded-sm font-semibold text-teal-800 transition-all hover:bg-teal-800 hover:text-white ${loading?'cursor-not-allowed':"cursor-pointer"}`}
                    onClick={()=>{handleSaveBtn(_id)}}
                    >Save</button>
                </div>
            </div>  :
            <>
              <div>
         <h5 className="font-bold text-lg text-gray-900 break-words">{t}</h5>
            <p className=" font-semibold text-gray-800 break-words">{desc}</p>
            {
                note?.image?.url?
            <div className="w-full mt-4 rounded-sm">
                    <img className="w-full h-full object-cover rounded-sm" src={note.image.url} alt="" />
            </div>:''
            }
         </div>
            <div className="w-full flex justify-between items-center mt-2">
                <button className="px-4 p-1 bg-white border border-blue-800 rounded-sm font-semibold text-blue-800 transition-all hover:bg-blue-800 hover:text-white"
                onClick={()=>{setEdit(true)}}
                >Edit</button>
                <button className={`px-4 p-1 bg-white border border-red-800 rounded-sm font-semibold text-red-800 hover:text-white hover:bg-red-800 transition-all ${loading?'cursor-not-allowed':'cursor-pointer'}`}
                   onClick={()=>{handleDeleteBtn(_id)}}
                >Delete</button>
            </div>
            </>
            }
       
      
        </div>
    )
}

export default Note;