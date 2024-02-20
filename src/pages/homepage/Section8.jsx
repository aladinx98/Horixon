import React, { useState, useRef } from 'react'
import '../../styles/Section8.css'
import hoverSound from '../../assets/flip.mp3';
const Section8 = () => {

  const [isHovering, setIsHovering] = useState(false);
  const audioRef = useRef(new Audio(hoverSound)); // Use the correct path to your audio file
  audioRef.current.volume = 0.1;
  const handleMouseEnter = () => {
    setIsHovering(true);
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Optional: Stop the sound if you leave the hover
    // audioRef.current.pause();
    // audioRef.current.currentTime = 0; // Reset audio position to start
  };

  return (
    <>
      <div className="sec8main">
        <br />
        <br />
        <div className="sec8left" data-aos="fade-left"
          data-aos-duration="3000">
          <p className="leftp1">FEATURES IN</p>
          <p className="leftp2">HORIXON</p>
        </div>
        <div className="sec8right" >
          <p className="rightp1" data-aos="fade-right"
            data-aos-duration="3000">Make Your Game More
            Agile And Better</p>
          <p className="rightp2" data-aos="fade-right"
            data-aos-duration="3000">Horixon  is an expansive gaming
            metaverse that seamlessly integrates augmented reality (AR),
            virtual reality (VR), and artificial intelligence (AI)
            to create a dynamic and interconnected gaming experience. </p>
        </div>
      </div>


      <div className="sec8main2">
        <div className="main2left">
          <div className="sec8l1" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="container1">
              <div className="front side">
                <div className="content">
                  <p className="sec8title">HoriXpanse <br /> Metasurfer VR Time Travel Adventures </p>
                </div>
              </div>
              <div className="back side">
                <div className="content">
                  <p className='contentDesc'>Embark on a mind-bending journey with HoriXpanse, where futuristic technology
                    meets historical exploration in the Metasurfer VR realm. Unleash the thrill of time travel adventures,
                    experiencing the past like never before in a space where history and innovation collide.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="sec8l2" >
            <div className="container2" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="front2 side">
                <div className="content">
                  <p className="sec8title">HoriXBet<br />Metaverse Casinos </p>
                </div>
              </div>
              <div className="back2 side">
                <div className="content">
                  <p className='contentDesc2'>Dive into the exhilarating
                    world of HoriXBet, where cutting-edge technology and
                    blockchain innovation redefine the art of gambling.
                    Experience metaverse casinos like never before, where
                    luck meets sophistication, and every bet becomes a
                    thrilling leap into the future.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="main2center">
          <div className="sec8c1" >
            <div className="container3" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="front3 side">
                <div className="content">
                  <p className="sec8title">HoriXlearn  <br /> The Futuristic Knowledge Hub </p>
                </div>
              </div>
              <div className="back3 side">
                <div className="content">
                  <p className='contentDesc'>Embark on a mind-bending journey with HoriXpanse, where futuristic technology
                    meets historical exploration in the Metasurfer VR realm. Unleash the thrill of time travel adventures,
                    experiencing the past like never before in a space where history and innovation collide.</p>
                </div>
              </div>

            </div>
          </div>
        </div>




        <div className="main2right">
          <div className="sec8r1">
            <div className="container2" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="front4 side">
                <div className="content">
                  <p className="sec8title">HoriXplore Hub <br /> Random VR Meeting Rooms</p>
                </div>
              </div>
              <div className="back4 side">
                <div className="content">
                  <p className='contentDesc2'>Step into the future of
                    collaboration with HoriXphere, where virtual reality
                    meets seamless teamwork. Experience a realm of immersive
                    VR collaboration spaces, breaking the boundaries of
                    traditional meetings and unleashing the potential of
                    dynamic, interconnected digital workspaces.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="sec8r2">
            <div className="container1" onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="front5 side">
                <div className="content">
                  <p className="sec8title"> HoriXphere <br />VR Collaboration Spaces</p>
                </div>
              </div>
              <div className="back5 side">
                <div className="content">
                  <p className='contentDesc'>Ignite your curiosity
                    with HoriXlearn, the beacon of futuristic education
                    within the Horixon metaverse. Dive into an AI-powered
                    knowledge hub, where learning transcends boundaries,
                    and the synergy of advanced technology shapes a new
                    era of interactive and immersive educational experiences.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section8