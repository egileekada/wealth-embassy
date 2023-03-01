import React from 'react'
import Upload from "../../../assets/images/upload.png"
import { useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useAddSermonCallback } from '../../../services/useData';

export default function AddSermon() {
    
    const toast = useToast()
    const { handleAddSermon } = useAddSermonCallback();
    const [loading, setLoading] = React.useState(false)  
    const [image, setImage] = React.useState('');   
    const [imageFile, setImageFile] = React.useState('');  
    const loginSchema = yup.object({ 
        title: yup.string().required('Required'),
        content: yup.string().required('Required'),
        teacher: yup.string().required('Required'),
        sermon_date: yup.string().required('Required'),
        sermon_time: yup.string().required('Required'),
    }) 


    const handleImageChange = (e: any ) => { 
       
        if (URL.createObjectURL(e.target.files[0])) {
            setImageFile(URL.createObjectURL(e.target.files[0]));
        console.log(URL.createObjectURL(e.target.files[0]));
        }

        setImage(e.target.files[0]);  
    }  

    console.log(image);

    // formik
    const formik = useFormik({
        initialValues: {title: '', content: '', teacher: '', sermon_date: '', sermon_time: ''},
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
        }else if (!image) { 
            toast({
                title: "Add Image",
                position: "bottom",
                status: "error",
                isClosable: true,
            })  
        }  else{

            const response = await handleAddSermon(formik.values, image)  

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
                    <p className=' text-[#333] font-Poppins-Bold ' >add sermon here</p>
                    <div className=' w-full mt-8 ' >
                        <input 
                            name="title"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("title", true, true)
                            }  placeholder='title'
                            className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    </div>
                    <div className=' w-full mt-8 ' >
                        <input 
                            name="sermon_date"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("sermon_date", true, true)
                            }  type="date"
                            className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    </div>
                    <div className=' w-full mt-8 ' >
                        <input 
                            name="sermon_time"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("sermon_time", true, true)
                            }  type="time"
                            className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    </div>
                    <div className=' w-full mt-8 ' >
                        <input 
                            name="teacher"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("teacher", true, true)
                            }  placeholder='Sermon teacher'
                            className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    </div> 
                    <div className=' w-full mt-8 ' >
                        <textarea 
                            name="content"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("content", true, true)
                            }  
                            placeholder='Message Text'
                            className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    </div>
                </div>
                <div className=' w-full flex flex-col justify-center pl-8 ' >
                    <p className=' text-[#333] font-Poppins-Bold mb-2 ' >Event Photo Upload</p>
                    <label> 
                        <input className=' hidden ' type="file" accept="image/*" id="input" onChange={handleImageChange}  />
                        {image ?  
                            <img src={imageFile} className=' w-full h-[350px] object-cover ' alt='Upload'  />: 
                            
                            <img src={Upload} className=' w-full h-[350px] object-cover ' alt='Upload'  />}
                    </label>
                </div>
            </div>
            <button onClick={()=> submit()} disabled={loading} className=' px-6 ml-auto h-[35px] rounded-md bg-[#0042F1] text-white mt-12 ' >
                {loading ? "Loading..." : "Submit"}
            </button>
        </div>
    )
} 