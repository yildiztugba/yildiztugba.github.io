import './App.css';
import React from "react"


function App() {
  return (
    <div>
      <main>
        <section>
          <nav className="py-10 mb-12 flex justify-between">
          <ul className="flex ml-auto pr-32 cursor-pointer">
            <li><a className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"> Portfolio</a></li>
            <li><a className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" >Resume</a></li>
          </ul>
          </nav>
        </section>
      </main>
    </div>

  )
}

export default App;
