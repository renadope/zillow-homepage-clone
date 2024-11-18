import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'
import { HouseCard, houseListings } from './fake-data/house-card.ts'
import { StatusBadge } from './StatusBadge.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <SearchSection />
      <div>
        <div className={'mx-auto max-w-7xl px-10 pt-10'}>
          <h2 className={'text-2xl font-extrabold text-sky-950'}> Homes For You</h2>
          <h3 className={'text-sm text-gray-500'}>Based on homes you recently viewed</h3>
        </div>
        <div className={'mx-auto max-w-7xl overflow-scroll px-10'}>
          <div className={'mb-5 flex flex-nowrap gap-4 py-5'}>
            {houseListings &&
              houseListings.length > 0 &&
              houseListings.map((house, i) => {
                return (
                  <Card
                    data={house}
                    key={i}
                  />
                )
              })}
          </div>
        </div>
        <div className={'mx-auto max-w-7xl px-10'}>
          <div className={'flex items-center justify-center'}>
            <button className={'bg-white p-4 text-lg font-semibold text-sky-700'}>
              <span> &darr; </span> <span className={'text-center hover:underline'}>More recommended Homes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ data }: { data: HouseCard }) {
  return (
    <div
      className={
        'group relative max-w-xs flex-shrink-0 overflow-hidden rounded-xl border-4 border-transparent bg-sky-50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-4 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-300'
      }
    >
      <span
        className={
          'absolute left-1 top-1.5 mx-1 translate-x-1 translate-y-1.5 truncate rounded-lg bg-red-500 p-1 text-xs font-extrabold text-white'
        }
      >
        {data.description}
      </span>
      <img
        src={data.img}
        alt="House exterior"
        className="aspect-video w-full object-cover"
        loading="lazy"
      />{' '}
      <div className={'flex flex-col gap-1 p-4'}>
        <h1 className={'mb-2 text-2xl font-black'}>
          <span>$</span>
          {data.price}
        </h1>
        <div className={'flex items-center gap-2'}>
          <p>
            <span className={'font-extrabold text-sky-950'}>{data.numBeds}</span> bd
          </p>
          <div className="h-4 w-px bg-gray-300 group-hover:bg-sky-300"></div>
          <p>
            <span className={'font-extrabold text-sky-950'}>{data.numBaths}</span> ba
          </p>
          <div className="h-4 w-px bg-gray-300 group-hover:bg-sky-300"></div>
          <p>
            <span className={'font-extrabold text-sky-950'}>{data.sqFt}</span> sqft
          </p>
          <div className="h-4 w-px bg-gray-300 group-hover:bg-sky-300"></div>

          <StatusBadge status={data.status} />
        </div>
        <address className={'select-all text-sm font-light not-italic text-gray-600'}>{data.address}</address>
        <div className="select-all border-t pt-2 group-hover:border-sky-300">
          <p className={'text-xs text-gray-400'}>
            MLS ID:{data.mlsID}
            <span className="block text-gray-400">{data.mlsData}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
