function Introduction() {
  return (
    <section
      id="introduction"
      className="px-10 py-10 shadow-md"
      style={{ backgroundColor: '#E5F3E0' }}
    >
      <div className="flex items-center">
    
        <div className="flex-1 min-w-[100px] pr-8"> 
          <p className="mb-2 font-interItalic text-6xl">Hi! I'm</p>
          <h1 className="text-6xl font-spaceGrotesk font-bold leading-tight">
            Mª Isabel Aroca Cifuentes
          </h1>
          <p className="text-gray-600 mt-2 text-base font-inter">
            Fullstack Developer | Junior Java Developer | Junior Web Developer
          </p>
        </div>

        <div className="w-70 h-70 ml-4 shrink-0 ">
          <img
            src="./Isa_Foto_CV.jpg"
            alt="Isabel"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  )
}
export default Introduction;