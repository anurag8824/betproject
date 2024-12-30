import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../pages/Card'
import axios from 'axios'

const Fantasy = () => {

    const [data, setData] = useState([]);



    // useEffect(() => {
    //     axios.get("https://diamond-casino.p.rapidapi.com/api/casino/all-in-one-list", {
    //         headers: {
    //             'x-rapidapi-key': 'c872ddd763mshcc2e67f5845da91p18569djsn3f6476020794',
    //             'x-rapidapi-host': 'diamond-casino.p.rapidapi.com'
    //         }
    //     }).then((res) => {
    //         console.log(res, "casino list");
    //         const list = res.data
    //         setData(list)
    //     })
    // }, [])


    const tempData = [
        {
            casino_id: 'Andarbahar',
            image: 'https://sitethemedata.com/casino_icons/lc/ab4.jpg',
        },
        {
            casino_id: 'lucky7',
            image: 'https://sitethemedata.com/casino_icons/lc/lucky7.jpg',
        },
        {
            casino_id: 'Superover',
            image: 'https://sitethemedata.com/casino_icons/lc/superover.jpg',
        },
        {
            casino_id: 'Andarbahar2',
            image: 'https://sitethemedata.com/casino_icons/lc/ab4.jpg',
        },
        {
            casino_id: 'baccarat',
            image: 'https://sitethemedata.com/casino_icons/lc/baccarat.jpg',
        },
        {
            casino_id: 'baccarat2',
            image: 'https://sitethemedata.com/casino_icons/lc/baccarat2.jpg',
        },
        {
            casino_id: 'poker6player',
            image: 'https://sitethemedata.com/casino_icons/lc/poker6.jpg',
        },
        {
            casino_id: 'dragontiger1Day',
            image: 'https://sitethemedata.com/casino_icons/lc/dt6.jpg',
        },
        {
            casino_id: 'Queen',
            image: 'https://sitethemedata.com/casino_icons/lc/queen.jpg',
        },
        {
            casino_id: 'Cards3J',
            image: 'https://sitethemedata.com/casino_icons/lc/3cardj.jpg',
        },
        {
            casino_id: 'Ballbyball',
            image: 'https://sitethemedata.com/casino_icons/lc/ballbyball.jpg',
        },
    ];

    console.log(tempData, "cdk")


    return (
        <div>

            <div>

                <div className='flex justify-between'>
                    <p className='font-medium flex gap-2  items-center mt-4 text-lg'> <img className='size-4' src='/tash.png' />Fantasy Games</p>

                    <Link className='font-medium flex gap-2 mr-4 text-gray-400 items-center mt-4 text-sm'> All<img className='size-3' src='/next.svg' /></Link>

                </div>





                <div className='flejx grid lg:grid-cols-5 grid-cols-2 mt-2 overflow-x-auto scrollbar-hide gap-x-2 lg:gap-2 '>


                    {tempData.map((item) => (
                        item ? (

                            <Link to={item.casino_id} className="relative flex flex-col items-center justify-center group">
                                <div className="relative lg:w-52 lg:h-32 w-44 h-28 border border-gray-100 border-opacity-10 rounjded-xl overflow-hidden">
                                    {/* Image */}
                                    <img
                                        className="w-full h-full object-cover rouhnded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                        src={item.image}
                                        alt="Poker Icon"
                                    />

                                    {/* shadow  */}

                                    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-500 ease-out group-hover:bg-opacity-50"></div>

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                                        <button className="hover:text-black text-orange-300 font-bold border rounded-md px-6 py-1 shadow-md hover:bg-yellow-600 border-yellow-600 transform transition-transform duration-300">
                                            Play
                                        </button>
                                    </div>

                                    <p className="absolute text-xs bottom-2 left-1 text-white px-2 py-1 rounded-sm">
                                        Evolution
                                    </p>
                                </div>

                                {/* Below Image Text */}
                                <p className="font-medium text-base"> {item.casino_id}</p>
                            </Link>

                        ) : ""
                    ))}

                </div>



        




            </div></div>
    )
}

export default Fantasy