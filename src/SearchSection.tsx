export default function SearchSection() {
  return (
    <div className={'relative h-full w-full overflow-hidden'}>
      <div className={"absolute inset-0 bg-[url('src/assets/house-2.jpg')] bg-cover bg-center bg-no-repeat"}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 to-sky-900/50" aria-hidden="true" />
      <div className="relative z-10 p-8">
        <div className={'mx-auto max-w-7xl px-10'}>
          <div className={'flex flex-col justify-center gap-2 px-2 py-16'}>
            <div className={'flex flex-1 gap-6'}>
              <h1 className={'text-6xl font-black text-sky-50'}>Agents.</h1>
              <h1 className={'text-6xl font-black text-sky-50'}>Tours.</h1>
            </div>
            <div className={'mb-10 flex flex-1 gap-6'}>
              <h1 className={'text-6xl font-black text-sky-50'}>Loans.</h1>
              <h1 className={'text-6xl font-black text-sky-50'}>Homes.</h1>
            </div>
            <div>
              <input
                type={'text'}
                className={'w-5/12 rounded-xl p-5 text-sky-950 shadow-2xl'}
                placeholder={'Enter an address, neighborhood or Zip Code.'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
