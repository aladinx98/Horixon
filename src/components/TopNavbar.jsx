import React from 'react'
import "../styles/TopNavbar.css"
import logo from '../assets/finalLogo.png'
import burger from '../assets/menubar.png'
const TopNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{ padding: "20px 20px", width: "100%", marginBottom: 1, zIndex: 99999 }}>
        <div className="container-fluid">
          <a className="navbar-brand navfont" href="#" style={{ color: "white" }}> <img src={logo} style={{ width: 150, height: "100%" }} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <img src={burger} className="navbar-toggler-icon" style={{ backgroundImage: "none" }} alt="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-nav me-auto mb-2 mb-lg-0">

            </span>
            <ul className="navbar-nav " >
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" style={{ color: "white", fontFamily: "Borned" }} href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white", fontFamily: "Borned" }}>Wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" style={{ color: "white", fontFamily: "Borned" }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tokenomics" style={{ color: "white", fontFamily: "Borned" }}>Tokenomics</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNavbar