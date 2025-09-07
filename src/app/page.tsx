import { MainSection } from "../components/pages/home/mainSection";
import Footer from "../components/body/footer";
import { Header } from "../components/body/header";


export default function Home() {
  return (
    <main className="min-h-screen bg-black grid-pattern">
      <Header></Header>
      <section>
        <MainSection></MainSection>
      </section>
      <Footer></Footer>
    </main>
  );
}
