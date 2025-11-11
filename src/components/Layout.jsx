function Layout({ children }) {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Triángulo */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          clipPath: "polygon(100% 10.4%, 100% 100%, 0 100%)",
          backgroundColor: "#f9caca",
        }}
      />
      {/* Contenido principal */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Layout;
