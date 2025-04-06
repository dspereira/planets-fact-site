import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";

export default function MainPage() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <br></br>
            <InfoCard label="Rotation time" data="243 days"/>
        </>
    )
}