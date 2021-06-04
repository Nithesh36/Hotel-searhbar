import React  from 'react'
const List=(props)=>{



    return(

<ul>
        <li> {`Hotel name ${props.hotelname}`}</li>
        <li> {`Rooms available ${props.Roomava}`}</li>
<li>{`cost is ${props.cost}`}</li>


        </ul>
    )
}



export default List;

