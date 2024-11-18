import Nav from './Nav.tsx'
import SearchSection from './SearchSection.tsx'

function App() {
  return (
    <div className="font-sans">
      <Nav />
      <SearchSection />
      <div className={''}>
        <div className={'mx-auto max-w-7xl px-10'}>
          <div className={'flex gap-2 py-12'}>
            {/*card*/}
            <div
              className={
                'max-w-sm overflow-hidden rounded-xl bg-sky-50 shadow-2xl transition-all duration-300 hover:-translate-y-1'
              }
            >
              <img src={'/src/assets/house-2.jpg'} className={'aspect-video'} />
              <div className={'flex flex-col gap-1 p-2'}>
                <h1 className={'mb-2 text-2xl font-black'}>$650,000</h1>
                <div className={'flex gap-2'}>
                  <p>
                    <span className={'font-extrabold'}>6</span>bd <span className={'text-gray-400'}>|</span>
                  </p>
                  <p>
                    <span className={'font-extrabold'}>4</span>ba <span className={'text-gray-400'}>|</span>
                  </p>
                  <p>
                    <span className={'font-extrabold'}>3,565</span>sqft <span className={'text-gray-400'}>|</span>
                  </p>
                  <p
                    className={
                      'transition-all duration-200 hover:bg-lime-500 hover:px-1 hover:font-black hover:text-white'
                    }
                  >
                    Active
                  </p>
                </div>
                <p className={'text-sm font-light'}>5729 E Fernan Hill Rd, Coeur D Alene, ID, 83814</p>
                <p className={'mb-2 text-xs text-gray-400'}>MLS ID #20242708, WINDERMERE HAYDEN LLC, Chad Salsbury</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
