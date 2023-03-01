import React from 'react'
import { getSermons, useDeleteSermonCallback, useUpdateSermonCallback } from '../../../services/useData'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Index() {

    const [show, setShow] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [singleData, setSingleData] = React.useState({} as any)
    const navigate = useNavigate()
    const [index, setIndex] = React.useState("" as any)
    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState({} as any)  
    const { handleUpdateSermon} = useUpdateSermonCallback() 
    const { handleDeleteSermon} = useDeleteSermonCallback() 

    const toast = useToast()

    React.useEffect(() => { 
    
      (async () => {
          try { 
          const response = await getSermons(); 
            setData(response?.data);  
            setLoading(false)
            console.log(response?.data);
            
          } catch (err) {
            console.error("Error occured");
          } 
      })(); 
    }, []); 

    const clickHandler =(item: any)=> {
        setTitle(item.title)
        setMessage(item.content)
        setSingleData(item)
        setIndex(item?.id)
        setShow(true)
    }

    const deleteHandler = async (item: any)=> { 

        const response = await handleDeleteSermon(item)   
        
        if(response?.status === 201 || response?.status === 200){
            toast({
                title: response?.data?.message,
                position: "bottom",
                status: "success",
                isClosable: true,
            })    
            navigate(0)
        } else { 
            toast({
                title: response?.data?.message ? response?.data?.message : "Error occured",
                position: "bottom",
                status: "error",
                isClosable: true,
            })  
        } 
    }

    const submit =async()=> {
        
        setLoading(true)

        const response = await handleUpdateSermon({
            title: title,
            content: message,
            photo: singleData?.photo,
            sermon_date : singleData?.sermon_date,
            sermon_time :  singleData?.sermon_time, 
            teacher : singleData?.teacher
        }, index)  

        if(response?.status === 201 || response?.status === 200){
            toast({
                title: response?.data?.message,
                position: "bottom",
                status: "success",
                isClosable: true,
            })    
        } else { 
            toast({
                title: response?.data?.message ? response?.data?.message : "Error occured",
                position: "bottom",
                status: "error",
                isClosable: true,
            })  
        } 
        setLoading(false)
    }

    return (
        <div className=' w-full py-[70px] h-full flex flex-col flex-1 bg-[#F5F5F5] px-[132px] ' >
            <div className=' w-full flex text-sm text-[#B5BFC9] font-Poppins-Medium justify-between items-center ' >
                <p className=' ' >Sermon title</p>
                <div className=' flex items-center ' >
                    <p className=' w-[160px] ' >Edit</p>
                    <p className=' ml-8 w-14 ' >Delete</p>
                </div>
            </div>
            <div className=' w-full mt-12 ' > 
                {loading && (
                    <div className=' w-full text-2xl font-Poppins-Bold flex justify-center ' >
                        Loading...
                    </div>
                )}
                {!loading && (
                    <> 
                        {data?.map((item: any, index: number) => {
                            return( 
                                <div key={index} className=' w-full mb-6 flex text-sm text-[#B5BFC9] font-Poppins-Medium justify-between items-center ' >
                                    <p className=' text-[#1B2126] font-Poppins-SemiBold ' >{item?.title}</p>
                                    <div className=' flex items-center ' >
                                        <p onClick={()=> clickHandler(item)} role="button" className=' w-[160px] text-[#68727B] ' >Edit message</p>
                                        <svg onClick={()=> deleteHandler(item?.id)} role="button" className=' ml-8 w-14' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 2L9 3H5C4.4 3 4 3.4 4 4C4 4.6 4.4 5 5 5H7H17H19C19.6 5 20 4.6 20 4C20 3.4 19.6 3 19 3H15L14 2H10ZM5 7V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V7H5ZM9 9C9.6 9 10 9.4 10 10V19C10 19.6 9.6 20 9 20C8.4 20 8 19.6 8 19V10C8 9.4 8.4 9 9 9ZM15 9C15.6 9 16 9.4 16 10V19C16 19.6 15.6 20 15 20C14.4 20 14 19.6 14 19V10C14 9.4 14.4 9 15 9Z" fill="#23538F"/>
                                        </svg>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
            {show && (
                <div className=' w-full fixed inset-0 z-30 flex justify-center items-center ' >
                    <div className=' w-[500px] z-50 font-Poppins-SemiBold flex flex-col bg-white rounded-md p-6 ' >
                        <p>Edit Message</p>
                        <textarea onChange={(e)=> setMessage(e.target.value)}  value={message} className=' mt-2 outline-none bg-[#F5F5F5] p-4 font-Poppins-Medium w-full text-sm h-24 ' />
                        <p className=' mt-6 mb-2 ' >Edit topic</p>
                        <input onChange={(e)=> setTitle(e.target.value)} value={title} className=' outline-none bg-[#F5F5F5] px-4 font-Poppins-Medium w-full h-[45px]  text-sm ' />
                    
                        <button onClick={()=> submit()} className=' px-6 ml-auto h-[40px] rounded-md bg-[#0042F1] text-white mt-12 ' >
                            {loading ? "Loading..." : "Save Post"}
                        </button>
                    </div>
                    <div role="button" onClick={()=> setShow(false)} className=' fixed inset-0 z-10 bg-black bg-opacity-25  ' />
                </div>
            )}
        </div>
    )
} 