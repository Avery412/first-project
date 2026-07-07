function About() {
  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">About me</h2>
        
        <p className="text-gray-700 mb-4">
          Nick Richardson - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations 
        </p>
        
        <div className="mb-4">
          <h3 className="font-semibold">Interests</h3>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold">Education & Experience</h3>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get in touch
        </button>
      </div>
    </section>
  )
}

export default About