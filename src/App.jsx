import { Card } from "./components/common/Card";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Card />
        </div>
    );
}

export default App;
