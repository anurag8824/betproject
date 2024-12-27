import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <Link to="#" className="relative flex flex-col items-center justify-center group">
            <div className="relative w-60 h-40 border border-gray-100 border-opacity-10 rounded-xl overflow-hidden">
                {/* Image */}
                <img
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110"
                    src="/flymin.jpg"
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
    )
}

export default Card