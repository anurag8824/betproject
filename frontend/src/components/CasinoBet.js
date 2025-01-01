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


     useEffect(() => {
        axios.get(`https://Diamond-Casino-68-Table-Casino-API.proxy-production.allthingsdev.co/casino/tv?id=superover3`, {
            headers: { 
                'x-apihub-key': '6sOEcHRZuZiJY2It-IhDWPdpwIm2MJm1jpcuFW6gdeJDXZiufL', 
                'x-apihub-host': 'Diamond-Casino-68-Table-Casino-API.allthingsdev.co', 
                'x-apihub-endpoint': 'a6dac04c-1067-40ef-ab3e-fa3ecd65941b'
             }
        }).then((res) => {
            console.log(res, "iframelink");
            // const list = res.data
            // setData(list)
        })
        .catch((err)=>{
            console.log(err,"error")
        })
    }, [])

    useEffect(() => {
        axios.get(`https://Diamond-Casino-68-Table-Casino-API.proxy-production.allthingsdev.co/casino/data?type=${cname}`, {
            headers: { 
                'x-apihub-key': '6sOEcHRZuZiJY2It-IhDWPdpwIm2MJm1jpcuFW6gdeJDXZiufL', 
                'x-apihub-host': 'Diamond-Casino-68-Table-Casino-API.allthingsdev.co', 
                'x-apihub-endpoint': 'a6dac04c-1067-40ef-ab3e-fa3ecd65941b'
             }
        }).then((res) => {
            console.log(res, "info get");
            // const list = res.data
            // setData(list)
        })
        .catch((err)=>{
            console.log(err,"error")
        })
    }, [])



    return (
        <div>
            <div>CasinoBet</div>
            
            <div className="iframe-container">
            {/* <iframe
                src={data.stream_url}
                title="External Content"
                width="100%"
                height="500px"
                style={{ border: 'none' }}
            ></iframe> */}
        </div>

       


        
        
        </div>

    )
}

export default CasinoBet