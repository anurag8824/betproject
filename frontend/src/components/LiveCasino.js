import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../pages/Card'

const LiveCasino = () => {
    return (
        <div>

            <div>

                <div className='flex justify-between'>
                    <p className='font-medium flex gap-2 text-yellow-400 items-center mt-4 text-lg'> <img className='size-4' src='/tash.png' />Live Casino</p>

                    <Link className='font-medium flex gap-2 mr-4 text-gray-400 items-center mt-4 text-sm'> All<img className='size-3' src='/next.svg' /></Link>

                </div>




                <div className='flex mt-2 overflow-x-auto scrollbar-hide gap-4 '>

                    <Link to="#" className="relative flex flex-col items-center justify-center group">
                        <div className="relative w-52 h-32 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                src="/ultimate.png"
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
                        <p className="font-medium text-base"> Roullete</p>
                    </Link>

                    <Link to="#" className="relative flex flex-col items-center justify-center group">
                        <div className="relative w-52 h-32 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                src="/ultimate-roullete.png"
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
                        <p className="font-medium text-base">Ultimate Roullete</p>
                    </Link>



                    <Link to="#" className="relative flex flex-col items-center justify-center group">
                        <div className="relative w-52 h-32 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                src="/1.jpg"
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
                        <p className="font-medium text-base">Crazy Time</p>
                    </Link>


                    <Link to="#" className="relative flex flex-col items-center justify-center group">
                        <div className="relative w-52 h-32 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                src="/2.jpg"
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
                        <p className="font-medium text-base">Gold Vault Roullete</p>
                    </Link>

                    <Link to="#" className="relative flex flex-col items-center justify-center group">
                        <div className="relative w-52 h-32 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                src="/3.jpeg"
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
                        <p className="font-medium text-base">Cricket War </p>
                    </Link>


                    <Link to="#" className="relative flex flex-col items-center justify-center group">
                        <div className="relative w-52 h-32 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                                src="/1.jpg"
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
                        <p className="font-medium text-base">Crazy Time</p>
                    </Link>















                </div>

            </div></div>
    )
}

export default LiveCasino