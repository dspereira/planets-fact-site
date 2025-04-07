import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import PlanetInfo from "../components/PlanetInfo";

export default function MainPage() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <br></br>
            <InfoCard label="Rotation time" data="243 days"/>

            <br></br>
            <PlanetInfo planet="eart" info="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."></PlanetInfo>

            <br></br>
            <Button index="01" label="overview" isActive={false}/>
        </>
    )
}
