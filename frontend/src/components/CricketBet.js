import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CricketBet = () => {
    const [data, setData] = useState([]);
    const [bookData, setBookData] = useState([]);






    const marketid = useParams().id1
    const eventid = useParams().id2

    console.log(marketid)

    useEffect(() => {
        // Function to fetch data
        const fetchOdds = () => {
            axios.get(`https://betfair-sports-casino-live-tv-result-odds.p.rapidapi.com/api/GetMarketOdds?market_id=${marketid}`,
                {
                    headers: {
                        'x-rapidapi-key': 'c872ddd763mshcc2e67f5845da91p18569djsn3f6476020794',
                        'x-rapidapi-host': 'betfair-sports-casino-live-tv-result-odds.p.rapidapi.com',
                    },
                }
            )
                .then((res) => {
                    console.log(res.data, "odds fetched");
                    if (res.data && res.data.length > 0) {
                        setData(res.data[0]); // Assuming you want the first item
                    }
                })
                .catch((error) => {
                    console.error("Error fetching odds:", error);
                });
        };

        // Initial fetch
        fetchOdds();

        // Set up interval for repeated fetching
        // const interval = setInterval(() => {
        //   fetchOdds();
        // }, 2000); // Fetch every 60 seconds

        // Cleanup interval on component unmount
        // return () => clearInterval(interval);
    }, [marketid]); // Dependency on marketid to refetch if it changes





    useEffect(() => {
        // Function to fetch data
        const fetchOdds = () => {
            axios.get(`https://betfair-sports-casino-live-tv-result-odds.p.rapidapi.com/api/GetSession?eventid=${eventid}`,
                {
                    headers: {
                        'x-rapidapi-key': 'c872ddd763mshcc2e67f5845da91p18569djsn3f6476020794',
                        'x-rapidapi-host': 'betfair-sports-casino-live-tv-result-odds.p.rapidapi.com',
                    },
                }
            )
                .then((res) => {
                    console.log(res, "fancy oddds fetched");
                    if (res.data) {
                        setBookData(res.data); // Assuming you want the first item
                    }
                })
                .catch((error) => {
                    console.error("Error fetching odds:", error);
                });
        };

        // Initial fetch
        fetchOdds();

        // Set up interval for repeated fetching
        // const interval = setInterval(() => {
        //   fetchOdds();
        // }, 2000); // Fetch every 60 seconds

        // Cleanup interval on component unmount
        // return () => clearInterval(interval);
    }, [eventid]);


    return (
        <div className=''>
            <div className='bg-blue-950 px-2.5 hidden fljjex  justify-between text-white py-1 gap-2 '>
                <img className='h-5 w-5' src='/cricket (3).png' />

                <span>Australia Vs India</span>
                <span>19th Feb, 2023</span>


            </div>

            <div className="iframe-container">
                <iframe
                    src={`https://score.akamaized.uk/?id=${eventid}`}
                    title="External Content"
                    width="100%"
                    height="500px"
                    style={{ border: 'none' }}
                ></iframe>
            </div>

            <div className='MatchOdd DIv'>

                <div className='flex items-center font-medium mt-2 justify-between py-2 px-4 text-white bg-emerald-700'>
                    <p>Match Odds</p>
                    <button className='bg-green-500 px-2 text-sm py-1'>CashOut</button>
                </div>

                <div className='bg-white space-y-1 p-1.5'>

                    <div className='flex items-center w-full justify-between'>
                        <p className='w-1/2 bg-gray-700'></p>
                        <div className='flex w-1/2 text-sm justify-center gap-1'>
                            <div className='flex 1stback gap-1'>


                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className=''>Back</span>
                                </button>
                            </div>
                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className=''>Lay</span>

                                </button>

                            </div>
                        </div>

                    </div>





                    {/* 1st Team  */}
                    {data?.runners?.map((item) => (
                        item ? (

                            <div className='flex items-center w-full   justify-between'>
                                <p className=''>TeamA,B,Draw</p>
                                <div className='flex w-1/2 justify-center gap-1'>

                                    <div className='flex 1stback gap-1'>

                                        {item.ex?.availableToBack?.reverse().map((item) => (
                                            item ? (

                                                <button className='bg-blue-300 w-16 grid gap-0 px-2.5'>
                                                    <span className='font-bold'>{item.price}</span>
                                                    <span className='text-xs'>{item.size}</span>
                                                </button>

                                            ) : ""
                                        ))}

                                    </div>


                                    <div className='flex 1stlay gap-1'>

                                        {item.ex?.availableToLay?.map((item) => (
                                            item ? (

                                                <button className='bg-pink-300 w-16 grid gap-0 px-2.5'>
                                                    <span className='font-bold'>{item.price}</span>
                                                    <span className='text-xs'>{item.size}</span>
                                                </button>

                                            ) : ""
                                        ))}

                                    </div>
                                </div>

                            </div>

                        ) : ""
                    ))}



                    {/* 2nd Team  */}
                    <div className='fleddx  hidden items-center w-full justify-between'>
                        <p>India</p>
                        <div className='flex w-1/2 justify-center gap-1'>
                            <div className='flex 1stback gap-1'>
                                <button className='bg-blue-200 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                                <button className='bg-blue-300 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                            </div>

                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                                <button className='bg-pink-300 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                                <button className='bg-pink-200 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>







            <div className='BOOKMAKER DIv  '>

                <div className='flex items-center   font-medium mt-2 justify-between py-2 px-4 text-white bg-emerald-700'>
                    <p>BOOKMAKER</p>
                    <button className='bg-green-500 px-2 text-sm py-1'>CashOut</button>
                </div>

                <div className='bg-white  space-y-1 p-1.5'>

                    <div className='flex items-center justify-between'>
                        <p className=''></p>
                        <div className='flex text-sm w-1/2 justify-center gap-1'>
                            <div className='flex 1stback gap-1'>


                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className=''>Back</span>
                                </button>
                            </div>
                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className=''>Lay</span>

                                </button>

                            </div>
                        </div>

                    </div>





                    {bookData?.bookMaker?.map((item) => (
                        item ? (
                            <div className='flex items-center    justify-between'>
                                <p className=''>{item.selectionName}</p>
                                <div className='flex w-1/2 justify-center gap-1'>
                                    <div className='flex 1stback gap-1'>
                                        <button className='bg-blue-200 grjid hidden gap-0 px-2.5'>
                                            <span className='font-bold'>1.26</span>
                                            <span className='text-xs'>9.65K</span>
                                        </button>
                                        <button className='bg-blue-300 w-16 grid gap-0 px-2.5'>
                                            <span className='font-bold'>{item.backOdds}</span>
                                            <span className='text-xs'>9.65K</span>
                                        </button>
                                        <button className='bg-blue-400 grihhd hidden gap-0 px-2.5'>
                                            <span className='font-bold'>1.26</span>
                                            <span className='text-xs'>9.65K</span>
                                        </button>
                                    </div>
                                    <div className='flex 2ndlay gap-1'>
                                        <button className='bg-pink-400 grjid hidden gap-0 px-2.5'>
                                            <span className='font-bold'>1.26</span>
                                            <span className='text-xs'>9.65K</span>
                                        </button>
                                        <button className='bg-pink-300 w-16 grid gap-0 px-2.5'>
                                            <span className='font-bold'>{item.layOdds}</span>
                                            <span className='text-xs'>9.65K</span>
                                        </button>
                                        <button className='bg-pink-200 griggd hidden gap-0 px-2.5'>
                                            <span className='font-bold'>1.26</span>
                                            <span className='text-xs'>9.65K</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        ) : ""
                    ))}





                </div>

            </div>



            <div className='NORMAL DIv  '>

                <div className='flex items-center   font-medium mt-2 justify-between py-2 px-4 text-white bg-emerald-700'>
                    <p>NORMAL</p>
                    <button className='bg-green-500 px-2 text-sm py-1'>CashOut</button>
                </div>

                <div className='bg-white  space-y-1 p-1.5'>

                    <div className='flex items-center justify-between'>
                        <p className=''></p>
                        <div className='flex text-sm w-1/2 justify-center gap-1'>
                            <div className='flex 1stback gap-1'>


                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className=''>NO</span>
                                </button>
                            </div>
                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className=''>YES</span>

                                </button>

                            </div>
                        </div>

                    </div>

                    {/* 1st Team  */}

                    {bookData?.fancy?.map((item) => (
                        item ? (
                            <div className='flex items-center border-b pb-0.5   justify-between'>
                                <p className='text-sm'>{item.marketName}</p>
                                <div className='flex w-1/2 justify-center gap-1'>
                                    <div className='flex 1stback gap-1'>
                                        <button className='bg-pink-400 w-16 grid gap-0 px-2.5'>
                                            <span className='font-bold'>{item.runsNo}</span>
                                            <span className='text-xs'>{item.oddsNo}</span>
                                        </button>


                                    </div>
                                    <div className='flex 2ndlay gap-1'>


                                        <button className='bg-blue-400 w-16 grid gap-0 px-2.5'>
                                            <span className='font-bold'>{item.runsYes}</span>
                                            <span className='text-xs'>{item.oddsYes}</span>
                                        </button>

                                    </div>
                                </div>

                            </div>


                        ) : ""
                    ))}



                </div>

            </div>


            <div className='TIED  DIv  '>

                <div className='flex items-center   font-medium mt-2 justify-between py-2 px-4 text-white bg-emerald-700'>
                    <p>TIED</p>
                    <button className='bg-green-500 px-2 text-sm py-1'>CashOut</button>
                </div>

                <div className='bg-white  space-y-1 p-1.5'>

                    <div className='flex items-center justify-between'>
                        <p className=''></p>
                        <div className='flex text-sm w-1/2 justify-center gap-1'>
                            <div className='flex 1stback gap-1'>


                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className=''>Back</span>
                                </button>
                            </div>
                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className=''>Lay</span>

                                </button>

                            </div>
                        </div>

                    </div>

                    {/* 1st Team  */}
                    <div className='flex items-center    justify-between'>
                        <p className=''>YES</p>
                        <div className='flex w-1/2 justify-center gap-1'>
                            <div className='flex 1stback gap-1'>

                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                            </div>
                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>

                            </div>
                        </div>

                    </div>

                    {/* 2nd Team  */}
                    <div className='flex items-center  justify-between'>
                        <p>NO</p>
                        <div className='flex w-1/2 justify-center gap-1'>
                            <div className='flex 1stback gap-1'>

                                <button className='bg-blue-400 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>
                            </div>

                            <div className='flex 2ndlay gap-1'>
                                <button className='bg-pink-400 grid gap-0 px-2.5'>
                                    <span className='font-bold'>1.26</span>
                                    <span className='text-xs'>9.65K</span>
                                </button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>











        </div>
    )
}

export default CricketBet