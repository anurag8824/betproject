import React, { useRef, useState,useEffect } from 'react'
import './CustomScrollbar.css';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import TopChoices from '../components/TopChoices';
import LiveCasino from '../components/LiveCasino';
import Sports from '../components/Sports';
import Cricket from '../components/Cricket';
import TableGames from '../components/TableGames';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import data from "../AllSports.json"
import axios from 'axios';




const HomePage = () => {


  
  const scrollContainerRef = useRef(null);
  const [activeId, setActiveId] = useState([1002]);

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleButtonClick = (id) => {
    setActiveId(id);
  };





  const componentMapping = {
    1001: <LiveCasino />,

    1002: <Cricket />, // Map id to component
    // Add more mappings
  };












  return (

    <div className='w-full'>
      <div className='text-white hidden  relative overflow-x-hidden'>

        <div className='flex overflow-x-auto  scrollbar-hide  gap-4'>

          <Link className='flex relative bg-icon-gradient rounded-lg items-center gap-2 md:px-4 px-8 py-2 font-bold text-lg '>
            <img className='size-8 animate-up-and-down' src='/home.png' />
            <p>Lobby</p>
          </Link>


          <Link className='flex relative bg-home-gradient hover:bg-icon-gradient rounded-lg items-center gap-2 md:px-4 px-8 py-2 font-bold text-lg '>
            <img className='size-8 ' src='/throw.png' />
            <p>Sports</p>
          </Link>


          <Link className='flex relative bg-home-gradient hover:bg-icon-gradient rounded-lg items-center gap-2 md:px-4 px-8 py-2 font-bold text-lg '>
            <img className='size-8 ' src='/poker.png' />
            <p>Casino </p>
          </Link>


          <Link className='flex relative bg-home-gradient hover:bg-icon-gradient rounded-lg items-center gap-2 md:px-4 px-8 py-2 font-bold text-lg '>
            <img className='size-8 ' src='/game.png' />
            <p>Mini Games</p>
          </Link>

          <Link className='flex relative bg-home-gradient hover:bg-icon-gradient rounded-lg items-center gap-2 md:px-4 px-8 font-bold text-lg '>
            <img className='size-8 ' src='/casino-chip.png' />
            <p>Table Games</p>

          </Link><Link className='flex relative bg-home-gradient hover:bg-icon-gradient rounded-lg items-center gap-2 md:px-4 px-8 font-bold text-lg '>
            <img className='size-8 ' src='/slot-machine.png' />
            <p>Slot</p>
          </Link>



        </div>

        {/* <Carousel /> */}

        <TopChoices />

        <LiveCasino />

        <Sports />

        {/* <HotMini /> */}
        <TableGames />











      </div>
      <Carousel />





      <div className='relative  px-8'>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2  px-3 py-2 rounded-full z-10"
          onClick={scrollLeft}
        >
          {/* &#8592; */}
          <FaAngleLeft />
        </button>

        <div ref={scrollContainerRef} className='text-sm flex overflow-x-scroll scrollbar-hide  text-nowrap flex-shrink-0 gap-1  py-3'>
          {data.map((item) => (
            item ? (
              <button
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
                className={`px-4 flex-grow min-w-fit  flex items-center gap-2 py-2 ${activeId === item.id
                  ? 'bg-blue-950 text-white'
                  : 'bg-gray-100 text-black'
                  }`}>
                <img className='h-5 w-5' src={item.image} />
                <span>{item.title}</span>
              </button>
            ) : ""
          ))}
        </div>


        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-full z-10"
          onClick={scrollRight}
        >
          <FaAngleRight />

        </button>






      </div>


      <div className="mt-4 my-4 p-4 ml-1 mr-2 bg-gray-100">
        {activeId ? (
          componentMapping[activeId] || <p>Component not found.</p>
        ) : (
          <p>Select an option to see the content.</p>
        )}
      </div>




    </div>




  )
}

export default HomePage