import { InfoCard } from './InfoCard.tsx'

export function Features() {
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