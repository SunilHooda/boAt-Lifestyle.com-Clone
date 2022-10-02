import styled from "styled-components";
import year from "./Images/image 121.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 428px;
  left: 0px;
  background: black;

  & img {
    position: absolute;
    width: 24.73%;
    height: 328px;
    left: 7.54%;
    top: 50px;
  }

  & h2 {
    position: absolute;
    width: 34.61%;
    height: 98px;
    left: 34.16%;
    top: 106px;
    color: white;
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: 0.01em;
  }
  & p {
    position: absolute;
    width: 30.16%;
    height: 72px;
    left: 453px;
    top: 217px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: white;
  }

  & div {
    position: absolute;
    width: 30.3%;
    height: 428px;
    left: 70.88%;
    top: 0px;
    background: white;
  }

  & div img {
    position: absolute;
    width: 80%;
    height: 382px;
    left: 20px;
    top: 25px;
  }
`;

export default function Warranty() {
  return (
    <Container>
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3-img.png?v=1626329651"
        alt="speaker"
      />
      <h2>IPX7 Water & Splash Shield</h2>
      <p>
        For complete listening experience get into an immersive sound and light
        show. Customizable lights allow you to creates the perfect vibe.
      </p>
      <div>
        <img src={year} alt="year" />
      </div>
    </Container>
  );
}
