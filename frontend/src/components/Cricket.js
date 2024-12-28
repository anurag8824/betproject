import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cricket = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://betfair-sports-casino-live-tv-result-odds.p.rapidapi.com/api/getEventsBySportsID?id=4", {
            headers: {
                'x-rapidapi-key': 'c872ddd763mshcc2e67f5845da91p18569djsn3f6476020794',
                'x-rapidapi-host': 'betfair-sports-casino-live-tv-result-odds.p.rapidapi.com'
            },
        }).then((res) => {
            console.log(res, "getttt");
            const list = res.data
            setData(list)
        })
    }, [])

    const formatMarketTime = (marketStartTime) => {
        const date = new Date(marketStartTime);

        // Convert UTC to IST (UTC + 5:30)
        const istDate = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);

        // Get today's date at midnight
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Get tomorrow's date at midnight
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        // Format hours and minutes in 24-hour format
        const hours = istDate.getHours().toString().padStart(2, '0');
        const minutes = istDate.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;

        if (istDate >= today && istDate < tomorrow) {
            return `Today, ${timeString}`;
        } else if (istDate >= tomorrow && istDate < new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000)) {
            return `Tomorrow, ${timeString}`;
        } else {
            // Check if the date is within the current week
            const dayDifference = Math.floor((istDate - today) / (24 * 60 * 60 * 1000));
            if (dayDifference < 7) {
                const dayName = istDate.toLocaleDateString('en-US', { weekday: 'long' });
                return `${dayName}, ${timeString}`;
            } else {
                // Format as DD MMM, hh:mm
                return istDate.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                }) + `, ${timeString}`;
            }
        }
    };


    return (
        <div>
            <div>

                <div className='bg-blue-950 px-2.5 text-white py-1 flex gap-2 '>
                    <img className='h-5 w-5' src="/cricket (3).png" />
                    <span>Cricket</span>
                    {/* <span>1</span> */}
                </div>

                {data?.competitions?.map((item, index) => (
                    item ? (

                        <> {item?.markets?.map((item, index) => (
                            item ? (


                                <div className='md:flex  border-b-gray-700 border-b pb-2 gap-y-2 items-center mt-2 w-full justify-between'>



                                    <div className='flex items-center justify-between md:justify-normal md:w-1/2'>

                                        <Link to={`cricket-bet/${item.marketId}/${item.version}`} className='fljex md:block item-center  md:w-3/4  gap-2'>
                                            <span className='text-gray-700 w-24 bg-red-3i00 text-left text-nowrap text-xs'>{formatMarketTime(item.marketStartTime)}</span>
                                            <p className='text-sm '>{item.marketName}</p>
                                        </Link>

                                        <div className='text-sm w-1/4  font-medium'>F1 F BM</div>

                                    </div>


                                    <div className='md:w-1/2 flex items-center justify-between md:justify-end gap-2 font-bold '>
                                        <div className='flex gap-1'>
                                            <button className='bg-blue-400 px-2.5'>5178</button>
                                            <button className='bg-pink-400 px-2.5'>15.78</button>
                                        </div>

                                        <div className='flex gap-1'>
                                            <p className='bg-blue-400 px-2.5'>1.36</p>
                                            <p className='bg-pink-400 px-2.5'>1.78</p>
                                        </div>

                                        <div className='flex gap-1'>
                                            <p className='bg-blue-400 px-2.5'>5178</p>
                                            <p className='bg-pink-400 px-2.5'>15.78</p>
                                        </div>

                                    </div>



                                </div>

                            ) : ("")
                        ))}</>
                    ) : ""
                ))}











            </div>
        </div>
    )
}

export default Cricket