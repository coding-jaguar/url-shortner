import Introduction from "./components/Introduction";
import InputComponent from "./components/InputComponent";
import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import { ScrollProvider } from "./contexts/ScrollContext";
import Footer from "./components/Footer";
import ApiOutput from "./components/ApiOutput";
import { ShortenedUrlProvider } from "./contexts/ShortenedUrlContext";

export default function Home() {
  return (
    <div>
      <ShortenedUrlProvider>
        <ScrollProvider>
          <Introduction />
          <InputComponent />
          <ApiOutput />
          <AdvancedStatistics />
          <BoostLinks />
          <Footer />
        </ScrollProvider>
      </ShortenedUrlProvider>
    </div>
  );
}
