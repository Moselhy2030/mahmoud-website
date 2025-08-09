
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <section className="max-w-4xl mx-auto">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-2">Mahmoud Almoselhy</h1>
          <p className="text-lg text-gray-600">Support Services Officer | Business Consultant | Riyadh, Saudi Arabia</p>
        </div>

        <div className="flex justify-center mb-10">
          <img src="/profile_photo.jpg" alt="Mahmoud Almoselhy" className="rounded-2xl shadow-xl w-60 h-60 object-cover" />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a dedicated Support Services Officer with extensive experience in administration, governance, and operations. My professional journey includes leading high-level initiatives for construction and contracting firms in the Gulf region. I aim to bring efficiency, clarity, and integrity to every organization I serve.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Experience</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Support Services Officer at Advanced Construction Contracting Company (2021 – Present)</li>
            <li>Key role in governance, rating reports, internal audit coordination, and supplier relations</li>
            <li>Expert in ERP systems, internal communication, and document control</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Portfolio</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="/Mahmoud_Almoselhy_Profile_Card.pdf" className="text-blue-600 hover:underline" target="_blank">Download Profile Card (PDF)</a></li>
            <li><a href="/Mahmoud_CV_EN.pdf" className="text-blue-600 hover:underline" target="_blank">Download Full CV (English)</a></li>
            <li><a href="/Mahmoud_CV_AR.pdf" className="text-blue-600 hover:underline" target="_blank">تحميل السيرة الذاتية (عربي)</a></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Social Links</h2>
          <p className="text-gray-700">
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/mahmoud-almoselhy" className="text-blue-600 hover:underline" target="_blank">mahmoud-almoselhy</a><br />
            📸 Instagram: <a href="https://www.instagram.com/mahmoud.almoselhy" className="text-blue-600 hover:underline" target="_blank">@mahmoud.almoselhy</a><br />
            📘 Facebook: <a href="https://www.facebook.com/mahmoud.almoselhy" className="text-blue-600 hover:underline" target="_blank">mahmoud.almoselhy</a><br />
            🐦 X (Twitter): <a href="https://x.com/mahmoudalmoselhy" className="text-blue-600 hover:underline" target="_blank">@mahmoudalmoselhy</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact</h2>
          <p className="text-gray-700">
            📧 Email: <a href="mailto:M.almoselhy@hotmail.com" className="text-blue-600 hover:underline">M.almoselhy@hotmail.com</a><br />
            📍 Location: Riyadh, Saudi Arabia
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} Mahmoud Almoselhy. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
