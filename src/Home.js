import React, { useState } from 'react'
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css
import './Home.css';
import { format } from 'date-fns';

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

// const handleClick = () => {
//   setOpenDate((prev)=> !prev)
// };

  return (
    <div className='container'>
      <span className='calender' >
       { `${format(date.startDate, 'MMM,dd,yyyy')} to ${format(date.endDate, 'MMM,dd,yyyy')}`}
      </span>
      { <DateRangePicker
      className='dateRange'
        ranges={[date]}
        onChange={handleChange}
        minDate={new Date()}
      />}
    </div>
  );
};

export default Home;
