import count from '../../assets/count.jpg';
import './count.css';
import { FaGift, FaHeadphonesAlt, FaShippingFast, FaUndoAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
function Count() {
    const [time,setTime]=useState(5*24*60*60*1000);
    const [day,setDay]=useState(0)
    const [hours,setHours]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [seconds,setSeconds]=useState(0)
    useEffect(()=>{
      const timeSet=  setTimeout(()=>{
            setTime(time-1000)
        },1000)
        getFormatTime(time)
        return ()=>{
            clearTimeout(timeSet)
        }
    },[time]);
    const getFormatTime=(mili)=>{
        let total_seconds=parseInt(Math.floor(mili/1000));
        let total_minutes=parseInt(Math.floor(total_seconds/60));
        let total_hours=parseInt(Math.floor(total_minutes/60));
        let days=parseInt(Math.floor(total_hours/24));

        let seconds=parseInt(total_seconds%60)
        let minutes=parseInt(total_minutes%60)
        let hours=parseInt(total_hours%24)
        setSeconds(seconds)
        setHours(hours)
        setMinutes(minutes)
        setDay(days)
    }
    return ( <>
        <div className='count'>
        <div className='count__content'>
        <h3>Summer Dress</h3>
        <div className='count_grid'>

        <h1>50</h1>
        <h3>%</h3>
        <h2>OFF</h2>
        </div>
        </div>
        <div className='count_flex'>
        <div className='count__image'>
                
    
        <img src={count} />
       
        </div>
        <div className='count_right'>
            <p>Limited Time Promotion</p>
           <div className='count_total'>
           <div className='count_time'>
                <h2>{day}</h2>
                days
            </div><span>:</span>
                <div className='count_time'>
                <h2>{hours}</h2>
                    hours
                </div><span>:</span>
                <div className='count_time'>
                <h2>{minutes}</h2>
                    minutes
                </div><span>:</span>
                <div className='count_time'>
                <h2>{seconds}</h2>
                    seconds
                </div>
           </div>
           <button>SHOP NOW</button>
        </div>
        </div>
        
            <div className='count__footer'>
               <div className='count_item'>
               <span><FaShippingFast/> Free Standard Delivery</span>
                <span><FaUndoAlt/> 7 Day Free return</span>
                <span><FaHeadphonesAlt/> Dedicated Online Support</span>
                <span><FaGift/> Free Gift Wrapping</span>
               </div>

            </div>
        </div>
    </> );
}

export default Count;