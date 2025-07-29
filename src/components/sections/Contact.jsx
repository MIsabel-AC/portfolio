function Contact() {
  return (
    <section id="contact" className="p-10 font-inter">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Contact</h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-6">

        <div className="flex-1 min-w-[10px]">
          <img
            src=""
            alt="Icons"
            className="w-full h-auto rounded-lg"
          />
        </div>


        <form className="flex-1 max-w-md border-2 border-black p-6 rounded shadow-md space-y-4" style={{ backgroundColor: "#FDE1AF" }}>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-black p-2 rounded bg-white"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-black p-2 rounded bg-white"
          />
          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full border border-black p-2 rounded bg-white"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;

