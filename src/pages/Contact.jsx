function Contact() {
  return (
    <section id="contact" className="p-10 bg-rose-100">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your name"
          className="w-full border bg-white border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full border bg-white border-gray-300 p-2 rounded"
        />
        <textarea
          rows="4"
          placeholder="Your message"
          className="w-full border bg-white border-gray-300 p-2 rounded"
        ></textarea>
        <button type="submit" className="bg-rose-200 text-white px-4 py-2 rounded hover:bg-rose-300">
          Send
        </button>
      </form>
    </section>
  )
}
export default Contact
