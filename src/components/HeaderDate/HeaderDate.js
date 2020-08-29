import React from "react";
import "./HeaderDate.css"
const HeaderDate=()=>{
    const date=new Date()
    const day=date.getDay()
    const month=date.getMonth()
    const year=date.getFullYear()
    console.log(date)

    const getDayN=()=> {
        var d = new Date();
        var weekday = new Array(d);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        const n = weekday[d.getDay()]
      return n
    }
    return(
        <div id = "header">
            <p id="day">{`${day}`}</p>
            <div id="month">
              <p id="monthP">{`${month}`}</p>
              <p id="year">{`${year}`}</p> 
            </div>
            <p id="N">{getDayN()}</p>
        </div>
    )
}

export default HeaderDate;