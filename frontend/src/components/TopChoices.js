import React from 'react'
import { Link } from 'react-router-dom'

const TopChoices = () => {
    return (
        <div>
            <div>

                <p className='font-medium flex gap-2 text-yellow-400 items-center mt-4 text-lg'> <img className='size-4' src='/trophyy.png' />Top Choices</p>

                <div className='flex mt-2 overflow-x-auto scrollbar-hide gap-4 '>

                    <Link className="relative py-2 px-12 bg-home-gradient  flex flex-col items-center justify-center rounded-lg gap-1 transform transition-all duration-300 ease-in-out hover:scale-110 ">
                        <img className="size-8 " src="/mines.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Mines</p>
                    </Link>

                    <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className="size-8 " src="/aviator.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Aviator</p>
                    </Link>


                    <Link className="relative py-2 text-center text-nowrap px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className="size-8 " src="/live-casino.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Live Casino</p>
                    </Link>

                    <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className="size-8 " src="/jetx.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Jetx</p>
                    </Link>

                    <Link className="relative text-center  py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className=" " src="/crex.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Cricket Exchange</p>
                    </Link>


                    <Link className="relative py-2 text-center text-nowrap px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className="size-8 " src="/lucky-spin.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Lucky Spin</p>
                    </Link>


                    <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className="size-8 " src="/bonus.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Bonus</p>
                    </Link>



                    <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                        <img className="size-8 " src="/deposit.png" alt="Poker Icon" />
                        <p className='font-normal text-base'>Deposit</p>
                    </Link>











                </div>

            </div>

        </div>
    )
}

export default TopChoices