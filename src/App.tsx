import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'
import { houseListings } from './fake-data/house-card.ts'
import { AboutSection } from './AboutSection.tsx'
import { HouseCardRow } from './HouseCardRow.tsx'
import { Features } from './Features.tsx'

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
        <div className={'mb-10 flex justify-center'}>
          <button className={'bg-white p-4 text-lg font-semibold text-sky-700'}>
            <span> &darr; </span> <span className={'text-center hover:underline'}>More recommended Homes</span>
          </button>
        </div>
      </div>
      <Features />
      <HouseCardRow
        listings={houseListings}
        heading={'Homes For You'}
        subHeading={'Based on homes you recently viewed'}
      />
      <HouseCardRow
        listings={houseListings}
        heading={'Homes For You'}
        subHeading={'Based on homes you recently viewed'}
      />
      <HouseCardRow
        listings={houseListings}
        heading={'Check out these homes'}
        subHeading={'Continue looking at these similar homes'}
      />
      <AboutSection />
    </div>
  )
}

export default App
