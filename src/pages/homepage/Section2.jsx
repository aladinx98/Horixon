import React from 'react'
import '../../styles/Section2.css'
import sec2img from '../../assets/surfer1.webp'
const Section2 = () => {
  return (
    <>
      <div className="sec2main" id='about'>
        <div className="sec2content">
          <div className="sec2left">
            <img src={sec2img} alt="" style={{ width: "100%", height: "100%" }} />
            <div className="shadow">

            </div>
          </div>
          <div className="sec2right">
            <p className="sec2mini" data-aos="fade-left"
              data-aos-duration="3000">Horixon Odyssey</p>
            <p className="sec2head" data-aos="fade-left"
              data-aos-duration="3000">Navigating the Next Wave of Digital Innovation</p>
            <p className="sec2para" data-aos="fade-left"
              data-aos-duration="3000">Embark on a journey through cutting-edge technology with Horixon.
              In a world where artificial intelligence, blockchain, and virtual reality converge, we redefine
              the digital landscape. Dive into futuristic metaverse casinos powered by AI on the blockchain,
              exploring a realm where innovation meets entertainment. Join us on a transformative exploration
              of the metaverse, where modern ideas shape the future of technology, gaming, and digital experiences. </p>

            <button className="btn" data-aos="fade-left"
              data-aos-duration="3000">
              Explore
            </button>

          </div>
        </div>
        {/* <div className="shadow" style={{zIndex:1}}>
        
        </div> */}
      </div>

    </>
  )
}

export default Section2