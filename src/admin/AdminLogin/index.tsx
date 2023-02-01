import React from 'react'
import Logo from "../../assets/images/gwe logo 1.png"
import { useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useLoginCallback } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    
    const toast = useToast()
    const [loading, setLoading] = React.useState(false) 
    const navigate = useNavigate()
    const { handleLogin } = useLoginCallback();
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    const submit = async () => { 
        setLoading(true)
        if (!formik.dirty) { 
            // toast.error("Please Enter Your Email And Password") 
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

            const response = await handleLogin(JSON.stringify(formik.values))   

            if(response?.status === 200){

                localStorage.setItem("token", response?.data?.data?.token)
                toast({
                    title: response?.data?.message,
                    position: "bottom",
                    status: "success",
                    isClosable: true,
                })  
                navigate("/dashboard")
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
        <div className="w-screen h-screen flex justify-center items-center bg-[#EEF1F5] " >
            <div style={{  boxShadow: "0px 2px 4px 0px #0000000D" }} className=' w-[475px] bg-white flex-col flex px-6 py-[24px] ' >
                <img className=' w-[95px] h-[50px] mx-auto ' alt='logo' src={Logo} />
                <div className=' mt-10 ' >
                    <p className=' text-sm text-[#333] font-Poppins-Bold ' >LOGIN</p>
                    <p className=' text-[13px] text-[#7C7C7C] font-Poppins-Regular ' >Login to access your account</p>
                    <p className=' text-[11px] text-[#438AFE] font-Poppins-Regular mt-4 ' >Email Address</p>
                    <input 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        }  
                        className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.email && formik.errors.email && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Medium text-[#ff0000]"
                            >
                                {formik.errors.email}
                            </motion.p>
                        )}
                    </div> 
                    <p className=' text-[11px] text-[#438AFE] font-Poppins-Regular mt-4 ' >Password</p>
                    <input 
                        name="password"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("password", true, true)
                        }  
                        type="password" className=' h-[40px] w-full border-b text-sm border-[#438AFE] outline-none px-4 ' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Medium text-[#ff0000]"
                            >
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                    <div className=' my-1 flex items-center justify-between ' >
                        <div className=' flex items-center ' > 
                            <input type="checkbox" className=' w-4 h-4 mr-3 ' />
                            <p className=' text-[13px] text-[#777777] ' >Remember me</p>
                        </div>
                        <button className=' text-[13px] font-Poppins-Regular text-[#438AFE] ' >Forgot Password?</button>
                    </div>
                    <div className=' flex justify-end mt-4 ' >
                        <button disabled={loading} onClick={()=> submit()} className=' bg-[#438AFE] w-[140px] h-[45px] font-Poppins-Bold text-sm text-white ' >
                            {loading? "Loading..." :"LOGIN"}
                        </button>
                    </div>  
                    <div className=' mt-6 text-sm font-Poppins-Regular flex justify-center ' >
                        Don’t have an Account?  
                        <button className=' text-[#438AFE] ml-2 ' >Register Here</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 