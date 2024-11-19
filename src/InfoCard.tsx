import { cn } from './lib/utils.ts'

export function InfoCard({
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
