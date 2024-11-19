import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'
import { HouseCard, houseListings } from './fake-data/house-card.ts'
import { Card } from './Card.tsx'
import { cn } from './lib/utils.ts'

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
      <section className={'border-b-2 border-sky-300 bg-gradient-to-br from-sky-50 to-sky-50'}>
        <div className={'mx-auto max-w-7xl px-10'}>
          <div className={'flex flex-col gap-2'}>
            <div className={'p-10'}>
              <h6 className={'mb-5 text-center text-xl font-semibold text-sky-950'}>
                About dwelling's recommendations.
              </h6>
              <p className={'text-center text-gray-500'}>
                Recommendations are based on your location and search activity, such as the homes you've viewed and
                saved and the filters you've used. We use this information to bring similar homes to your attention, so
                you don't miss out.
              </p>
            </div>
            <div className={'mb-5 grid gap-4 overflow-hidden py-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
              <button className={'border-r-2 border-sky-800 text-lg'}>
                <span className={'text-sky-950 hover:underline'}>Real Estate</span>{' '}
                <span className={'text-sky-500'}>&darr;</span>
              </button>
              <button className={'border-r-2 border-sky-800 text-lg'}>
                <span className={'text-sky-950 hover:underline'}>Rentals</span>{' '}
                <span className={'text-sky-500'}>&darr;</span>
              </button>

              <button className={'border-r-2 border-sky-800 text-lg'}>
                <span className={'text-sky-950 hover:underline'}>Mortage Rates</span>{' '}
                <span className={'text-sky-500'}>&darr;</span>
              </button>

              <button className={'text-lg'}>
                <span className={'text-sky-950 hover:underline'}>Browse Homes</span>{' '}
                <span className={'text-sky-500'}>&darr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Features() {
  return (
    <section className={'bg-gray-100'}>
      <div className={'mx-auto max-w-7xl px-10'}>
        <div className={'flex justify-center gap-4 py-20'}>
          <InfoCard
            header={'Buy a home'}
            words={
              ' A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses.'
            }
            img={'/src/assets/innovation-amico.svg'}
            buttonWords={'Find a local agent now'}
          />
          <InfoCard
            header={'Finance a home'}
            words={
              'Zillow Home Loans can get you pre-approved so youre ready to make an offer quickly when you find the right home.'
            }
            buttonWords={'Start now'}
            img={'/src/assets/innovation-bro.svg'}
          />
          <InfoCard
            header={'Sell a home'}
            words={'No matter what path you take to sell your home, we can help you navigate a successful sale.'}
            buttonWords={'See your options'}
            img={'/src/assets/laval-lamp.svg'}
          />
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  header,
  words,
  buttonWords,
  img,
}: {
  header: string
  words: string
  buttonWords: string
  img: string
}) {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col px-4',
        'bg-sky-50',

        'rounded-3xl border-4 border-sky-200 shadow-lg shadow-sky-200',
        'hover:-translate-y-1.5 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-300',
        'odd:hover:translate-x-1.5 even:hover:-translate-x-1.5',
        'transition-all duration-300'
      )}
    >
      <img
        src={img}
        className={'mx-auto my-10 size-32'}
      />
      <h1 className={'mx-auto mb-5 text-3xl font-bold text-sky-950'}>{header}</h1>
      <p className={'mx-auto mb-10 text-center text-gray-600'}>{words}</p>
      <button
        className={cn(
          'mx-auto mb-20 mt-auto rounded-lg px-4 py-2 ring-2 ring-sky-300',
          'hover:bg-sky-100 hover:shadow-2xl hover:shadow-sky-300 hover:ring-4',
          'transition-all duration-300'
        )}
      >
        <span className={'text-sky-950'}>{buttonWords}</span>
      </button>
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
      <div className={'mx-auto max-w-7xl overflow-scroll overflow-y-auto px-10'}>
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
          <div className={'flex min-w-48'}>
            <button
              className={cn(
                'my-auto ml-5 rounded-lg px-4 py-1 ring-1 ring-sky-300',
                'transition-all duration-300',
                'hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-2xl hover:shadow-sky-300 hover:ring-2'
              )}
            >
              <span className={'font-medium text-sky-950'}>See more &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
