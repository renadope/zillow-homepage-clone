import { SeeMoreButton } from './SeeMoreButton.tsx'

export function AboutSection() {
  return (
    <section className={'bg-gradient-to-br from-sky-100 to-sky-50'}>
      <div className={'mx-auto max-w-7xl border-b-2 border-sky-300 px-10'}>
        <div className={'flex flex-col gap-2'}>
          <div className={'p-10'}>
            <h6 className={'mb-5 text-center text-xl font-semibold text-sky-950'}>About dwelling's recommendations.</h6>
            <p className={'text-center text-gray-500'}>
              Recommendations are based on your location and search activity, such as the homes you've viewed and saved
              and the filters you've used. We use this information to bring similar homes to your attention, so you
              don't miss out.
            </p>
          </div>
          <div className={'mb-5 grid gap-4 overflow-hidden py-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
            <SeeMoreButton label={'Real Estate'} />
            <SeeMoreButton label={'Rentals'} />
            <SeeMoreButton label={'Mortgage Rates'} />
            <SeeMoreButton label={'Buy Homes'} />
          </div>
        </div>
      </div>
    </section>
  )
}
