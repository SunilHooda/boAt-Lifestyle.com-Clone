import styled from "styled-components";
import { ChevronDownIcon } from "@chakra-ui/icons";

const FAQ = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  left: 0px;
  background: #ffffff;

  & h2 {
    position: absolute;
    width: 10.48%;
    height: 40px;
    left: 27%;
    top: 10px;
    font-weight: 600;
    font-size: 32px;
    line-height: 61px;
    letter-spacing: 0.05em;
    color: black;
  }

  & div {
    position: absolute;
    top: 50px;
    left: 29.5%;
    width: 41%;
  }

  & details {
    cursor: pointer;
    border-bottom: 0.5px solid grey;
    padding-bottom: 12px;
    margin-top: 14px;
  }

  & details summary {
    color: black;
    list-style: none;
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.01em;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
  }

  & details summary .img {
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-right: 15px;
    color: red;
  }

  & details p {
    font-size: 16px;
    color: #6a6a6a;
    text-align: left;
  }

  & .view {
    position: relative;
    width: 100%;
  }

  & .view p {
    position: absolute;
    width: 210px;
    height: 32px;
    left: 14%;
    top: 350px;
    font-weight: 500;
    font-size: 17px;
    line-height: 32px;
    letter-spacing: 0.01em;
    color: #ff0000;
  }

  & .view p .img1 {
    margin-left: 5px;
    margin-bottom: 3px;
    width: 20px;
    height: 20px;
    color: red;
  }
`;

export default function Faq() {
  const details = document.querySelectorAll("details");

  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });
  return (
    <FAQ>
      <h2>FAQs</h2>
      <div>
        <details>
          <summary>
            Q. Can I use any adapter to charge my device?
            <ChevronDownIcon className="img" />
          </summary>
          <p>Yes, you can use any adapter to charge </p>
        </details>
        <details>
          <summary>
            Q. Can we Connect by Aux?
            <ChevronDownIcon className="img" />
          </summary>
          <p>Yes you can connect it through AUX</p>
        </details>
        <details>
          <summary>
            Q. Can we get a charger along with the speaker?
            <ChevronDownIcon className="img" />
          </summary>
          <p>Something small enough to escape casual notice.</p>
        </details>
        <details>
          <summary>
            Q. Does it support fast charging??
            <ChevronDownIcon className="img" />
          </summary>
          <p>Something small enough to escape casual notice.</p>
        </details>
        <details>
          <summary>
            Q. Is there a warranty for the product? How do I claim warranty?
            <ChevronDownIcon className="img" />
          </summary>
          <p>
            Yes, all of our true wireless earbuds come with a 1 year warranty.
          </p>
        </details>
        <details>
          <summary>
            Q. How can I connect with Google and Siri?
            <ChevronDownIcon className="img" />
          </summary>
          <p>
            Yes, you can double tap to connect with Google & Siri and activate
            the voice assistant.
          </p>
        </details>
      </div>
      <div className="view">
        <p>
          View More
          <ChevronDownIcon className="img1" />
        </p>
      </div>
    </FAQ>
  );
}
