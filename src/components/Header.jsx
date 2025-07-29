function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50 font-inter">
      <button className="bg-teal-500 border px-4 py-1 rounded-md">Download my CV</button>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#" className="text-gray-700 hover:text-black">Home</a>
        <a href="#about-me" className="text-gray-700 hover:text-black">About me</a>
        <a href="#work-experience" className="text-gray-700 hover:text-black">Work experience</a>
        <a href="#education" className="text-gray-700 hover:text-black">Education</a>
        <a href="#projects" className="text-gray-700 hover:text-black">Projects</a>
        <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        <button className="px-2 py-1 text-sm rounded-md" style={{ backgroundColor: "#FDE1AF" }} >EN / ES</button>
      </nav>
    </header>
  )
}
export default Header
