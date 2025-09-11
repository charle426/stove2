'use client'
import React, { createContext } from "react";
import { collection, getDocs,} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
    


export const AppContext = createContext([]); //create the context API
//function body
export default function Context({ children }) {
  const [server, setServer] = React.useState(null);
  const [adminAuth, setAdminAuth] = React.useState(false);
  const blogsCollection = collection(db, "blogs");
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(blogsCollection);
      return setServer(
        data.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            file: doc.data().file,
            isFeatured: doc.data().isFeatured,
            uploadTime: doc.data().uploadTime,
          }))
        );
      };
      fetchData();
    }, [blogsCollection]);
  return (
    <AppContext.Provider value={{server, adminAuth, setAdminAuth}}>
      {children}
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  const context = React.useContext(AppContext);
  if (context === null) {
    // Return a safe default object to prevent SSR/prerender errors
    return { server: null, adminAuth: false, setAdminAuth: () => {} };
  }
  return context;
};