import React from 'react'
import '../../styles/Section3.css'

const Section3 = () => {
  return (
    <>
      <div className="sec3main" >
        <div className="secshadowBottom">

        </div>
        <video autoPlay loop muted playsInline className='sec3video'>
          <source src="https://res.cloudinary.com/dcnzz5dat/video/upload/v1708080020/atpswrfueyc4ljnyshlq.mp4" type='video/mp4' />

        </video>
        <div className="overlay"></div>
        <div className="sec3right">
          <p className="sec3mini" data-aos="fade-right"
            data-aos-duration="3000">Modern ideas</p>
          <p className="sec3head" data-aos="fade-right"
            data-aos-duration="3000">We help you discover
            the metaverse</p>
          <p className="sec3para" data-aos="fade-right"
            data-aos-duration="3000">In the ever-evolving landscape of technology, the convergence of
            artificial intelligence (AI), blockchain, and virtual reality is giving rise
            to groundbreaking innovations. One such innovation that has caught the attention
            of both tech enthusiasts and gambling aficionados is the emergence of AI-based
            metaverse casinos on the blockchain. </p>

          <button className="btn" data-aos="fade-left"
            data-aos-duration="3000">
            Explore
          </button>

        </div>
        <div className="shadowBot">

        </div>
      </div>

    </>
  )
}

export default Section3