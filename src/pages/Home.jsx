import Starter from "../sections/Home/Starter";
import Features from "../sections/Home/Features";
import WaktuSholat from "../sections/Home/WaktuSholat";
import SatuAyat from "../sections/Home/SatuAyat";
import WhyUs from "../sections/Home/WhyUs";
import Footer from "../sections/Home/Footer";

function App() {
    return (
        <div className="App">
            <Starter />
            <Features />
            <WaktuSholat />
            <SatuAyat />
            <WhyUs />
            <Footer />
        </div>
    );
}

export default App;
