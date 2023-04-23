import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  padding: 10vw;
  border-radius: 20px;
  background-color: #000;
  background-size: 100% 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #f5f5f5;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #f5f5f5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  min-width: 300px;
  min-height: 60px;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4fd1c5;
  background: linear-gradient(
    90deg,
    rgba(129, 230, 217, 1) 0%,
    rgba(79, 209, 197, 1) 100%
  );
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
`;

const donate = () => {
  return (
    <Page>
      <Hero>
        <Title>Donate effortlessly</Title>
        <Subtitle>
          Click on the donaten button and
          <br></br>
          you will be redirected to payments
        </Subtitle>
      </Hero>
      <Content>
        <Button>Donate Now</Button>
      </Content>
    </Page>
  );
};

export default donate;
