import React from 'react'
import Upload from "../../../assets/images/upload.png"
import { useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useAddSermonCallback, useLiveVideoCallback } from '../../../services/useData';

export default function AddSermon() {
    
    const toast = useToast()
    const { handleLiveVideo } = useLiveVideoCallback();
    const [loading, setLoading] = React.useState(false)  
    const [image, setImage] = React.useState('');   
    const [imageFile, setImageFile] = React.useState('');  
    const loginSchema = yup.object({ 
        url: yup.string().required('Required'), 
    })  

    // formik
    const formik = useFormik({
        initialValues: {url: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 


    const submit = async () => { 
        setLoading(true)
        if (!formik.dirty) {  
            toast({
                title: "You have to fill in the form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
        }else if (!formik.isValid) { 
            toast({
                title: "You have to fill in the form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            })  
        } else{

            // 10000 0077294523 oghuck access
            
            const response = await handleLiveVideo(formik.values)  

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
        }
        setLoading(false); 
    }

    
    return (
        <div className=' w-full flex flex-col mt-8 overflow-x-hidden ' > 
            <div className=' w-full flex px-8 py-12 mt-[45px] bg-white ' >
                <div className=' w-full pr-8 ' >
                    <p className=' text-[#333] font-Poppins-Bold ' >add Video Link</p>
                    <div className=' w-full mt-8 ' >
                        <input 
                            name="url"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("url", true, true)
                            }  placeholder='url'
                            className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    </div> 
                </div> 
            </div>
            <button onClick={()=> submit()} disabled={loading} className=' px-6 ml-auto h-[35px] rounded-md bg-[#0042F1] text-white mt-12 ' >
                {loading ? "Loading..." : "Submit"}
            </button>
        </div>
    )
} 