import { HouseCard } from './fake-data/house-card.ts'
import { StatusBadge } from './StatusBadge.tsx'

export function Card({ data }: { data: HouseCard }) {
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