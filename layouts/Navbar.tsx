import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";

export default function Navbar() {
   return (
      <div className="fixed p-5 bg-white ml-[10rem] top-0  text-black shadow-md flex justify-between left-0 right-0">
         <div className="ml-36">
            <span><BsList size={25} /></span>
         </div>
         <div className="flex gap-3 items-center">
            <span>sagar</span>
            <span><BiUserCircle size={25} /></span>
         </div>
      </div>
   )
}