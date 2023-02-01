import axios from "../axiosConfig";


export const getCategories = async () => {
  const { data } = await axios.get("/category");
  return data;
};

export const getProducts = async (item: any) => {
  const { data } = await axios.get("/products-by-category", {
    params: item
  });
  return data;
};

export const getProductsById = async (item: any) => {
  const { data } = await axios.get("/product/"+item);
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
  return { handleAddSermon }
} 

// const getBanner = async () => {
//   const { data } = await axios.get("/banners");
//   return data;
// };

// const getMobileBanner = async () => {
//   const { data } = await axios.get("/banners?type=mobile");
//   return data;
// };

// const getWidgetData = async () => {
//   const { data } = await axios.get(`/destination_matrices/transformed`);
//   return data;
// };

// const getDestinations = async (query: any) => {
//   const { data } = await axios.get(`/destination_matrices?from=${query}`);
//   return data;
// };

// const getLocations = async () => {
//   const { data } = await axios.get("/locations");
//   return data;
// };

// const getPopup = async () => {
//   const { data } = await axios.get("/popups");
//   return data;
// };

// const getPosts = async () => {
//   const { data } = await axios.get("/posts");
//   return data;
// };

// const getPostsBySlug = async (slug: any) => {
//   const { data } = await axios.get(`/posts${slug}`);
//   return data;
// };

// const getPostsByCategory = async () => {
//   const { data } = await axios.get(`/posts/category`);
//   return data;
// };

// const getFAQs = async () => {
//   const { data } = await axios.get("/faqs");
//   return data;
// };

// const getFAQsCategory = async () => {
//   const { data } = await axios.get("/faqs/categories");
//   return data;
// };

// const getFAQByCat = async (category: any) => {
//   const { data } = await axios.get(`/faqs/${category}`);
//   return data;
// };

// const getOffices = async () => {
//   const { data } = await axios.get("/offices");
//   return data;
// };

// const getContacts = async () => {
//   const { data } = await axios.get("/contacts");
//   return data;
// };

// const getNotifications = async () => {
//   const { data } = await axios.get("/notifications");
//   return data;
// };

// const getPageBySlug = async (slug: any) => {
//   const { data } = await axios.get(`/pages/${slug}`);
//   return data;
// };

// const getFareRules = async () => {
//   const { data } = await axios.get(`/products/farerules`);
//   return data;
// };

// const getLowFare = async (from = null, to = null) => {
//   const { data } = await axios.get(
//     `/flight/availability?from=${from}&to=${to}`
//   );
//   return data;
// };

// export {
//   getMobileBanner,
//   getBanner,
//   getWidgetData,
//   getDestinations,
//   getLocations,
//   getPopup,
//   getPosts,
//   getPostsBySlug,
//   getPostsByCategory,
//   getFAQsCategory,
//   getFAQs,
//   getFAQByCat,
//   getOffices,
//   getContacts,
//   getPageBySlug,
//   getNotifications,
//   getFareRules,
//   getLowFare,
// };
