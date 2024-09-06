import { PuzzleIcon } from "./PuzzelIcon"


export const Header = ()=> {
    return  <header className="bg-black px-4 lg:px-6 h-14 flex items-center">
    <a href="#" className="text-white flex items-center justify-center">
      <PuzzleIcon className="h-6 w-6" />
      <span className="text-white sr-only">Chess App</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a href="#" className="text-white text-sm font-medium hover:underline underline-offset-4" >
        Features
      </a>
      <a href="#" className="text-white text-sm font-medium hover:underline underline-offset-4">
        Pricing
      </a>
      <a href="#" className="text-white text-sm font-medium hover:underline underline-offset-4" >
        About
      </a>
      <a href="#" className="text-whitetext-sm font-medium hover:underline underline-offset-4">
        Contact
      </a>
    </nav>
  </header>
}