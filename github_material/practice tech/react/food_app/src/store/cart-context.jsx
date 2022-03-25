import React from "react";

const cartContext = React.createContext({   

    items: [{name: "sample", amount: 0, id: "r53", price: 0}], 
    totalAmount: 0, 
    addItem: (item) => {}, 
    removeItem: (id) => {},

});

export default cartContext;