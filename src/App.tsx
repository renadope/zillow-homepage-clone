import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'
import { houseListings } from './fake-data/house-card.ts'
import { AboutSection } from './AboutSection.tsx'
import { HouseCardRow } from './HouseCardRow.tsx'
import { Features } from './Features.tsx'
import { cn } from './lib/utils.ts'

const links = [
  'About',
  'Destimates',
  'Research',
  'Careers',
  'Careers - U.S. Privacy Notice',
  'Careers - Mexico Privacy Notice',
  'Help',
  'Advertise',
  'Fair Housing Guide',
  'Advocacy',
  'Terms of use',
]

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
      <section>
        <div className={'mx-auto max-w-7xl px-10'}>
          <div className={'flex flex-col'}></div>
          <FooterLinks links={links} />
        </div>
      </section>
    </div>
  )
}

function FooterLinks({ links }: { links: string[] }) {
  return (
    <div className={'flex flex-wrap justify-center gap-2 py-10'}>
      {links &&
        links.length > 0 &&
        links.map((item, i) => {
          return (
            <p
              className={cn(
                `cursor-pointer text-sm text-gray-500 hover:text-sky-700`,
                `${i !== links.length - 1 ? 'border-r border-sky-200 pr-2' : ''}`
              )}
              key={i}
            >
              {item}
            </p>
          )
        })}
    </div>
  )
}

export default App
