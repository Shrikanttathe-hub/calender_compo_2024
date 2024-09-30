import React, { useState } from 'react'
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css
import './Home.css';
import { format } from 'date-fns';  
import { enUS } from 'date-fns/locale';



const Home = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
  startDate: new Date(),
  endDate : new Date(),
  key: 'selection',
});

const handleChange = (ranges) => {
 setDate(ranges.selection);
};

const handleClick = () => {
  setOpenDate((prev)=> !prev)
};

  return (
    <div className='container'>
      <span className='calender' onClick={handleClick}>
       Calendar  
      </span>
      { openDate && <DateRangePicker
       locale={enUS}
      className='dateRange'
        ranges={[date]}
        onChange={handleChange}
        minDate={new Date()}
      />}
    </div>
  );
};

export default Home;

// This is the new Calender
