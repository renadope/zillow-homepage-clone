import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <SearchSection />
      <div className={''}>
        <div className={'mx-auto max-w-7xl overflow-scroll px-10'}>
          <div className={'flex flex-nowrap gap-2 py-12'}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

function Card() {
  return (
    <div
      className={
        'group max-w-sm flex-shrink-0 overflow-hidden rounded-xl border-2 border-transparent bg-sky-50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-300'
      }
    >
      <img
        src={'/src/assets/house-2.jpg'}
        alt="House exterior"
        className="aspect-video w-full object-cover"
        loading="lazy"
      />{' '}
      <div className={'flex flex-col gap-1 p-4'}>
        <h1 className={'mb-2 text-2xl font-black'}>$650,000</h1>
        <div className={'flex items-center gap-2'}>
          <p>
            <span className={'font-extrabold text-sky-950'}>6</span> bd
          </p>
          <div className="h-4 w-px bg-gray-300 group-hover:bg-sky-300"></div>
          <p>
            <span className={'font-extrabold text-sky-950'}>4</span> ba
          </p>
          <div className="h-4 w-px bg-gray-300 group-hover:bg-sky-300"></div>
          <p>
            <span className={'font-extrabold text-sky-950'}>3,565</span> sqft
          </p>
          <div className="h-4 w-px bg-gray-300 group-hover:bg-sky-300"></div>

          <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-700 hover:text-green-900">
            Active
          </span>
        </div>
        <address className={'select-all text-sm font-light not-italic text-gray-600'}>
          5729 E Fernan Hill Rd, Coeur D Alene, ID, 83814
        </address>
        <div className="select-all border-t pt-2 group-hover:border-sky-300">
          <p className={'text-xs text-gray-400'}>
            MLS ID #20242708
            <span className="block text-gray-400">WINDERMERE HAYDEN LLC, Chad Salsbury</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
