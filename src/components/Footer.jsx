function Footer() {
  return (
    <footer className="text-sm text-center text-gray-700 p-4 font-inter" style={{ backgroundColor: "#E5F3E0" }}>
      <p>© 2025 M Isabel Aroca Cifuentes</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#">Home</a>
        <a href="#about-me">About me</a>
        <a href="#work-experience">Work experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex justify-center gap-4 mt-4 text-black">
        <a href="#" className="hover:text-teal-500">MIsabel-AC</a>
        <a href="#" className="hover:text-teal-500">María Isabel</a>
      </div>
    </footer>
  )
}
export default Footer
