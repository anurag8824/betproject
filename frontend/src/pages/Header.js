import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { LuHome } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { LiaTrophySolid } from "react-icons/lia";
import { PiSpinnerBallBold } from "react-icons/pi";
import { FaWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import TopHeader from './TopHeader';




const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCloseMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div>

      <header className='bg-pin-500  fixed w-full  top-0 z-50 '>
        <TopHeader />

        <div className='md:block hidden fixed h-full w-56 mt-1 bg-gray-200 '>

          <p className='bg-emerald-700 text-white text-base px-2 font-bold'>Racing Sports</p>

          <ul className='text-sm space-y-2 py-3'>
            <li className='pl-4 flex items-center gap-2'><img className='h-5 w-5' src='/horse.png' />
              <span> Horse Racing</span>
            </li>

            <li className='pl-4 flex items-center gap-2'><img className='h-5 w-5' src='/dog.png' />
              <span>Greyhound Racing</span>
            </li>
          </ul>

          <p className='bg-emerald-700 text-white text-base px-2 font-bold'>All Sports</p>

          <div className='h-96 overflow-y-scroll'>


            <ul className='text-sm py-3 space-y-2'>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/politician.png' />
                <span>Politics (1)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/cricket (3).png' />
                <span>Cricket (22)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/football (1).png' />
                <span>Football (56)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/tennis (1).png' />
                <span>Tennis (49)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/table-tennis.png' />
                <span>Table Tennis (135)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/badminton(1).png' />
                <span>Badminton</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/goal.png' />
                <span>Esoccer (21)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/basket.png' />
                <span>Basketball (41)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/volleyball.png' />
                <span>Volleyball (22)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/pool.png' />
                <span>Snooker</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/ice-hockey.png' />
                <span>Ice Hockey (35)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/game.png' />
                <span>E Games (3)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/futsal.png' />
                <span>Futsal (2)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/handball.png' />
                <span>Handball</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/kabaddi.png' />
                <span>Kabaddi (2)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/golf (1).png' />
                <span>Golf</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/rugby.png' />
                <span>Rugby League</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/boxing-gloves.png' />
                <span>Boxing (1)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/beach-volleyball.png' />
                <span>Beach Volleyball</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/martial-arts.png' />
                <span>Mixed Martial Arts</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/motorbike.png' />
                <span>MotoGP</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/chess.png' />
                <span>Chess (4)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/bicycle.png' />
                <span>Cycling</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/motorbike (1).png' />
                <span>Motorbikes</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/runner.png' />
                <span>Athletics</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/basket.png' />
                <span>Basketball 3X3</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/sumo.png' />
                <span>Sumo</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/virtual-reality-fitness.png' />
                <span>Virtual sports (1)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/motor-sports.png' />
                <span>Motor Sports</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/baseball.png' />
                <span>Baseball</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/rugbyuni.png' />
                <span>Rugby Union</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/target.png' />
                <span>Darts</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/american-football.png' />
                <span>American Football (1)</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/football.png' />
                <span>Soccer</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/game.png' />
                <span>Esports</span>
              </li>
              <li className='pl-4 flex items-center gap-2'>
                <img className='h-5 w-5' src='/dragon-boat.png' />
                <span>Boat Racing</span>
              </li>
            </ul>



          </div>







        </div>


      </header>



    </div>
  )
}

export default Header