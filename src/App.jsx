import Counter from "./components/common/counter/Counter";
import { Navbar } from "./components/layout/navbar/Navbar";
// import { Footer } from "./components/layout/footer/Footer";
import { IttemListContainer } from "./components/pages/itemListContainer/IttemListContainer";

function App() {
    return (
        <>
            <Navbar />
            <IttemListContainer />
            {/* <Footer /> */}
            <Counter />
        </>
    );
}

export default App;
