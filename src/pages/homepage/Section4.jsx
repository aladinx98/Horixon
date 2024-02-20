import React from 'react'
import '../../styles/Section4.css'
const Section4 = () => {
  return (
    <>
      <div className="sec4main">
        <div className="sec4shadowTop">

        </div>
        <video autoPlay loop muted playsInline className='sec4video'>
          <source src="https://res.cloudinary.com/dcnzz5dat/video/upload/v1708080130/uzj23fupfoaeyxxnfk6b.mp4" type='video/mp4' />
        </video>

        <div className="sec4content" data-aos="zoom-in" data-aos-duration="3000">
          <p className="sec4mini">endless reality</p>
          <p className="sec4head">Discover the opportunities of <br />
            METAVERSE</p>
          <button className="btn" >
            Explore
          </button>
        </div>
        <div className="secshadowBottom">

        </div>
      </div>
    </>
  )
}

export default Section4