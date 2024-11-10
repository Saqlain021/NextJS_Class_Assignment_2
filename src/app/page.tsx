import Image from "next/image";
import Navbar from "./component/nav";
import Main from "./component/main";

export default function Home() {
  return (
  <div className="W-[1400px] h-[1132px] bg-[#252B42]">
    <Navbar/> 
    <Main/>

  </div>
    
  );
}
