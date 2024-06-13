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
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ProjectCard } from "./component/ProjectCard";

export type Project = {
  title: string;
  frontend?: string;
  backend?: string;
  image?: string;
}

const projects = [
  { 
    "title" : "SMILE MAUÁ",
    "frontend" : "Flutter", 
    "backend" : "Python", 
    "image" : `${bucketURL}/smile.png`,
  },
  { 
    "title" : "MAUÁ FOOD", 
    "frontend" : "Flutter", 
    "backend": "Python", 
    "image" : `${bucketURL}/mf.png`,
  },
  { 
    "title" : "EUREKA", 
    "frontend" : "React", 
    "backend": "Python", 
    "image" : `${bucketURL}/eureka.png`,
  },
  { 
    "title" : "DEV MÉDIAS", 
    "frontend" : "ReactNative", 
    "backend": "Python", 
    "image" : `${bucketURL}/devmedias.png`,
  },
  { 
    "title" : "PORTAL INTERNO", 
    "frontend" : "React", 
    "backend": "Python", 
    "image" : `${bucketURL}/portalinterno.png`,
  },
  { 
    "title" : "PORTIFÓLIO", 
    "frontend" : "React"
  },
]

export const Projects: React.FC = () => {
  const [project, setProject] = React.useState<Project | null>(null)

  return (
    <>
      <Background>
        <Title id="projects">Projetos</Title>
        <Container>
        {project != null && <ProjectCard project={project} setProject={setProject}/>}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={
              {
                0: {
                  slidesPerView: 5,
                  spaceBetween: -20,
                },
                375:{
                  slidesPerView: 5,
                  spaceBetween: -10
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
                1600: {
                  slidesPerView: 3,
                  spaceBetween: 400
                },
              }
            }
            slidesPerView={5}
            loop={true}
            coverflowEffect={{
              rotate: 3,
              stretch: -5,
              modifier: 2.0,
              depth: 100,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".swiper-button-next",
              nextEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[0])}>
                <Image src={projects[0].image} alt="smile" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[1])}>
                <CircleMF>
                  <Image
                    style={{ padding: "16px 8px", paddingLeft: "8px" }}
                    src={projects[1].image}
                    alt="mf"
                  />
                </CircleMF>
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[2])}>
                <Image src={projects[2].image} alt="eureka" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[3])}>
                <Image src={projects[3].image} alt="devmedias" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[4])}>
                <Image
                  style={{ borderRadius: "50%", width: "90%", height: "90%" }}
                  src={projects[4].image}
                  alt="portalinterno"
                />
              </CardProject>
            </SwiperSlide>

            {/* REPETIÇÃO DOS SLIDES  */}
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[0])}>
                <Image src={projects[0].image} alt="smile" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[1])}>
                <CircleMF>
                  <Image
                    style={{ padding: "16px 8px", paddingLeft: "8px" }}
                    src={projects[1].image}
                    alt="mf"
                  />
                </CircleMF>
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[2])}>
                <Image src={projects[2].image} alt="eureka" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[3])}>
                <Image src={projects[3].image} alt="devmedias" />
              </CardProject>
            </SwiperSlide>
            <SwiperSlide>
              <CardProject onClick={() => setProject(projects[4])}>
                <Image
                  style={{ borderRadius: "50%", width: "90%", height: "90%" }}
                  src={projects[4].image}
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
