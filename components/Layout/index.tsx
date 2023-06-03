import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Organizer from "../Organizers";
import Participants from "../Participants"

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <>

      <Navbar />
      <div className={`w-[100vw] h-full grid gap-10 justify-center items-center ${props.className}`}>{props.children}</div>
      <Organizer/>
      <Participants/>

    <Footer/>
    </>
    
  );
};

export default Layout;

  

