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
      <footer className={'bg-gradient-to-br from-sky-100 to-sky-50'}>
        <div className={'mx-auto max-w-7xl px-10'}>
          <div className={'flex flex-col gap-6'}>
            <div className={'mx-auto mt-10 max-w-4xl text-center'}>
              <p className={'text-xs leading-relaxed text-gray-500'}>
                Dwellings Group is committed to ensuring digital accessibility for individuals with disabilities. We are
                continuously working to improve the accessibility of our web experience for everyone, and we welcome
                feedback and accommodation requests. If you wish to report an issue or seek an accommodation,
                <span className={'text-sky-900 underline hover:text-sky-950'}> please let us know</span>.
              </p>
            </div>
            <div className={'flex flex-col gap-1'}>
              <div className={'mx-auto max-w-4xl text-center text-xs text-gray-500'}>
                <p>
                  Zillow, Inc. holds real estate brokerage{' '}
                  <span className={'text-sky-900 underline hover:text-sky-950'}>licenses</span> in multiple states.
                  Zillow (Canada), Inc. holds real estate brokerage{' '}
                  <span className={'text-sky-900 underline hover:text-sky-950'}>licenses</span> in multiple provinces.
                </p>
              </div>
              <div className={'mx-auto max-w-4xl text-center text-xs text-gray-500'}>
                <p>
                  §{' '}
                  <span className={'text-sky-900 underline hover:text-sky-950'}>
                    442-H New York Standard Operating Procedures
                  </span>
                </p>
              </div>
              <div className={'mx-auto max-w-4xl text-center text-xs text-gray-500'}>
                <p>
                  § <span className={'text-sky-900 underline hover:text-sky-950'}>New York Fair Housing Notice</span>
                </p>
              </div>
              <div className={'mx-auto max-w-4xl text-center text-xs text-gray-500'}>
                <p>
                  TREC:{' '}
                  <span className={'text-sky-900 underline hover:text-sky-950'}>
                    Information about brokerage services
                  </span>
                  , <span className={'text-sky-900 underline hover:text-sky-950'}>Consumer protection notice</span>
                </p>
              </div>
              <div className={'mx-auto max-w-4xl text-center text-xs text-gray-500'}>
                <p>Still D.R.E #1522444</p>
              </div>
            </div>
            <div className={'mx-auto max-w-4xl text-center text-sm text-sky-900 underline'}>
              <p>Contact Dwellings, Inc. Brokerage</p>
            </div>
            <div className={'mx-auto mb-10 max-w-4xl text-center text-xs text-gray-500'}>
              <p>
                For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by
                The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of
                CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and
                identify the quality of services provided by real estate professionals who are members of CREA. Used
                under license.
              </p>
            </div>
          </div>
        </div>
      </footer>
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
