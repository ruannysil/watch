// import { date } from 'faker/lib/locales/az';
import React, { useState } from 'react';
import './Hours.css';
function Hours() {
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);
    function Watch(){
     
    }
    setInterval(function(){
      let dateToday = new Date();
      let hours = dateToday.getHours();
      let minutes = dateToday.getMinutes();
      let seconds = dateToday.getSeconds();

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    },1000);
   
  return (
    
    <div className='Container'>
        <div className='Watch'>

            <div>
            <span id='hours'>{Hours}</span>
            <span className='time'>Horas</span>
            </div>

            <span className='divider'>:</span>

            <div>
            <span id='minutes'>{Minutes}</span>
            <span className='time'>Minutos</span>
            </div>
            
            <span className='divider'>:</span>

            <div>
            <span id='seconds'>{Seconds}</span>
            <span className='time'>Segundos</span>
            </div>

        </div>
    </div>
  )
}

export default Hours



    