import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sponsors from "../Sponsors";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  return (
    <div className={` ${showPopup ? 'h-screen overflow-hidden' : ''}`}>
      <Navbar />
      <div className={`  grid gap-10 justify-center items-center bg-white text-black ${props.className}`}>{props.children}</div>
      {/* {showPopup && (
        <div className="popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[999]">
          <div className="relative">
            <button onClick={handleClosePopup} className="close-button text-sm absolute top-1 font-bold right-1 w-7 h-7 bg-black aspect-square text-white rounded-full">X</button>
            <Link href="https://ita-aahar.webflow.io/ ">
              <img src="/bannerad.jpg" alt="Popup" className="popup-image sm:max-h-[600px] aspect-auto" />
            </Link>
          </div>
        </div>
      )} */}
      <Footer />
    </div>

  );
};

export default Layout;



