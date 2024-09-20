
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-700 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 roun" src="/src/assets/pexels-img.jpg" alt="" width="384" height="512" />
      <div className="pt-6 space-y-4">
        <blockquote>
        <p className="text-lg">
          “Tailwind CSS is the only framework that i have seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
        </blockquote>
        <figcaption>
        <div>
          Sarah Dayan
        </div>
        <div>
          Staff Engineer, Algolia
        </div>
        </figcaption>
      </div>
      </figure>
    </>
  )
}

export default App
