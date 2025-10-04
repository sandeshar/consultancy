import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className=" relative flex flex-col items-center justify-center min-h-[90vh] text-center p-8 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="absolute inset-0 opacity-30 bg-gray-100" />
        <h1 className="text-5xl font-bold text-blue-800 relative z-10">Opening doors to global success.</h1>
        <p className="mt-6 text-lg max-w-2xl relative z-10 font-semibold">
          At BAB Consultancy, we specialize in connecting businesses with top-tier talent from around the world. Our mission is to help you find the perfect candidates who can drive your business forward, no matter where they are located.
        </p>
      </section>
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose BAB Consultancy?</h2>
        <p className="max-w-2xl mx-auto text-lg font-semibold">
          We understand the challenges of hiring in a global market. Our team of experts is dedicated to providing personalized solutions that meet your unique needs. From sourcing and screening to onboarding and support, we are with you every step of the way.
        </p>
      </section>
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h2>
        <ul className="max-w-2xl mx-auto text-lg font-semibold list-disc list-inside space-y-2">
          <li>Global Talent Sourcing</li>
          <li>Candidate Screening and Interviewing</li>
          <li>Onboarding and Integration Support</li>
          <li>Compliance and Legal Guidance</li>
          <li>Ongoing HR Support</li>
        </ul>
      </section>
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-lg font-semibold mb-6">
          Ready to take your business to the next level with global talent? Contact us today to learn more about how we can help you achieve your hiring goals.
        </p>
        <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">Contact Us</a>
      </section>
    </>
  );
}
