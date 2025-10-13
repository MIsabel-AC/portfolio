import Underline from '../Underline';
function Contact() {
  return (
   <section id="contact" className="p-10 font-inter">
  <div className="flex flex-col md:flex-row justify-between">
    <div>
      <Underline>Contact</Underline>

  <div className="space-y-3 mt-1">
        <div className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit">
          <img src="./icons/linkedinicon.png" alt="María Isabel Aroca Cifuentes" className="h-7 w-7" />
          <span>María Isabel Aroca Cifuentes</span>
        </div>

        <div className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit">
          <img src="./icons/githubicon.png" alt="MIsabel-AC" className="h-7 w-7" />
          <span className="font-medium">MIsabel-AC</span>
        </div>


      <div className="flex items-center space-x-2 bg-teal-500 text-white px-4 py-2 rounded-full w-fit">
        <img src="./icons/emailicon.png" alt="Isabel.arocac@gmail.com" className="h-7 w-7" />
        <span>Isabel.arocac@gmail.com</span>
      </div>

      </div>
    </div>

    <div className="md:ml-1">
      <h2 className="text-2xl font-bold mb-4 mt-10 lg:mt-0 text-left font-inter">
        ➤ Send me an email!
      </h2>

      <form
        className="flex-1 max-w-md border-2 border-black p-6 rounded shadow-md space-y-4"
        style={{ backgroundColor: "#FDE1AF" }}
      >
        <input
          type="text"
          placeholder="Email"
          className="w-full border border-black p-2 rounded bg-white sacramento-size resize-none"
        />
        <input
          type="email"
          placeholder="Subject"
          className="w-full border border-black p-2 rounded bg-white sacramento-size resize-none"
        />
        <textarea
          rows="4"
          placeholder="Your message"
          className="w-full border border-black p-2 rounded bg-white sacramento-size resize-none"
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

