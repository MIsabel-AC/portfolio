function Introduction() {
  return (
    <section id="introduction" className="p-10">
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div>
          <h1 className="text-gray-700 mb-1">Hi! I'm</h1>
          <h1 className="text-xl font-bold mb-1">Mª Isabel Aroca Cifuentes</h1>
          <p className="text-gray-500">Fullstack Developer</p>
        </div>
        <img 
          src="./Isa_Foto_CV.jpg" 
          alt="Isabel" 
          className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  )
}
export default Introduction;