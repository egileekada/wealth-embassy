import axios from "../axiosConfig";


export const getCategories = async () => {
  const { data } = await axios.get("/category");
  return data;
};

export const getSermons = async () => {
  const { data } = await axios.get("sermons",
  {
    headers: { 
    Authorization : `Bearer ${localStorage.getItem('token')}`
  }} );
  return data;
};

export const getData = async (item: any) => {
  const { data } = await axios.get(item);
  return data;
}; 

export function useAddEventCallback() {
  const handleAddEvent = async (credentials: any, image: any): Promise<any> => {  

    const formData = new FormData()

    formData.append("event_title", credentials.event_title)
    formData.append("event_date", credentials.event_date)
    formData.append("event_time", credentials.event_time)
    formData.append("event_details", credentials.event_details)
    formData.append("photo", image)
    
    try{ 
        const response = await axios.post('events', formData,
        {
          headers: {'Content-Type': image.type,
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleAddEvent }
} 

export function useAddSermonCallback() {
  const handleAddSermon = async (credentials: any, image: any): Promise<any> => {  

    const formData = new FormData() 
    formData.append("title", credentials.title)
    formData.append("content", credentials.content)
    formData.append("teacher", credentials.teacher)
    formData.append("sermon_date", credentials.sermon_date)
    formData.append("sermon_time", credentials.sermon_time)
    formData.append("photo", image)
    
    try{ 
        const response = await axios.post('sermons', formData,
        {
          headers: {'Content-Type': image.type,
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleAddSermon }
}  
 
export function useUpdateSermonCallback() {
  const handleUpdateSermon = async (credentials: any, index:any): Promise<any> => {   

    try{ 
        const response = await axios.post('sermons/'+index, credentials,
        {
          headers: {'Content-Type': 'application/json',
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleUpdateSermon }
}  

export function useAddGalleryCallback() {
  const handleAddGallery = async (credentials: any): Promise<any> => {  

    const formData = new FormData()  
    // formData.append("photos",credentials) 
    {credentials.map((item: any)=> {
      formData.append("photos[]", item)
    })}
    
    try{ 
        const response = await axios.post('gallery/photos', formData,
        {
          headers: {'Content-Type': credentials[0].type,
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleAddGallery }
}  

export function useDeleteSermonCallback() {
  const handleDeleteSermon = async (credentials: any): Promise<any> => {   
    
    try{ 
        const response = await axios.delete('sermons/'+credentials,
        {
          headers: {'Content-Type': 'application/json',
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }, 
        }); 
        return response       
    } catch(err: any) { 
      return err?.response    
    }     
  }
  return { handleDeleteSermon }
}  