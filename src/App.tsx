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
        <div className={'flex items-center justify-center'}>
          <button className={'bg-white p-4 text-lg font-semibold text-sky-700'}>
            <span> &darr; </span> <span className={'text-center hover:underline'}>More recommended Homes</span>
          </button>
        </div>
      </div>
      {/*<div className={'bg-sky-500'}>*/}
      {/*  <div className={'mx-auto max-w-7xl px-10'}>*/}
      {/*    <p>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur ducimus enim est fugiat*/}
      {/*      iste laudantium maiores nemo nihil, officiis omnis perspiciatis quidem rem, sit voluptates! Ad animi commodi*/}
      {/*      ducimus libero molestiae quis rerum tempora voluptas. Aliquid animi, culpa delectus deserunt ea facere*/}
      {/*      fugiat inventore ipsum iste magni possimus qui recusandae repellat sint, soluta suscipit totam. Aspernatur*/}
      {/*      id libero nisi, officiis provident quis quisquam sit? Asperiores assumenda culpa cum dolorem eaque eius*/}
      {/*      enim, facilis fuga ipsum labore libero nam natus optio pariatur quae recusandae saepe sit veritatis voluptas*/}
      {/*      voluptatibu! Aliquam cum facere facilis fuga minus non odio quisquam tempora veritatis.z*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
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
