import React from "react";
import styled from 'styled-components'
import {color, SectionTitle, SectionWrapper } from "../../assets/GlobalStyles";
import ResponsiveIcon from '../../assets/img/ResponsiveIcon.png'
import WebDevIcon from '../../assets/img/WebDevIcon.png'
import UIUXIcon from '../../assets/img/UIUXIcon.png'

const ServiceCards = styled.div`
    display:grid ;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-content: space-between;
    gap: 2rem;
`;

const Card = styled.div`
    height: 343px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: ${color.itemBg};
    padding: 1.5rem;
    z-index: 5000;

    & img {
        /* width: 50px; */
        height: 50px;
        object-fit: contain;
    }

    & div {
        font-size: 20px;
        font-weight: 700;
    }

    & p {
        font-size: 16px;
        font-weight: 400;
    }
`;

export default function Services() {
  return (
    <section id="services">
      <SectionWrapper display="flex" flexdirection="column" gap="3rem">
        <SectionTitle  style={{zIndex: 5000}}>services</SectionTitle>
        <ServiceCards>
          <Card>
            <img src={WebDevIcon} alt="" />
            <div>Web development</div>
            <p>
              Utilize your expertise in HTML, CSS, and JavaScript to develop
              dynamic and interactive user interfaces, creating a smooth and
              intuitive navigation flow.
            </p>
          </Card>
          <Card>
            <img src={ResponsiveIcon} alt="" />
            <div>Responsive design</div>
            <p>
              Craft visually appealing and user-friendly websites that
              seamlessly adapt to various devices and screen sizes, ensuring a
              consistent and engaging experience for users.
            </p>
          </Card>
          <Card>
            <img src={UIUXIcon} alt="" />
            <div>UI/UX Design</div>
            <p>
              Combine your design skills with a focus on user experience to
              create aesthetically pleasing interfaces that not only look great
              but also enhance overall user satisfaction and engagement.
            </p>
          </Card>
        </ServiceCards>
      </SectionWrapper>
    </section>
  );
}
