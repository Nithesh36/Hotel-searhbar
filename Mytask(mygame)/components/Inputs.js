import React, { useState } from "react";

import List from "../Hoteldata";

const City = [
  {
    cityname: "Coimbatore",
    id: "1",
    Hotelname: "green park",
    Rooms: 15,
    RoomsAvailable: 5,
    cost: 2000,
    Dateavailability1:'2021-01-21',
    Dateavailability2:'2021-01-04'
  
  },

  {
    cityname: "Madurai",
    id: "2",
    Hotelname: "Lotus ",
    Rooms: 20,
    RoomsAvailable: 10,
    cost: 3000,
    Dateavailability1:'2021-01-21',
    Dateavailability2:'2021-02-04'
  
  },
  {
    cityname: "Salem",
    id: "3",
    Hotelname: "Pineapple and services",
    Rooms: 15,
    RoomsAvailable: 8,

    cost: 1000,
    Dateavailability1:'2021-02-21',
    Dateavailability2:'2021-03-04'
  },
];
const InputCity = (props) => {
  const Renderdata = () => {
    return City.filter((userdata) => {
      if (
        userdata.cityname !== inpvalue ||
        Roomcount > userdata.RoomsAvailable ||
        userdata.cityname === "."
      )
        return console.log("sorry place not found");
      else
        return (
          userdata.cityname === inpvalue && Roomcount <= userdata.RoomsAvailable && (userdata.Dateavailability1===date || userdata.Dateavailability2===date)
        );
    }).map((list) => {
      console.log(list);
      return (
        <List
          style={{
            positon: "relative",
            top: "20px",
            width: "40px",
            backgroundColor: "green",
          }}
          cost={list.cost}
          hotelname={list.Hotelname}
          Roomava={list.RoomsAvailable}
        />
      );
    });
  };
  const [inpvalue, setinp] = useState("");
  const [Roomcount, setRoomcount] = useState(1);
  const [modal, showmodal] = useState(false);

  const [hoteldata, checkHotel] = useState(false);

  const [date,setdate]=useState();
  console.log(`state is ${(date)}`);
  return (
    <>
      <input
        type="text"
        name="City"
        style={{ width: "12rem", height: "30px", outline: "none" }}
        placeholder="search by city"
        onChange={(e) => setinp(e.target.value)}
      /><input type="date" style={{width:'12rem',height:'30px'}}   onChange={(e)=>setdate (e.target.value)} />
      <button onClick={() => showmodal(!modal)}>Room1 ,Guests{Roomcount}</button>
      <button className='btn'
       
        onClick={() => checkHotel(!hoteldata)}
       >
        Search
      </button>
      {modal && (
        <div
          style={{
            width: "240px",
            backgroundColor: "lightblue",
            height: "160px",
            position: "relative",
            top: "0",
            left: "5rem",
            border: "1px solid gray",
          }}
        >
          <div style={{ margin: "0px auto" }}>
            <span>
              <b>Rooms</b>
            </span>
            <span style={{ margin: "10px" }}>Room1</span>
            <span style={{ margin: "20px" }}>Room2</span>
            <br></br>
            <span>Guests</span>

            <input
              type="button"
              name=""
              value="-"
              style={{ margin: "10px" }}
              onClick={() => {
                if (Roomcount > 0) setRoomcount(Roomcount - 1);
              }}
            />

            <span style={{ margin: "5px" }}>{Roomcount}</span>
            <input
              type="button"
              name=""
              value="+"
              onClick={() => setRoomcount(Roomcount + 1)}
            />

            <input type="button" name="" value="-" style={{ margin: "10px" }} />

            <span>{"0"}</span>
            <input type="button" name="" value="+" style={{ margin: "10px" }} />
          </div>
          <div></div>
        </div>
      )}

      {hoteldata && <Renderdata />}
    </>
  );
};

export default InputCity;
