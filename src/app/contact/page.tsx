import MainLayout from "../components/MainLayout";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          Have questions or feedback? Reach out to us using the form below or
          email us directly at{" "}
          <a
            href="mailto:rwecho@live.com"
            className="text-blue-600 hover:underline"
          >
            rwecho@live.com
          </a>
          .
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border rounded"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
