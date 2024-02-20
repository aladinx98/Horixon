import React from 'react'
import '../../styles/Section9.css'
import toke from "../../assets/tokonomics.png"
const Section9 = () => {
    return (
        <>


            <div className="sec9main" id='tokenomics'>
         
                <br /><br />
                <div className="sec9pointer">
                    <br />
                    <p className='sec9head01'>TOKENOMICS</p>
                    <p className="sec9para01">
                        Our Metaverse website tokenomics outlines an exciting journey towards building
                         a vibrant digital  <br />universe where  creativity, ownership,
                         and community thrive.
                    </p>
                </div>
                <div className="sec9content">
                    {/* <div className="indicator">
                        <div className="i">
                            <div className="color1"></div>
                            <p className="c">Community</p>
                        </div>
                        <div className="i">
                            <div className="color2"></div>
                            <p className="c">Investor</p>
                        </div>
                        <div className="i">
                            <div className="color3"></div>
                            <p className="c">Treasury</p>
                        </div>
                        <div className="i">
                            <div className="color4"></div>
                            <p className="c">Advisors</p>
                        </div>
                        <div className="i">
                            <div className="color5"></div>
                            <p className="c">Founder</p>
                        </div>
                    </div> */}
                    <br />
                    <div className="toke">
                        <img src={toke} className='tokeimg' alt="" />
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Section9