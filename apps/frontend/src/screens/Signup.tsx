
export const  Signup=()=> {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome to our App</h1>
        <p className="mt-4 text-muted-foreground">Sign in with your preferred account to get started.</p>
        <div className="mt-6 space-y-4">
          <button onClick={async()=> {
          window.location.href = "http://localhost:3000/api/v1/auth/google"
         }}
            className="flex w-full items-center justify-center gap-2 rounded-md border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <img
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
              className="h-5 w-5"
              style={{ aspectRatio: "20/20", objectFit: "cover" }}
            />
            Sign in with Google
          </button>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-md border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <img
              src="/placeholder.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="h-5 w-5"
              style={{ aspectRatio: "20/20", objectFit: "cover" }}
            />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
{/* <button onClick={async()=> {
          window.location.href = "http://localhost:3000/api/v1/auth/google"
         */}