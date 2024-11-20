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

const links2 = ['Privacy Portal', 'Cookie Preference', 'Learn', 'AI', 'Mobile Apps']
const links3 = ['Trulia', 'StreetEasy', 'HotPads', 'Out East', 'ShowingTime+']

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
      <section className={''}>
        <div className={'mx-auto max-w-7xl border-b-2 border-sky-500 px-10'}>
          <div className={'flex flex-col gap-3 py-16'}>
            <FooterLinks links={links} />
            <FooterLinks links={links2} />
            <FooterLinks links={links3} />
            <button className={'mt-2 text-lg text-sky-600 transition-all duration-300 hover:underline'}>
              Do Not Sell or Share My Personal Information &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FooterLinks({ links }: { links: string[] }) {
  return (
    <div className={'flex flex-wrap justify-center gap-2'}>
      {links &&
        links.length > 0 &&
        links.map((item, i) => {
          return (
            <p
              className={cn(
                `cursor-pointer text-sm text-gray-500 hover:text-sky-700 hover:underline`,
                `${i !== links.length - 1 ? 'border-r border-sky-200 pr-2' : ''}`,
                `odd:hover:text-sky-500`
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
