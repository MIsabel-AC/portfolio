function Layout({ children }) {
  return (
    <div className="relative  overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          clipPath: "polygon(100% 13%, 100% 100%, 0 100%)", 
          backgroundColor: "#f9caca" 
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Layout;
