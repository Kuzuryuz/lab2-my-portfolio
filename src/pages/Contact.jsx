const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <header className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have a project or just want to say hi? Fill the form or email me
            directly.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              <strong className="block text-gray-800 dark:text-gray-100">
                Email
              </strong>
              <a
                className="text-blue-600 hover:underline"
                href="mailto:pim@example.com"
              >
                pim@example.com
              </a>
            </p>

            <p className="mb-4">
              <strong className="block text-gray-800 dark:text-gray-100">
                Location
              </strong>
              <span className="text-gray-600 dark:text-gray-300">
                Bangkok, Thailand
              </span>
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              I usually reply within 1–2 business days.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="your_name@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="Write your message..."
                required
              />
            </div>

            <div className="text-right">
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
