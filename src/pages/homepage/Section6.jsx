import React from 'react'
import '../../styles/Section6.css'
import sec6img2 from "../../assets/Group 162710.svg"
const Section6 = () => {
  return (
    <>
      <div className="sec6pointer" data-aos="zoom-in" data-aos-duration="3000">
        <p className='sec6head01'>ROADMAP</p>
        <p className="sec6para01">
          Our Metaverse website roadmap outlines an exciting journey towards building
          <br /> a vibrant digital universe where creativity, ownership,
          <br /> and community thrive.
        </p>
      </div>
      <div className="sec6main">

        <img src={sec6img2} alt="" />

        <div className="sec6content">
          <div className="sec6c1">
            <div className="c1l">
              <p className='c1percent'>10%</p>
            </div>
            <div className="c1r">
              <p className="c1head">PHASE 1</p>
              <p className="c1para">Empowering Tokenization with Seamless Web 3 Connectivity</p>
            </div>
          </div>
          <div className="sec6c2">
            <div className="c1l">
              <p className='c2percent'>30%</p>
            </div>
            <div className="c1r">
              <p className="c2head">PHASE 2</p>
              <p className="c2para">Secure, Stake, and Earn: Powering Your Metaverse Journey.</p>
            </div>
          </div>
          <div className="sec6c1">
            <div className="c1l">
              <p className='c1percent'>50%</p>
            </div>
            <div className="c1r">
              <p className="c1head">PHASE 3</p>
              <p className="c1para">Step into the Future: AR/VR Casino Gaming Redefined.</p>
            </div>
          </div>
          <div className="sec6c2">
            <div className="c1l">
              <p className='c2percent'>65%</p>
            </div>
            <div className="c1r">
              <p className="c2head">PHASE 4</p>
              <p className="c2para">Crafting Boundless Worlds: Your Complete Metaverse Game Ecosystem Awaits</p>
            </div>
          </div>
          <div className="sec6c1">
            <div className="c1l">
              <p className='c1percent'>80%</p>
            </div>
            <div className="c1r">
              <p className="c1head">PHASE 5</p>
              <p className="c1para">Own Blockchain for metasurfer environment</p>
            </div>
          </div>
          <div className="sec6c2">
            <div className="c1l">
              <p className='c2percent'>100%</p>
            </div>
            <div className="c1r">
              <p className="c2head">PHASE 6</p>
              <p className="c2para">Coming soon on metaverse markets like metastore</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section6