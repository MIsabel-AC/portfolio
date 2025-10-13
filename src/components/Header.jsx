import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50 font-inter">
      <button className="bg-teal-500 border px-3 py-1 rounded-md text-sm">
        Download my CV</button>

      <div className="flex items-center gap-3">
   
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </svg>
          </span>
        )}
      </button>
      
      <nav
        className={`${
          open ? "flex" : "hidden"
        } flex-col items-center text-center absolute top-full left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:items-center md:justify-center md:space-x-4 md:bg-transparent md:shadow-none`}>
        <a href="#" className="text-gray-700 hover:text-black py-1 px-4 md:px-0 text-sm">Home</a>
        <a href="#about-me" className="text-gray-700 hover:text-black py-1 px-4 md:px-0 text-sm">About me</a>
        <a href="#work-experience" className="text-gray-700 hover:text-black py-1 px-4 md:px-0 text-sm">Work experience</a>
        <a href="#education" className="text-gray-700 hover:text-black py-1 px-4 md:px-0 text-sm">Education</a>
        <a href="#projects" className="text-gray-700 hover:text-black py-1 px-4 md:px-0 text-sm">Projects</a>
        <a href="#contact" className="text-gray-700 hover:text-black py-1 px-4 md:px-0 text-sm">Contact</a>
      </nav>

      <button
          className="px-2 py-1 text-sm rounded-md"
          style={{backgroundColor: "#FDE1AF",  whiteSpace: "nowrap"}}>
          EN / ES
      </button>

      </div>
    </header>
  )
}

export default Header;



