import React from 'react'
import { Link } from 'react-router-dom'

const Sports = () => {
    return (
        <div>

            <div className='flex justify-between'>
                <p className='font-medium flex gap-2 text-yellow-400 items-center mt-4 text-lg'> <img className='size-4' src='/sports.png' />Sports</p>

                <Link className='font-medium flex gap-2 mr-4 text-gray-400 items-center mt-4 text-sm'> All<img className='size-3' src='/next.svg' /></Link>

            </div>

            <div className='flex mt-2 overflow-x-auto scrollbar-hide gap-4 '>

                <Link className="relative py-2 px-12 bg-home-gradient  flex flex-col items-center justify-center rounded-lg gap-1 transform transition-all duration-300 ease-in-out hover:scale-110 ">
                    <img className="size-8 " src="/cricket.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Cricket</p>
                </Link>

                <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className="size-8 " src="/football.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Football</p>
                </Link>


                <Link className="relative py-2 text-center text-nowrap px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className="size-8 " src="/tennis.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Tennis</p>
                </Link>

                <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className="size-8 " src="/basket.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>BasketBall</p>
                </Link>

                <Link className="relative text-center  py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className=" size-8" src="/badminton.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Badminton</p>
                </Link>


                <Link className="relative py-2 text-center text-nowrap px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className="size-8 " src="/baseball.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Base Ball</p>
                </Link>


                <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className="size-8 " src="/darts.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Darts</p>
                </Link>



                <Link className="relative py-2 px-12 bg-home-gradient transform transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center justify-center rounded-lg gap-1 ">
                    <img className="size-8 " src="/golf.png" alt="Poker Icon" />
                    <p className='font-normal text-base'>Golf</p>
                </Link>











            </div>

        </div>
    )
}

export default Sports