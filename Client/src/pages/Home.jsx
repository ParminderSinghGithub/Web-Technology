import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WelcomeMessage from "../components/WelcomeMessage";
import LoginButton from "../components/LoginButton";
import CollegesIntro from "../components/CollegesIntro";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <main>
                <br />
                <WelcomeMessage></WelcomeMessage>
                <br />
                <LoginButton></LoginButton>
                <br /><br />
                <CollegesIntro></CollegesIntro>
            </main><br/>
            <Footer></Footer>
        </>
    );
}

export default HomePage;