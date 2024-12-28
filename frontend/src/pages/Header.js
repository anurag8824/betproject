import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { LuHome } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { LiaTrophySolid } from "react-icons/lia";
import { PiSpinnerBallBold } from "react-icons/pi";
import { FaWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




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
        <nav class="px-4 lg:px-6 bg-emerald-700  dark:bg-gray-800">
          <div class="flex flex-wrap  md:justify-between justify-between items-center mx-auto max-w-screen-xl">

            <Link className='py-4 w-20 h-8' to="/">
              {/* <img className='' src="/saf.png" /> */}
            </Link>




            <div class="flex items-center  lg:order-2">

              <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={menuOpen ? "true" : "false"}
                onClick={toggleMenu} >
                <span class="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg
                  className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>

            <div
              className={`${menuOpen ? "block" : "hidden"
                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >

              <ul class="flex flex-col items-center font-medium lg:flex-row lg:space-x-4 lg:mt-0 ">

                <li>
                  <Link href={"/login"}
                    className="block text-white px-8 py-2  font-bold  transition-all outline-none">Lottery
                  </Link>
                </li>


                <li>
                  <Link href={"/login"}
                    className="block text-white px-8 py-2 font-bold transition-all outline-none">SportBook1
                  </Link>
                </li>



                <li>
                  <Link href={"/login"}
                    className="block text-white px-8 py-2  font-bold   transition-all outline-none">Exchange
                  </Link>
                </li>



                <li>
                  <Link onClick={toggleCloseMenu} to={"/owncasino"}
                    className="block text-white px-8 py-2  font-bold   transition-all outline-none">Live Casino
                  </Link>
                </li>

                <li>
                  <Link href={"/login"}
                    className="block text-white px-8 py-2 font-bold   transition-all outline-none">Slot
                  </Link>
                </li>


                <li>
                  <Link href={"/login"}
                    className="block text-white px-8 py-2 font-bold   transition-all outline-none">Fantasy Games
                  </Link>
                </li>










              </ul>

            </div>



          </div>
        </nav>

        <div className='bg-gray-100 flex justify-between '>
          <img className='h-12' src="/infa.png" alt='fgh' />

          <div className='flex gap-4'>

            <div className=' justify-between items-center pr-2 bg-black w-32 flex'>

              <div className='bg-gray-600 py-3 px-3'>

                <FaWallet className='w-6 h-6  text-white ' />

              </div>



              <div className='text-white text-sm '>
                <p className=''>Pts:1500</p>
                <p className=''>Exp:0</p>

              </div>





            </div>

            <div className=' justify-between items-center pr-2 bg-black w-32 flex'>

              <div className='bg-gray-600 py-3 px-3'>

                <FaUser className='w-6 h-6  text-white ' />

              </div>



              <div className='text-white text-sm '>
                <p className=''>Demo</p>


              </div>





            </div>

          </div>


        </div>

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