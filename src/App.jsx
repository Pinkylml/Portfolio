function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Mi Portafolio</h1>
        <p className="mt-4 text-lg text-gray-700">Bienvenido a mi portafolio. Aquí puedes ver mis proyectos y habilidades.</p>
      </header>
      <main className="mt-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800">Sobre Mí</h2>
          <p className="mt-4 text-gray-600">
            Soy un desarrollador apasionado por la ciencia de datos y el desarrollo web. Me especializo en React, Tailwind CSS, y muchas otras tecnologías modernas.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
