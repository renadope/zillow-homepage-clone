import { HouseCard } from './fake-data/house-card.ts'
import { Card } from './Card.tsx'
import { cn } from './lib/utils.ts'

export function HouseCardRow({
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
