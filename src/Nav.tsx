export default function Nav() {
  return (
    <nav className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex items-center justify-between py-2">
          <div className="flex gap-6">
            <a href="#" className="text-lg hover:text-sky-600">
              Buy
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Rent
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Sell
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Home Loans
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Find an Agent
            </a>
          </div>

          <div className="flex items-center justify-center">
            <img src="/src/assets/logo.svg" alt="Company Logo" className="h-16 w-auto" />
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-lg hover:text-sky-600">
              Manage Rentals
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Advertise
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Help
            </a>
            <a href="#" className="text-lg hover:text-sky-600">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
