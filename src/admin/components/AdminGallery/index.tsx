import React from 'react'
import Upload from "../../../assets/images/upload.png"
import { useAddGalleryCallback } from '../../../services/useData';
import { useToast } from '@chakra-ui/react';

export default function Index() {

    const [ selectedFiles, setSelectedFiles ] = React.useState([]);
    const [ imageFiles, setImageFiles ] = React.useState([]  as Array<string>);
    const [loading, setLoading] = React.useState(false)
    const { handleAddGallery} = useAddGalleryCallback()

    const toast = useToast()

    const handleImage = (e:any) => {  

        const files = e.target.files

        for (var i = 0; i < files.length; i++) {
            const clone = [...imageFiles, files[i]];
            setImageFiles(clone); 
        }
		if (e.target.files[0]) {
			const filesArray: any = Array.from(e.target.files).map((file: any) => URL.createObjectURL(file)); 
            
			setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file: any) => URL.revokeObjectURL(file) // avoid memory leak
			);
        }
    };


    const files = (index: any, photo: any) => { 
            return (
                <div key={index} className='  w-full h-40 rounded-md '  >
                    <div style={{backgroundImage:'url(' + photo + ')',width:'100%', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: '100%', display: 'flex', backgroundPosition: 'center', borderRadius: '5px' }} >
                        {/* <div className='w-full flex flex-1' />  */}
                    </div>
                </div>                    
            ) 
    }


	const renderPhotos = (source: any) => {
		return source.map((photo: any, index: any) => { 
            return(
                <div key={index}>
                    {files(index, photo)}
                </div>
             )            
        });
    };  

    const submit =async()=> {
        setLoading(true)

        const response = await handleAddGallery(imageFiles)  

        if(response?.status === 201 || response?.status === 200){
            toast({
                title: response?.data?.message,
                position: "bottom",
                status: "success",
                isClosable: true,
            })   
            setSelectedFiles([])
            setImageFiles([])
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
        <div className=' w-full ' >

            <div className=' w-full grid grid-cols-5 gap-4 py-10 ' >
                {renderPhotos(selectedFiles)} 
                <label> 
                    <input className=' hidden ' type="file" multiple={true} accept="image/*" id="input" onChange={handleImage}  />
                    {/* {imageFiles &&
                        <img src={selectedFiles} className=' w-full h-[350px] object-cover ' alt='Upload'  />
                    }  */}
                    <img src={Upload} className=' w-full h-40 object-cover ' alt='Upload'  />
                </label>
            </div>
            {selectedFiles.length > 0 && ( 
                <button onClick={()=> submit()} className=' px-6 ml-auto h-[40px] rounded-md bg-[#0042F1] text-white mt-12 ' >
                    {loading ? "Loading..." : "Save Photo"}
                </button>
            )}
        </div>
    )
} 