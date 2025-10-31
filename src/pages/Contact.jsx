export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-center text-gray-300 px-6">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
      <p className="max-w-2xl mb-8">
        Ready to elevate your wealth strategy? Reach out to us today to schedule a consultation.
      </p>
      <a
        href="mailto:contact@chiefstonecapital.com"
        className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        contact@chiefstonecapital.com
      </a>
    </div>
  );
}