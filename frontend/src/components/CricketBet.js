import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CricketBet = () => {
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState("");
    const [showDiv, setShowDiv] = useState(false);
    const [betValue, setBetValue] = useState(null);

    const handleAmountClick = (value) => {
        setAmount(value)
    }

    const handleShowBet = (value) => {
        setBetValue(value);
        setShowDiv(true);
    };

    const [bookData, setBookData] = useState([]);
    const [bookMaker, setBookMaker] = useState([]);
    const [bookMaker2, setBookMaker2] = useState([]);
    const [normal, setNormal] = useState([]);






    const gameid = useParams().id

    console.log(gameid)

    useEffect(() => {
        // Function to fetch data
        const fetchOdds = () => {
            axios.get(`https://diamond-sports-betting-api.p.rapidapi.com/getPriveteData?gmid=${gameid}&sid=4`,
                {
                    headers: {
                        'x-rapidapi-key': '2d7be9d9ccmsh85237b147206023p1d2d17jsned65040086f6',
                        'x-rapidapi-host': 'diamond-sports-betting-api.p.rapidapi.com'
                    }
                }
            )
                .then((res) => {
                    console.log(res, "odds fetched");
                    if (res.data.data && res.data.data.length > 0) {
                        setData(res.data.data[0]); // Assuming you want the first item
                    }
                    const bookmaker = res.data.data.filter((item => item.mname === "Bookmaker"))
                    const bookmaker2 = res.data.data.filter((item => item.mname === "Bookmaker 2"))
                    const normalo = res.data.data.filter((item => item.mname === "Normal"))


                    console.log(normalo, "bookmkaker goet");
                    setBookMaker(bookmaker)
                    setBookMaker2(bookmaker2)
                    setNormal(normalo)

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
    }, [gameid]); // Dependency on marketid to refetch if it changes





    useEffect(() => {
        // Function to fetch data
        const fetchOdds = () => {
            axios.get(`https://diamond-sports-betting-api.p.rapidapi.com/tv?sid=4&gmid=${gameid}`,
                {
                    headers: {
                        'x-rapidapi-key': '2d7be9d9ccmsh85237b147206023p1d2d17jsned65040086f6',
                        'x-rapidapi-host': 'diamond-sports-betting-api.p.rapidapi.com'
                    }
                }
            )
                .then((res) => {
                    console.log(res, "tv link fetched");
                    if (res.data) {
                        setBookData(res.data.data); // Assuming you want the first item
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
    }, [gameid]);

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(2) + "K";
        }
        return num.toFixed(2);
    };

    return (
        <div className='md:flex gap-1 relative'>



            <div className='md:w-3/4'>
                <div className='bg-blue-950 px-2.5 hidden fljjex  justify-between text-white py-1 gap-2 '>
                    <img className='h-5 w-5' src='/cricket (3).png' />

                    <span>Australia Vs India</span>
                    <span>19th Feb, 2023</span>


                </div>

                Live Stream
                <div className="iframe-container">
                    <iframe
                        src={bookData.url}
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
                        {data?.section?.map((item) => (
                            item ? (

                                <div className='flex items-center w-full   justify-between'>
                                    <p className=''>{item.nat}</p>
                                    <div className='flex w-1/2 justify-center gap-1'>

                                        <div className='flex 1stback gap-1'>

                                            {item?.odds?.map((item) => (
                                                item ? (

                                                    <button className={`${item.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-16 grid gap-0 px-2.5`}>
                                                        <span className='font-bold'>{item.odds}</span>
                                                        <span className='text-xs'>{formatNumber(item.size)}</span>
                                                    </button>

                                                ) : ""
                                            ))}

                                        </div>


                                    </div>

                                </div>

                            ) : ""
                        ))}




                    </div>

                </div>





                {bookMaker[0]?.length > 0 ?

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





                            {bookMaker[0]?.section?.map((item) => (
                                item ? (
                                    <div className='flex items-center    justify-between'>
                                        <p className=''>{item.nat}</p>



                                        <div className='flex w-1/2 justify-center gap-1'>
                                            {item?.odds?.map((item, index) => (
                                                item ? (
                                                    <div className='flex 1stback gap-1'>
                                                        <button key={index} className={`${item?.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-16  grid gap-0 px-2.5`}>
                                                            <span className='font-bold'>{item?.odds}</span>
                                                            <span className='text-xs'>{item?.size}</span>
                                                        </button>



                                                    </div>
                                                ) : ""
                                            ))}

                                        </div>
                                    </div>

                                ) : ""
                            ))}





                        </div>

                    </div>
                    : ""}

                {bookMaker2[0]?.length > 0 ?
                    <div className='BOOKMAKER 2 DIv  '>

                        <div className='flex items-center   font-medium mt-2 justify-between py-2 px-4 text-white bg-emerald-700'>
                            <p>BOOKMAKER 2</p>
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





                            {bookMaker2[0]?.section?.map((item) => (
                                item ? (
                                    <div className='flex items-center    justify-between'>
                                        <p className=''>{item.nat}</p>



                                        <div className='flex w-1/2 justify-center gap-1'>
                                            {item.odds.map((item, index) => (
                                                item ? (
                                                    <div className='flex 1stback gap-1'>
                                                        <button key={index} className={`${item?.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-16  grid gap-0 px-2.5`}>
                                                            <span className='font-bold'>{item.odds}</span>
                                                            <span className='text-xs'>{item.size}</span>
                                                        </button>



                                                    </div>
                                                ) : ""
                                            ))}

                                        </div>
                                    </div>

                                ) : ""
                            ))}





                        </div>

                    </div>
                    : ""}


                {normal[0]?.length > 0 ?

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

                            {normal[0]?.section?.map((item) => (
                                item ? (
                                    <div className='flex items-center border-b pb-0.5   justify-between'>
                                        <p className='text-sm'>{item.nat}</p>
                                        <div className='flex w-1/2 justify-center gap-1'>

                                            <div className='flex flex-row-reverse 1stback gap-1'>
                                                {item?.odds?.map((item, index) => (
                                                    item ? (
                                                        <button key={index} className={`${item?.otype === "back" ? 'bg-blue-400' : 'bg-pink-400'} w-16 grid gap-0 px-2.5`}>
                                                            <span className='font-bold'>{item?.odds}</span>
                                                            <span className='text-xs'>{item?.size}</span>
                                                        </button>
                                                    ) : ""
                                                ))}


                                            </div>

                                        </div>

                                    </div>


                                ) : ""
                            ))}



                        </div>

                    </div>
                    : ""}


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

                                    <button onClick={() => handleShowBet(1.26)} className='bg-blue-400 grid gap-0 px-2.5'>
                                        <span className='font-bold'>1.26</span>
                                        <span className='text-xs'>9.65K</span>
                                    </button>
                                </div>
                                <div className='flex 2ndlay gap-1'>
                                    <button onClick={() => handleShowBet(1.28)} className='bg-pink-400  grid gap-0 px-2.5'>
                                        <span className='font-bold'>1.28</span>
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

            {showDiv && (
                <>
                    {/* For large screens */}
                    <div className="hidden md:block fixed w-[280px] md:w-1/s4 right-0 relastive bg-gray-200  p-4 roujnded-lg shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowDiv(false)}
                            className="absolute top-2 right-2 text-white bg-red-500 w-6 h-6 rounded-full flex items-center justify-center font-bold hover:bg-red-600"
                        >
                            X
                        </button>
                        {/* Content */}

                        <div className=''>

                            <form class="max-w-sm mt-4 mx-auto">

                                <div className='flex font-medium  text-sm justify-between'>
                                    <p>Sri Lanka</p>
                                    <div>{betValue}</div>
                                </div>

                                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mt-4 px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />

                                <div className='text-sm'>Profit: {amount * betValue}</div>
                            </form>
                            <div className="mt-1 fledx grid grid-cols-4 gap-1">
                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(1000)}
                                >
                                    1K
                                </button>
                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(2000)}
                                >
                                    2K
                                </button>
                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(5000)}
                                >
                                    5K
                                </button>

                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(10000)}
                                >
                                    10K
                                </button>

                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(20000)}
                                >
                                    20K
                                </button>

                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(25000)}
                                >
                                    25K
                                </button>

                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(50000)}
                                >
                                    50K
                                </button>

                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(75000)}
                                >
                                    75K
                                </button>

                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(90000)}
                                >
                                    90K
                                </button>


                                <button
                                    className="bg-green-800 text-white px-4 py-2 "
                                    onClick={() => handleAmountClick(95000)}
                                >
                                    95K
                                </button>
                            </div>

                            <button
                                className="bg-green-800 w-full text-white px-4 mt-2 py-1"
                            // onClick={() => handleAmountClick(2000)}
                            >
                                Place Bet
                            </button>

                        </div>



                    </div>

                    {/* For small screens */}
                    <div className="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-gray-300 p-6 roundjed-lg shadow-lg w-11/12 max-h-3/4 overflow-y-auto relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowDiv(false)}
                                className="absolute top-4 right-4 text-white bg-red-500 w-8 h-8 rounded-full flex items-center justify-center font-bold hover:bg-red-600"
                            >
                                X
                            </button>
                            {/* Content */}
                            <div className=''>

                                <form class="max-w-sm mt-4 mdddx-auto">

                                    <div className='flex  font-medium  text-sm justify-between'>
                                        <p>Sri Lanka</p>
                                        <div>{betValue}</div>
                                    </div>

                                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mt-4 px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
                                    <div className='text-sm'>Profit: {amount * betValue}</div>
                                </form>
                                <div className="mt-1 fledx grid grid-cols-4 gap-1">
                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(1000)}
                                    >
                                        1K
                                    </button>
                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(2000)}
                                    >
                                        2K
                                    </button>
                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(5000)}
                                    >
                                        5K
                                    </button>

                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(10000)}
                                    >
                                        10K
                                    </button>

                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(20000)}
                                    >
                                        20K
                                    </button>

                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(25000)}
                                    >
                                        25K
                                    </button>

                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(50000)}
                                    >
                                        50K
                                    </button>

                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(75000)}
                                    >
                                        75K
                                    </button>

                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(90000)}
                                    >
                                        90K
                                    </button>


                                    <button
                                        className="bg-green-800 text-white px-4 py-2 "
                                        onClick={() => handleAmountClick(95000)}
                                    >
                                        95K
                                    </button>
                                </div>

                                <button
                                    className="bg-green-800 w-full text-white px-4 mt-2 py-1"
                                // onClick={() => handleAmountClick(2000)}
                                >
                                    Place Bet
                                </button>

                            </div>
                        </div>
                    </div>
                </>
            )}




        </div>
    )
}

export default CricketBet