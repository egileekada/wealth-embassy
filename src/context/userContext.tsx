import React, { useState, createContext, useContext } from "react";

export interface IUser {  
  sermonData: object, 
  setSermonData: Function,
  eventData: object, 
  setEventData: Function  
}

export const UserContext = React.createContext({} as IUser); 

export const useUser = () => useContext(UserContext);

export const UserContextProvider = (props: any) => { 
  const [sermonData, setSermonData] = useState({} as any); 
  const [eventData, setEventData] = useState({} as any);  

  return <UserContext.Provider value={{ eventData, setEventData, sermonData, setSermonData }}>
    {
        props.children
    }</UserContext.Provider>;
};
