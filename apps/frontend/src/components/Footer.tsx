import { PuzzleIcon } from "./PuzzelIcon"


export const Footer = ()=> {
    return <div>
         <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Chess Game</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our chess app offers a range of features to help you improve your skills and enjoy the game.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <PuzzleIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Online Multiplayer</h3>
                <p className="text-muted-foreground">Challenge players from around the world in real-time matches.</p>
              </div>
              <div className="grid gap-1">
                <PuzzleIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Puzzle Challenges</h3>
                <p className="text-muted-foreground">Sharpen your tactics with a vast collection of chess puzzles.</p>
              </div>
              <div className="grid gap-1">
                <PuzzleIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Detailed Analytics</h3>
                <p className="text-muted-foreground">Track your progress and identify areas for improvement.</p>
              </div>
              <div className="grid gap-1">
                <PuzzleIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Personalized Coaching</h3>
                <p className="text-muted-foreground">Get tailored feedback and guidance from chess experts.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Take Your Chess Game to the Next Level
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Download our chess app and start your journey to becoming a chess master.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                
              >
                Download App
              </a>
            </div>
          </div>
        </section>
    </div>
}