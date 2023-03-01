/* eslint-disable no-unused-vars */
import axios from "../axiosConfig"; 

export function useLoginCallback() {
  const handleLogin = async (credentials: any): Promise<any> => {    
    try{ 
        const response = await axios.post('auth/login', credentials,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleLogin }
} 

export function useRegisterCallback() {
  const handleRegister = async (credentials: any): Promise<any> => {    
    try{ 
        const response = await axios.post('register', credentials,
        {
          headers: {'Content-Type':'application/json'}, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleRegister }
}  