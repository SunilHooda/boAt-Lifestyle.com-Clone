import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 669px;
  left: 0px;
  background: rgb(105, 105, 105);
  background: linear-gradient(
    90deg,
    rgba(105, 105, 105, 1) 51%,
    rgba(169, 169, 169, 1) 77%,
    rgba(101, 101, 101, 1) 100%
  );

  & > div {
    position: relative;
    width: 38.08%;
    height: 414px;
    left: 7.54%;
    top: 127px;
    background: black;
    border-radius: 10px;
  }

  & .leftSpec {
    position: absolute;
    width: 50%;
    top: 32px;
    left: 31px;
    text-align: left;
  }

  & .leftSpec p {
    margin-top: 5px;
    color: white;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }

  & .rightSpec {
    position: absolute;
    width: 50%;
    top: 32px;
    left: 50%;
    text-align: left;
  }

  & .rightSpec p {
    margin-top: 5px;
    color: white;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    font-weight: 600;
  }
`;

const CelebrityImage = styled.div`
  & img {
    position: absolute;
    width: 120%;
    height: 750px;
    right: -120%;
    top: -208px;
  }
`;

export default function Celebrity() {
  return (
    <>
      <Container>
        <div>
          <div className="leftSpec">
            <p>Speaker Type</p>
            <p>IPX Rating</p>
            <p>Driver Size</p>
            <p>Impedance</p>
            <p>Sensititvity (db)</p>
            <p>Frequentlt Response</p>
            <p>Changing Time</p>
            <p>Bluetooth Version</p>
            <p>Country of Origin</p>
            <p>Compatibility</p>
            <p>Bluetooth Range</p>
          </div>
          <div className="rightSpec">
            <p>Poratble Wireless Speaker</p>
            <p>IPX7</p>
            <p>76mm* 2 Drivers</p>
            <p>6Q</p>
            <p>75DB+DB</p>
            <p>100Hz-20Hz</p>
            <p>4 Hours</p>
            <p>V5.0</p>
            <p>China</p>
            <p>All Bluetooth Devices</p>
            <p>10M</p>
          </div>
          <CelebrityImage>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Specification_c1836cd6-a5fd-45d8-a6d3-5f9d59e32822.png?v=1626329651"
              alt="neha"
            />
          </CelebrityImage>
        </div>
      </Container>
    </>
  );
}
