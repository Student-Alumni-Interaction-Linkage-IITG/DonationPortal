import React from 'react';
import ApprovalPendingCards from './GsProjectCard';
import styled from 'styled-components';

const projects2=[
    {
        id: "1",
        title: "",
        subTitle: "",
        board: "technical",
        pstatus: ["ongoing","bookmarked","invested"],
        images: ["","",""],
        video: "",
        tags: ["","","",""],
        aboutProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy...",
        goalAmount: "200000",
        currentAmount: "100000",
        howMoneyUsed: ["","",""],
        topDonors: [
            {
                name: "Ayush",
                amount: "20000",
            },
            {}
        ],
        fundraiser: "",
        time: "",
        details: "Proposal"
    },
    {
        id: "2",
        title: "",
        subTitle: "",
        board: "technical",
        pstatus: ["ongoing","bookmarked","invested"],
        images: ["","",""],
        video: "",
        tags: ["","","",""],
        aboutProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy...",
        goalAmount: "200000",
        currentAmount: "100000",
        howMoneyUsed: ["","",""],
        topDonors: [
            {
                name: "Ayush",
                amount: "20000",
            },
            {}
        ],
        fundraiser: "",
        time: "",
        details: "Proposal"
    },
    {
        id: "3",
        title: "",
        subTitle: "",
        board: "technical",
        pstatus: ["ongoing","bookmarked","invested"],
        images: ["","",""],
        video: "",
        tags: ["","","",""],
        aboutProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy...",
        goalAmount: "200000",
        currentAmount: "100000",
        howMoneyUsed: ["","",""],
        topDonors: [
            {
                name: "Ayush",
                amount: "20000",
            },
            {}
        ],
        fundraiser: "",
        time: "",
        details: "Proposal"
    },
    {
        id: "4",
        title: "",
        subTitle: "",
        board: "technical",
        pstatus: ["ongoing","bookmarked","invested"],
        images: ["","",""],
        video: "",
        tags: ["","","",""],
        aboutProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy...",
        goalAmount: "200000",
        currentAmount: "100000",
        howMoneyUsed: ["","",""],
        topDonors: [
            {
                name: "Ayush",
                amount: "20000",
            },
            {}
        ],
        fundraiser: "",
        time: "",
        details: "Proposal"
    },
    {
        id: "5",
        title: "",
        subTitle: "",
        board: "technical",
        pstatus: ["ongoing","bookmarked","invested"],
        images: ["","",""],
        video: "",
        tags: ["","","",""],
        aboutProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy...",
        goalAmount: "200000",
        currentAmount: "100000",
        howMoneyUsed: ["","",""],
        topDonors: [
            {
                name: "Ayush",
                amount: "20000",
            },
            {}
        ],
        fundraiser: "",
        time: "",
        details: "Proposal"
    },
    {
        id: "6",
        title: "",
        subTitle: "",
        board: "technical",
        pstatus: ["ongoing","bookmarked","invested"],
        images: ["","",""],
        video: "",
        tags: ["","","",""],
        aboutProject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy...",
        goalAmount: "200000",
        currentAmount: "100000",
        howMoneyUsed: ["","",""],
        topDonors: [
            {
                name: "Ayush",
                amount: "20000",
            },
            {}
        ],
        fundraiser: "",
        time: "",
        details: "Proposal"
    }
]

const MainElement=styled.div`
    
    padding-left: 250px;
    padding-top: 65px;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.07);

    display: flex;
    flex-direction: column;
    gap: 26px;

    align-items: center;
    justify-content: center;

    max-width: fit-content;
`

const ApprovalPendingpage = () => {
  return (
    <MainElement>
        {
            projects2.map((element,index)=>
                <><ApprovalPendingCards {...element} key={element.id} /><hr width="110%"></hr></>
            )
        }
    </MainElement>
  )
}

export default ApprovalPendingpage;