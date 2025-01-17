import Header from "./components/landing-page/header";
import Hero from "./components/landing-page/hero";
import VideoExplanation from "./components/landing-page/video-explanation";

export default function Home() {
  return (
    <div className="h-screen max-w-7xl mx-auto">
      <Header />
      <Hero />

      <VideoExplanation />
      {/* <Price />
      <Faq />  */}
    </div>
  );
}
