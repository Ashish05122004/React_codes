import { useState,useEffect } from "react";

const useCurrencyInfo = (currency) =>{
    const [data,setData] = useState({})
    useEffect(async ()=>{
        let url =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        let res = await fetch(url);
        let info = res.json();
        setData(info[currency]);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;