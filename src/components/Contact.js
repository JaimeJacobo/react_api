import React from 'react'
import './Contact.css'

const Contact = (props)=>{
  return(
    <div className="Contact">
      <img src={props.image} alt={props.name} className="avatar"/>
    </div>
  )
}


export default Contact