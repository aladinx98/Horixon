import React from 'react'
import '../../styles/Section1.css'
import '../../styles/Button.css'
const Section1 = () => {
  return (
    <>

      <div className="section1Main">

        <video autoPlay loop muted playsInline className='video'>
          <source src='https://res.cloudinary.com/dcnzz5dat/video/upload/v1708080058/c0uqpyc33oglvayqymju.mp4' type='video/mp4' />

        </video>

        <div className="sec1content" >
          <p className="smallHead" >
            INTRODUCING
          </p>
          <p className="sec1head" >
            HORIXON
          </p>
          <p className="sec1para" >
            "Horixon " is an expansive gaming metaverse that seamlessly integrates augmented reality (AR),
            virtual reality (VR), and artificial intelligence (AI) to create a dynamic and interconnected gaming experience.
            This metaverse offers a variety of games, including a cutting-edge casino district, alongside other engaging experiences.
          </p>
          <br />
          <div className="sec1button" >

            <a href='https://presale.horixon.io/' style={{textDecoration:"none",color:"#afffff"}} className="btn2">
              Buy Now
            </a>
            <button className="btn2">
              Stake
            </button>


          </div>
          <div className="shadow">

          </div>
        </div>

      </div>
    </>
  )
}

export default Section1