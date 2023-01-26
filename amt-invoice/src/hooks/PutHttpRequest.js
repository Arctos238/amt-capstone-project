import { useEffect, useState } from "react";

function usePut(url, obj){
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(res => { return res.json(); })
        .then(data => {
            setData(data);
            // console.log(JSON.stringify(data));
            setError(data.error);
            // console.log(data.error);
            setloading(false)
        }
    );
    }, [url, obj]);

    return {data, loading, error};
};

export default usePut;