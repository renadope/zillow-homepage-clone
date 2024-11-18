import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <SearchSection />
      <div>
        <div className={'mx-auto max-w-7xl overflow-scroll px-10'}>
          <div className={'flex flex-nowrap gap-4 py-12'}>
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

type HouseCard = {
  price: number
  description: string
  numBeds: number
  numBaths: number
  sqFt: number
  status: 'Active' | 'InActive'
  address: string
  mlsID: string
  mlsData: string
}

function Card() {
  return (
    <div
      className={
        'group relative max-w-sm flex-shrink-0 overflow-hidden rounded-xl border-4 border-transparent shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-4 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-300'
      }
    >
      <span
        className={
          'absolute left-1 top-1.5 mx-1 translate-x-1 translate-y-1.5 truncate rounded-lg bg-red-500 p-1 text-xs font-extrabold text-white'
        }
      >
        Stunning Views
      </span>
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

          <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-700 group-hover:text-green-900">
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
