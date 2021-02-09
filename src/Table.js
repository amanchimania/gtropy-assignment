import React, { useEffect, useState } from "react";
import "./index.css";

function Table() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((r) => r.json())
      .then((arr) => {
        setArr(arr.statewise);
        console.log(arr.statewise)
      });
  }, []);

  return (
    <div>
      <span>
        <img src="https://i.pinimg.com/originals/86/6b/40/866b4031b068d5affaf958382d082a78.jpg" className="logo"></img>
        <span id="heading">INDIA Covid-19 Tracker</span>
      </span>
      <br></br>
      <table id="customers">
        <tr><th>State</th><th>Confirmed</th><th>Active</th><th>Recovered</th><th>Decreased</th></tr>
        {arr.map((statewise, idx) => (
          <tr key={idx}>
            <td >
              {statewise.state}
            </td>
            <td >
              {statewise.confirmed}
            </td>
            <td >
              {statewise.active}
            </td>
            <td >
              {statewise.recovered}
            </td>
            <td >
              {statewise.deaths}
            </td>
          </tr>
        ))}
      </table>
      </div>
  );
}
export default Table;
