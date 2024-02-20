import React from 'react'
import Image1 from '../../image/images/shopping.png'
import Image2 from '../../image/images/women.png'
import Image3 from '../../image/images/sale.png'
import Slider from "react-slick";
import {  useContext} from 'react'
import myContext from '../../context/data/myContext'

const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const HeroSection = ({ handleOrderPopup }) => {
    const context = useContext(myContext)
    const {mode} = context
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      pauseOnFocus: true,
    };   
    return (
      <div className='relative overflow-hidden min-h-[500px] sm:min-h-[600px] bg-orange-400 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'
      style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className='h-[600px] w-[600px] bg-pink-500 absolute -top-1/2  right-0 rounded-3xl rotate-45 -z[8]'></div>
        {/* heroSection */}
        <div className='container pb-4 sm:pb-0'>
        <Slider {...settings}>
            {
              ImageList.map((data) => (
                <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2' >
                    {/* text content */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                      <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                      <p className='text-sm'>{data.description}</p>
                      <div>
                        <button
                        className='bg-slate-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                        >Order Now</button>
                      </div>
                    </div>
                    {/* Image section */}
                    <div className='order-1 sm:order-2'>
                      <div className='relative z-10'>
                        <img src={data.img} alt=''
                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                      </div>
                    </div>
                  </div>
                </div>
              ))  
            }    
        </Slider>         
        </div>
      </div> 
    )      
};


export default HeroSection
