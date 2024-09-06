// import { useNavigate } from "react-router-dom"
import { Download } from "../components/Download";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const Landing=()=> {
  return (
    <div className="bg-slate-300 flex flex-col min-h-[100dvh]">
     <Header />
      <main className="flex-1">
      <Main/>
       <Footer />
      </main>
      <Download />
    </div>
  )
}
