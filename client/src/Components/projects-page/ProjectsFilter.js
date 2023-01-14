import React from "react";
import FilterIcon from '../../assets/images/profile-images/filtericon.png';
import styled from "styled-components";

const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    height: 3.5vw;
    border: .1px solid white;
    border-radius: 5px;
`

const Elements = styled.div`
    padding: 1.5%;
    width: 17.5vw;
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
    color: #000000;
    background: #f6f2f2;
    opacity: 1;
    text-align: center;

    :hover{
        cursor: pointer;
        background-color: #FCFCFC;
        color: #000000;
        border-bottom: 2.5px solid #000000;
    }

    .filter {
        width: 8vw;
        height: 3.3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-radius: 4px;
        margin-left: 2vw;
    }
`

function ProjectsFilter() {
    return (
        <Navbar>
            <Elements>Invested Projects</Elements>
            <Elements>Bookmarked Projects Projects</Elements>
            <Elements>Recommended Projects</Elements>
            <Elements style={{paddingTop: "0.1%",paddingLeft: "5%"}}>
                <div className="filter">
                    <img src={FilterIcon} alt='' style={{padding: 5}}/>
                    Filter
                </div>
            </Elements>
        </Navbar>
    )
}

export default ProjectsFilter;