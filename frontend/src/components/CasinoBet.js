import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CasinoBet = () => {

    const [data, setData] = useState([]);

    const cname = useParams().name
    console.log(cname)

    // useEffect(() => {
    //     axios.get(`https://diamond-casino.p.rapidapi.com/api/casino/stream?name=${cname}`, {
    //         headers: {
    //             'x-rapidapi-key': 'c872ddd763mshcc2e67f5845da91p18569djsn3f6476020794',
    //             'x-rapidapi-host': 'diamond-casino.p.rapidapi.com'
    //         }
    //     }).then((res) => {
    //         console.log(res, "iframe");
    //         const list = res.data
    //         setData(list)
    //     })
    // }, [])


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