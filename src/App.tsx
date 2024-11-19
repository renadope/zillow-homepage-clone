import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'
import { HouseCard, houseListings } from './fake-data/house-card.ts'
import { Card } from './Card.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <SearchSection />
      <HouseCardRow
        listings={houseListings}
        heading={'Homes For You'}
        subHeading={'Based on homes you recently viewed'}
      />
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

function HouseCardRow({
  listings,
  subHeading,
  heading,
}: {
  listings: HouseCard[]
  heading: string
  subHeading: string
}) {
  return (
    <div>
      <div className={'mx-auto max-w-7xl px-10 pt-10'}>
        <h2 className={'text-2xl font-extrabold text-sky-950'}>{heading}</h2>
        <h3 className={'text-sm text-gray-500'}>{subHeading}</h3>
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
    </div>
  )
}

export default App
