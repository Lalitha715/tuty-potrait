function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

        <p className="mb-3">📍 Thoothukudi, Tamil Nadu</p>
        <p className="mb-3">📞 +91 7708260129</p>
        <p className="mb-6">🕒 Available All Time</p>

        <a
          href="https://wa.me/917708260129"
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;