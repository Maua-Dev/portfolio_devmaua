import React from "react";
import {
  Background,
  CardProject,
  CircleMF,
  Container,
  Image,
  Title,
  ArrowButtons,
} from "./styles";
import { bucketURL } from "../../utils/enviroments";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export const Projects: React.FC = () => {
  const projects = [
    `${bucketURL}/smile.png`,
    `${bucketURL}/mf.png`,
    `${bucketURL}/eureka.png`,
    `${bucketURL}/devmedias.png`,
    `${bucketURL}/portalinterno.png`,
  ];

  return (
    <>
      <Background>
        <Title id="projects">Projetos</Title>
        <Container>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={
              {
                0: {
                  slidesPerView: 4,
                  spaceBetween: -5,
                },
                375:{
                  slidesPerView: 4,
                  spaceBetween: 15
                },
                425:{
                  slidesPerView: 4,
                  spaceBetween: -20
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 10
                },
              }
            }
            loop={true}
            coverflowEffect={{
              rotate: 3,
              stretch: -20,
              modifier: 2.0,
              depth: 70,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".swiper-button-next",
              nextEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            <SwiperSlide>
              <CardProject>
                <Image src={projects[0]} alt="smile" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <CircleMF>
                  <Image
                    style={{ padding: "16px 8px", paddingLeft: "8px" }}
                    src={projects[1]}
                    alt="mf"
                  />
                </CircleMF>
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <Image src={projects[2]} alt="eureka" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <Image src={projects[3]} alt="devmedias" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <Image
                  style={{ borderRadius: "50%", width: "90%", height: "90%" }}
                  src={projects[4]}
                  alt="portalinterno"
                />
              </CardProject>
            </SwiperSlide>

            {/* REPETIÇÃO DOS SLIDES  */}
            <SwiperSlide>
              <CardProject>
                <Image src={projects[0]} alt="smile" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <CircleMF>
                  <Image
                    style={{ padding: "16px 8px", paddingLeft: "8px" }}
                    src={projects[1]}
                    alt="mf"
                  />
                </CircleMF>
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <Image src={projects[2]} alt="eureka" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <Image src={projects[3]} alt="devmedias" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject>
                <Image
                  style={{ borderRadius: "50%", width: "90%", height: "90%" }}
                  src={projects[4]}
                  alt="portalinterno"
                />
              </CardProject>
            </SwiperSlide>
          </Swiper>
          <ArrowButtons className="slide-controler">
            <IoChevronBackCircleOutline className="swiper-button-next slider-arrow"></IoChevronBackCircleOutline>
            <IoChevronForwardCircleOutline className="swiper-button-prev slider-arrow"></IoChevronForwardCircleOutline>
          </ArrowButtons>
        </Container>
      </Background>
    </>
  );
};
