import React, { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import backgroundAudio from './assets/sound3.mp3';
import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import Section1 from './pages/homepage/Section1';
import Section10 from './pages/homepage/Section10';
import Section2 from './pages/homepage/Section2';
import Section3 from './pages/homepage/Section3';
import Section4 from './pages/homepage/Section4';
import Section5 from './pages/homepage/Section5';
import Section6 from './pages/homepage/Section6';
import Section7 from './pages/homepage/Section7';
import Section8 from './pages/homepage/Section8';
import Section9 from './pages/homepage/Section9';
import './styles/fonts.css';
import Loader from './components/Loader'; // Import the Loader component
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const audioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Track the loading state

  useEffect(() => {
    AOS.init({ duration: "1000" });

  }, [])

  useEffect(() => {
    // This function will try to play the audio
    const tryPlay = () => {
      audioRef.current.audioEl.current.play().catch(error => console.error("Audio play failed:", error));
      // After a successful play, remove the event listener to avoid replaying on every click
      document.body.removeEventListener('click', tryPlay);
    };

    document.body.addEventListener('click', tryPlay);

    // Cleanup the event listener on unmount
    return () => {
      document.body.removeEventListener('click', tryPlay);
    };
  }, []);

  // Simulate loading by using a timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust the delay time as needed

    // Cleanup the timeout on unmount or if assets load faster
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? ( // Conditionally render the Loader component while loading
        <Loader />
      ) : (
        <>
          <TopNavbar />
          <Section1 />
          <Section2 />
          <Section7 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section3 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Footer />
          <AudioPlayer
            ref={audioRef}
            src='https://res.cloudinary.com/dcnzz5dat/video/upload/v1708153393/lnms2w7am5bwrkdaeqx8.mp3'
            autoPlay={false}
            controls={false}
            loop
            volume={0.1}
          />
        </>
      )}
    </>
  );
}

export default App;
