import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CasinoBet = () => {

    const [data, setData] = useState([]);

    const cname = useParams().name
    console.log(cname)

    useEffect(() => {
        axios.get(`https://diamond-casino.p.rapidapi.com/api/casino/stream?name=${cname}`, {
            headers: {
                'x-rapidapi-key': '50903d0f2amshf62877e2b6430b0p1ebb12jsn0bb5603f891b',
                'x-rapidapi-host': 'diamond-casino.p.rapidapi.com'
            }
        }).then((res) => {
            console.log(res, "iframe");
            const list = res.data
            setData(list)
        })
    }, [])


    return (
        <div>
            <div>CasinoBet</div>
            
            <div className="iframe-container">
            <iframe
                src={data.stream_url}
                title="External Content"
                width="100%"
                height="500px"
                style={{ border: 'none' }}
            ></iframe>
        </div>

       


        
        
        </div>

    )
}

export default CasinoBet