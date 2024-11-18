import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'
import { HouseCard, houseListings } from './fake-data/house-card.ts'
import { Card } from './Card.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <SearchSection />
      <HouseCardRow listings={houseListings} />
    </div>
  )
}

function HouseCardRow({ listings }: { listings: HouseCard[] }) {
  return (
    <div>
      <div className={'mx-auto max-w-7xl px-10 pt-10'}>
        <h2 className={'text-2xl font-extrabold text-sky-950'}> Homes For You</h2>
        <h3 className={'text-sm text-gray-500'}>Based on homes you recently viewed</h3>
      </div>
      <div className={'mx-auto max-w-7xl overflow-scroll px-10'}>
        <div className={'mb-5 flex flex-nowrap gap-4 py-5'}>
          {listings &&
            listings.length > 0 &&
            listings.map((house, i) => {
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
  )
}

export default App
