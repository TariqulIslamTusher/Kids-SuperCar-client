import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}- Kids Super Car`
    },[title])
};

export default useTitle;