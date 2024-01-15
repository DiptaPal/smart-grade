import "./App.css";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import StudentInfo from "./component/StudentInfo";

function App() {
    return (
        <div className="bg-[#172227] font-[Inter] text-white">
            <Navbar />
            <Hero />
            <StudentInfo />
            <Footer />
        </div>
    );
}

export default App;
