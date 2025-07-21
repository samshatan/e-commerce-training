function Contact(){
  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Have a question or need help? Fill out the form below and our team will get back to you as soon as possible.
      </p>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message..." rows={4} required></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
export default Contact;