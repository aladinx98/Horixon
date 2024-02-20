import React from 'react'
import '../../styles/Section7.css'
const Section7 = () => {
  return (
    <>
      <div className="sec7main">
        <div className="sec4shadowTop">

        </div>
        <video autoPlay loop muted playsInline className='sec7video'>
          <source src='https://res.cloudinary.com/dcnzz5dat/video/upload/v1708080129/p2jsxgesec1zlvozp6dh.mp4' type='video/mp4' />

        </video>
        <div className="overlay2"></div>
        <div className="sec7right">
          <p className="sec7mini" data-aos="fade-right"
            data-aos-duration="3000">Modern ideas</p>
          <p className="sec7head" data-aos="fade-right"
            data-aos-duration="3000">AR-VR Casino Lounge</p>
          <p className="sec7para" data-aos="fade-right"
            data-aos-duration="3000">A sophisticated casino lounge offers a variety of classic casino games, such as poker, blackjack, and roulette. AR enhances real-world surfaces with virtual casino tables, while VR transports players to extravagant casino environments. AI ensures adaptive difficulty and personalized gaming experiences. </p>
          <button className="btn" data-aos="fade-left"
            data-aos-duration="3000">
            Explore
          </button>

        </div>
        <div className="secshadowBottom">

        </div>
      </div>
    </>
  )
}

export default Section7