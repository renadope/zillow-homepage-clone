import Nav from './Nav.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <div className={'relative h-3/4 w-full'}>
        <div className={"absolute inset-0 bg-[url('src/assets/house-1.jpg')] bg-cover bg-center"}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-sky-300/20" aria-hidden="true" />
        <div className="relative z-10 p-8 text-white">
          <h1>Content on top of darkened background</h1>
        </div>
      </div>
    </div>
  )
}

export default App
