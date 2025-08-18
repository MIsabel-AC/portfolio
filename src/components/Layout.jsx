function Layout({ children }) {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Triángulo rosa encima del fondo blanco, debajo del contenido */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          clipPath: "polygon(100% 15.3%, 100% 100%, 0 100%)",
          backgroundColor: "#f9caca"
        }}
      />
      {/* Contenido principal arriba de todo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Layout;

