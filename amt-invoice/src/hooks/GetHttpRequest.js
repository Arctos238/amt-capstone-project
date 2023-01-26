import { useEffect, useState } from "react";

function useGet(url){
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        fetch(url)
        .then(res => { return res.json(); })
        .then(data => {
            seterror(data.error)
            setdata(data)
            setloading(false)
            }
          );
    }, [url]);

    return { data, loading, error };
};

export default useGet;

