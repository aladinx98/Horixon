
import './Footer.css'

import gmail from '../assets/ic5.png'
const Footer = () => {
	return (
		<>
			<div className="fmain">
				<footer className="footer-02" >
					<div className="container" style={{ paddingTop: 73 }}>

						<div className="row">
							<div className="col-md-4 col-lg-5" >
								<div className="row">
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
										<p className='footerHead'>HORIXON</p>
										<div className="footerSocial">
											<a className="f00" href='https://medium.com/@horixon'></a>
											<a href="https://www.instagram.com/horixon.io/" style={{ textDecoration: "none" }} className="f01"></a>
											<a href="https://www.youtube.com/channel/UC7KJJuAfy4H8Ti90fsrRyPQ" style={{ textDecoration: "none" }} className="f02"></a>
											<a href="https://twitter.com/Horixonofficial" style={{ textDecoration: "none" }} className="f03"></a>
										</div>
										<br />
										<p style={{ marginBottom: 0 }}>"Horixon " is an expansive gaming metaverse that seamlessly integrates augmented reality (AR), virtual reality (VR), and artificial intelligence (AI) to create a dynamic and interconnected gaming experience.</p>
										<li><a href="mailto:support@horixon.io" style={{ textDecoration: 'none', color: "white" }} className="py-1 d-block" ><img src={gmail} alt="" style={{ width: 20, marginRight: 15, height: 20 }} />support@horixon.io</a></li>

									</div>

								</div>
							</div>
							<div className="col-md-8 col-lg-7">
								<div className="row">

									<div className="r1 col-md-4 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Quick Links</h2>
										<ul className="list-unstyled">

											<li><a href="#about" style={{ textDecoration: 'none' }} className="py-1 d-block">About</a></li>
											<li><a href="#roadmap" style={{ textDecoration: 'none' }} className="py-1 d-block">Roadmap</a></li>
											<li><a href="#tokenomic" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokenomics</a></li>
											<li><a href="/whitepaper.pdf" style={{ textDecoration: 'none' }} className="py-1 d-block">Whitepaper</a></li>
											<li><a href="#usecase" style={{ textDecoration: 'none' }} className="py-1 d-block">Usecase</a></li>
										</ul>
									</div>
									<div className="r1 col-md-4 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">About</h2>
										<ul className="list-unstyled">
											<li><a href="" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokens</a></li>
											<li><a href="#team" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li>
											<li><a href="#!" style={{ textDecoration: 'none' }} className="py-1 d-block">Location</a></li>

											<li><a href="#!" style={{ textDecoration: 'none' }} className="py-1 d-block">Blog</a></li>
										</ul>
									</div>
									<div className="r1 col-md-4 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Privacy</h2>
										<ul className="list-unstyled">
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Terms and condition</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</a></li>

										</ul>
									</div>

								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-6 col-lg-8">


							</div>

						</div>
					</div>
				</footer>
			</div>

		</>
	)
}

export default Footer