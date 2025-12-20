"use client";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[360px] bg-[url('/images/bg_1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 opacity-90" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
          <p className="text-xs tracking-widest uppercase mb-2">
            Home &gt; Contact
          </p>
          <h1 className="text-4xl font-semibold">Contact us</h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="custom-container">
          {/* Contact Info */}
          <div className="mb-14">
            <h2 className="text-2xl font-medium mb-6">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-black">Address:</span><br />
                198 West 21th Street, Suite 721<br />
                New York NY 10016
              </p>

              <p>
                <span className="font-semibold text-black">Phone:</span><br />
                +1235 2355 98
              </p>

              <p>
                <span className="font-semibold text-black">Email:</span><br />
                info@yoursite.com
              </p>

              <p>
                <span className="font-semibold text-black">Website:</span><br />
                yoursite.com
              </p>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FORM */}
            <form className="bg-white p-8 shadow-sm">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 text-sm hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* MAP PLACEHOLDER */}
            <div className="bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              Google Map Placeholder
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
