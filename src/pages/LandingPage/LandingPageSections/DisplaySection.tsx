import { useTextMovingOnScroll } from "@hooks";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.white};

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }

  & > *:nth-child(odd) {
    margin-left: 4rem;
  }
`;

const MainTitle = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: ${(props) => props.theme.fontL};

  background-image: linear-gradient(45deg, ${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  margin-bottom: 1rem;
`;

const Text = styled.div`
  font-size: ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.greyLight};
  margin-bottom: 0.5rem;
  width: 55%;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
`;

const MovingText = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: ${(props) => props.theme.fontL};

  background-image: linear-gradient(45deg, ${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DisplaySection: React.FC = () => {
  const { container, textOne, textTwo } = useTextMovingOnScroll({ xPosition: 20 });
  return (
    <Section>
      <MainTitle>Immersive Display</MainTitle>
      <TextBlockRight>
        <Title>Super Ratine XDR Display</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eum odio sed
          voluptates! In minus omnis harum nam? Magni inventore quam pariatur quae doloribus odio
          excepturi, suscipit reiciendis aliquid.
        </Text>
      </TextBlockRight>
      <TextBlockLeft ref={container}>
        <Title>Big is better</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eum odio sed
          voluptates! In minus omnis harum nam? Magni inventore quam pariatur quae doloribus odio
          excepturi, suscipit reiciendis aliquid.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOne}>Tougher then ever!</MovingText>
        <MovingText ref={textTwo}>Every touch matters.</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;
