import Underline from '../Underline';
function Contact() {
  return (
    <section id="contact" className="p-10 font-inter">
      {/* <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Contact</h2> */}
      <Underline>Contact</Underline>

      <div className="flex flex-col md:flex-row justify-between">

        <div>
          <img
            src="./linkedinicon.png"
            alt="Icons"
            className="w-[90px] h-[50px] rounded-lg"
          />
          <img
            src="./githubicon.png"
            alt="Icons"
            className="w-[90px] h-[50px] rounded-lg"
          />
          <img
            src="./emailicon.png"
            alt="Icons"
            className="w-[90px] h-[50px] rounded-lg"
          />
        </div>

        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left font-inter">➤  Send me an email!</h2>
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
      </div>
    </section>
  )
}

export default Contact;

