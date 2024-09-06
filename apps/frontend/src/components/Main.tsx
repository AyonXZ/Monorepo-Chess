import { useNavigate } from "react-router-dom"
import { PuzzleIcon } from "./PuzzelIcon"


export const Main=()=> {
  const navigate = useNavigate();
    return   <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              <PuzzleIcon className="h-4 w-4 inline-block mr-1" />
              Chess App
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Master the Game of Kings
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Elevate your chess skills with our comprehensive app. Play online, solve puzzles, and analyze your
              progress.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <a
              href="/game"
              className="bg-black text-white hover:bg-slate-300 hover:text-black inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

            >
              Play
            </a>
            <a onClick={()=> {
              navigate("/signup")
            }}
              href="#"
              className="bg-black text-white hover:bg-slate-300 hover:text-black inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
             Sign Up
            </a>
            <a onClick={()=> {
              window.location.href = "http://localhost:3000/api/v1/logout";
            }}
              href="#"
              className="bg-black text-white hover:bg-slate-300 hover:text-black inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
             Logout
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <PuzzleIcon className="h-48 w-48 text-primary" />
        </div>
      </div>
    </div>
  </section>
}