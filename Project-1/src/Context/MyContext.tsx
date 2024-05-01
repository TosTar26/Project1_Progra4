import React from "react";


const MyContext = React.createContext({
    productId: 0,
    setProductId: (id: number)=>{}
});

export default MyContext;