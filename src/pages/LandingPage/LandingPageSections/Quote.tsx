import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quote: React.FC = () => {
  return <Section>Quote</Section>;
};

export default Quote;
