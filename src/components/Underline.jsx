function SectionTitle({ children }) {
  return (
    <h2 className="relative inline-block text-2xl font-bold mb-6 font-inter after:content-[''] after:absolute after:inset-x-0 after:bottom-1 after:h-2 after:bg-[rgb(255,231,125)] after:-z-10">
      {children}
    </h2>
  );
}

export default SectionTitle;
