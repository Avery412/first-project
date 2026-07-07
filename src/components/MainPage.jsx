function MainPage() {
  return (
    <section className="px-4 py-8">
      <div className="flex flex-col items-center text-center">
        {/* Фото */}
        <div className="w-32 h-32 rounded-full bg-gray-300 mb-4">
          {/* Здесь будет картинка */}
        </div>
        
        {/* Имя и должность */}
        <h1 className="text-2xl font-bold">Hey, I'm Nick</h1>
        <p className="text-gray-600">Frontend developer</p>
        
        {/* Описание */}
        <p className="text-gray-700 mt-2 max-w-md">
          Help you to create high-quality digital products that your clients will love and let your business thrive
        </p>
        
        {/* Кнопка */}
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get in touch
        </button>
      </div>
    </section>
  )
}

export default MainPage