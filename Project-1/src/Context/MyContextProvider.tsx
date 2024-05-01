import { ReactNode, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({children}: {children: ReactNode}) => {
    const [productId, setProductId] = useState(0)
  
    return (
      <MyContext.Provider value={{productId, setProductId}}>
          {children}
      </MyContext.Provider>
    )
  }
  
  export default MyProvider;