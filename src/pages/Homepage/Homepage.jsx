import React from 'react'
import Directory from '../../components/Directory/Directory';
import "./Homepage.scss";
import { HomePageContainer } from "./Homepage.styles";

const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default Homepage;
