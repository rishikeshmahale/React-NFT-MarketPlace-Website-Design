import React from "react";
import styled from "styled-components";
import choose from "../assests/choose.png";
import Button from "./Button";

const Choose = () => {
  return (
    <Section>
      <div className="image">
        <img src={choose} alt="choose" />
      </div>
      <div className="content">
        <h2>Why Should you Choose our Website ?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit,
          asperiores officia sapiente distinctio tempore est quae explicabo qui
          iusto odio illum fugiat libero eaque pariatur perspiciatis ab esse vel
          nobis rem obcaecati nam ea!
        </p>
        <Button blue text="Read More" />
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0 7rem;
  margin-bottom: 5rem;
  /* border: 1px solid red; */

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    h2{
      font-size: 3rem;
    }

    p{
      color: #7b7e86;
      line-height: 2rem;
    }

  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 50vw;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 1rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;

export default Choose;
