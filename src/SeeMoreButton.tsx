export function SeeMoreButton({ label }: { label: string }) {
  return (
    <button className={'border-r-2 border-sky-800 text-lg'}>
      <span className={'text-sky-950 hover:underline'}>{label}</span> <span className={'text-sky-500'}>&darr;</span>
    </button>
  )
}
