import React from 'react';
import styled from 'styled-components';
import cr from "../../assets/images/cr.png";
import circle from "../../assets/images/Ellipse 58.png";
import details from "../../assets/images/details.png";
import { useHistory } from "react-router-dom";
import Pin from "../../assets/images/Pin.png";

function valuetext(value) {
    return `${value}°C`;
  }

const Main_Container=styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    gap: 18px;
    width: 975px;
    /* max-height: fit-content; */
`

const Image=styled.div`
    height: 176px;
    width: 143px;
    border-radius: 2px;
`

const Text_Box=styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
`

const Project=styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Subtitles=styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    img{
        align-self: center;
    }
`

const Details=styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;

    *{
        align-self: center;
    }
`

const Heading=styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 124%;
    color: #21252F;
`

const Paragraph=styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #21252F;
    display: block;
`

const Subtitles_text=styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #9DA8C3;
`

const Details_text=styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #333333;

    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
    align-items: center;
`

const Ongoingprojects = (props) => {
    const history=useHistory();
  return (
    <Main_Container>
        <Image>
            <img src={cr} alt="" />
        </Image>
        <Text_Box>
            <Project>
                <Heading>
                    {props.title?props.title:"Project Title"}
                </Heading>
                <Subtitles>
                    <Subtitles_text>
                        {props.fundraiser?props.fundraiser:"[Name of fundraiser]"} in {props.group?props.group:"[name of the group]"}
                    </Subtitles_text>
                    <img src={circle} alt="" />
                    <Subtitles_text>
                        {props.time?props.time:"19"} hours ago
                    </Subtitles_text>
                    <img className="circle" src={circle} alt="" />
                    <Subtitles_text>
                        {props.goalAmount?props.goalAmount:"$5"} lac
                    </Subtitles_text>
                </Subtitles>
            </Project>
            <Paragraph>
                {props.aboutProject?props.aboutProject:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sed lobortis ut orci quis. Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean.  Nulla proin duis morbi ultrices et eget. Egestas tempor eget pellentesque sed aenean hdgsfgydywefdy..."}
            </Paragraph>
            <Details>
                <div style={{display:"flex" , gap:"6px"}}>
                <div onClick={()=>history.push('./projectdetail.js')}><img src={details} alt="" style={{cursor:"pointer"}}/></div>
                <Details_text>{props.details?props.details:"Details"}</Details_text>
                </div>
                <Details_text> <img src={Pin} alt="" /> Pin</Details_text>
            </Details>
        </Text_Box>
    </Main_Container>
  )
}

export default Ongoingprojects;