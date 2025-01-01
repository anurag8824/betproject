import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cricket = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://diamond-sports-betting-api.p.rapidapi.com/esid?sid=4", {
            headers: {
                'x-rapidapi-key': '2d7be9d9ccmsh85237b147206023p1d2d17jsned65040086f6',
                'x-rapidapi-host': 'diamond-sports-betting-api.p.rapidapi.com'
            }
        }).then((res) => {
            console.log(res, "get all matches");
            const list = res.data.data.t1
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



                <> {data?.map((item, index) => (
                    item ? (


                        <div className='md:flex px-1  border-b-gray-700 border-b pb-2 gap-y-2 items-center mt-2 w-full justify-between'>



                            <div className='flex items-center justify-between md:justify-normal md:w-1/2'>

                                <Link to={`cricket-bet/${item.gmid}`} className='fljex md:block item-center  md:w-3/4  gap-2'>
                                    {item.iplay == false ?
                                        <span className='text-gray-700 w-24 bg-red-3i00 text-left text-nowrap text-xs'>{formatMarketTime(item.stime)}</span>
                                        : <p className='text-xs text-green-500'><span className='animate-pulse text-red-500 text-sm'>● </span>Live</p>}
                                    <p className='text-sm '>{item.ename}</p>
                                </Link>

                                <div className='text-sm w-1/4   font-medium'>{item.f1 ? "F1" : ""} {item.f ? "F" : ""} {item.bm ? "BM" : ""} </div>

                            </div>


                            <div className='md:w-1/2 flex items-center justify-between md:justify-end gap-2 font-bold '>
                                {item.section[0].sno == 1 ?
                                    <div className='flex gap-1'>
                                        {item.section[0].odds.map((item, index) => (
                                            item ? (
                                                <button key={index} className={`${item.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-14 px-2.5`}>{item.odds}</button>

                                            ) : "fdg"
                                        ))}
                                    </div>

                                    : <p className='text-xs '>Suspended</p>}
                                {item.section[2]?.sno == 2 ?

                                    <div className='flex gap-1'>
                                        {item.section[2].odds.map((item, index) => (
                                            item ? (
                                                <button key={index} className={`${item.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-14 px-2.5`}>{item.odds}</button>

                                            ) : "fdg"
                                        ))}
                                    </div>
                                    : <p className='text-xs'>Suspended</p>}
                                {item.section[1].sno == 3 ?

                                    <div className='flex gap-1'>
                                        {item.section[1].odds.map((item, index) => (
                                            item ? (
                                                <button key={index} className={`${item.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-14 px-2.5`}>{item.odds}</button>

                                            ) : "fdg"
                                        ))}
                                    </div>
                                    : <p className='text-xs '>Suspended</p>}
                            </div>



                        </div>

                    ) : ("")
                ))}</>











            </div>
        </div>
    )
}

export default Cricket