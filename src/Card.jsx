import React from 'react'
import profilePic from './assets/profile-picture.jpg'

const Card = () => {
  return (
    <div className='card'>
        <img className='card-image' src={profilePic} alt='profile picture'></img>
        <h2 className='card-title'>Melike Demiralay</h2>
        <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, odit dolor nisi sit at suscipit iste nulla exercitationem provident illo hic laborum aspernatur temporibus, doloribus magnam, praesentium enim! Sequi, error?</p>

    </div>
  )
}

export default Card
