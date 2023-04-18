import React from "react"; 
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import styled from "styled-components";
import marketplace1 from "../assests/marketplace1.png";
import marketplace2 from "../assests/marketplace2.png";
import marketplace3 from "../assests/marketplace3.png";
import marketplace4 from "../assests/marketplace4.png";
import marketplace5 from "../assests/marketplace5.png";
import marketplace6 from "../assests/marketplace6.png";
import marketplace7 from "../assests/marketplace7.png";
import marketplace8 from "../assests/marketplace8.png";
import Button from "./Button";

const MarketPlace = () => {

  const marketPlaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
    },
    {
      image: marketplace2,
      name: "Pedram-mohamm...",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
    },
    {
      image: marketplace6,
      name: "Hoang-l-p-solan",
    },
    {
      image: marketplace7,
      name: "Joshua-jay",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
    },
  ];

  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];

  return (
    <>
      <Section>
        <div className="title">
          <h2>NFT MarketPlace</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laudantium quibusdam repellat sint, eaque voluptatum excepturi dolore similique, nam facilis, earum ullam optio iste perspiciatis quasi aliquid iure harum cumque ratione hic exercitationem incidunt error? Veritatis sequi minima voluptas ipsa accusamus unde sed incidunt ut sit accusantium, libero nihil ea.
          </p>
        </div>
        <div className="marketPlaceTypes">
          {marketPlaceType.map((text , index) => {
            return <Button text={text} key={index} blue={index === 0} />;
          })}
        </div>

        <div className="marketPlaces">
          {marketPlaceData.map((i, index) => {
            const { image, name } = i;
            return (
              <div className="marketplace" key={index}>
                <div className="image">
                  <img src={image} alt="marketplace" />
                </div>
                <div className="name">
                  <h4>{name}</h4>
                  <BsThreeDots />
                </div>
                <h5 className="username">@kooluser</h5>
                <div className="price-container">
                  <h5 className="price">5.5ETH</h5>
                  <FaEthereum />
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem;
  margin-bottom: 5rem;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 3rem; */


    h2 {
      font-size: 3rem;
    }

    p {
      color: #7b7e86;
      line-height: 1.6;
    }
  }

  .marketPlaceTypes {
    display: flex;
    justify-content: center;
    gap: 2rem;

    button:not(.blue){
      color:black;
      border-color: #7b7e86;
    }
  }
  
  .marketPlaces{
    /* display: grid; */
    /* grid-template-columns: repeat(4 , 1fr); */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .marketplace{
      box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
      padding: 0.5rem;
      border-radius: 1rem;
      width: max-content;
      transition: 0.5s ease-in-out;

      &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }

      .image{
        margin-bottom: 1rem;
        width: 14rem;

        img{
          width: 100%;
        }
      }

      .name{
        color: #222222;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .username{
        color: #555555;
        font-size: 0.8rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
      }

      .price-container{
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        color: #022048;
      }
    }
  }


  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

`;

export default MarketPlace;
