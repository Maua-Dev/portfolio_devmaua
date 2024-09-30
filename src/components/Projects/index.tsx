import React from 'react'
import {
  Background,
  CardProject,
  CircleMF,
  Container,
  Image,
  Title,
  ArrowButtons
} from './styles'
import { bucketURL } from '../../utils/enviroments'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { ProjectCard } from './component/ProjectCard'

export type Project = {
  title: string
  frontend?: string
  backend?: string
  image?: string
  description?: string
}

const projects = [
  {
    title: 'SMILE MAUÁ',
    frontend: 'Flutter',
    backend: 'Python',
    image: `${bucketURL}/smile.png`,
    description:
      'É um evento que apresenta novas tendências, tecnologias e conteúdos com a finalidade de incentivar o intercâmbio e a atualização de conhecimentos entre profissionais e estudantes.'
  },
  {
    title: 'MAUÁ FOOD',
    frontend: 'Flutter',
    backend: 'Python',
    image: `${bucketURL}/mf.png`,
    description:
      'Um aplicativo para facilitar a vida do aluno e dos funcionários na hora de pedir sua comida nos restaurantes da faculdade.'
  },
  {
    title: 'EUREKA',
    frontend: 'React',
    backend: 'Python',
    image: `${bucketURL}/eureka.png`,
    description:
      'Eureka é um evento em que os alunos do Instituto Mauá expõem seus Trabalhos de Conclusão de Curso (TCCs).'
  },
  {
    title: 'DEV MÉDIAS',
    frontend: 'ReactNative',
    backend: 'Python',
    image: `${bucketURL}/devmedias.png`,
    description:
      'Dev Médias é um aplicativo para ajudar e facilitar a vida dos estudantes na hora de calcular a média final em cada semestre.'
  },
  {
    title: 'PORTAL INTERNO',
    frontend: 'React',
    backend: 'Python',
    image: `${bucketURL}/portalinterno.png`,
    description: ''
  },
  {
    title: 'PORTIFÓLIO',
    frontend: 'React'
  }
]

export const Projects: React.FC = () => {
  const [project, setProject] = React.useState<Project | null>(null)

  return (
    <>
      <Background>
        <Title id="projects">Projetos</Title>
        <Container>
          {project != null && (
            <ProjectCard project={project} setProject={setProject} />
          )}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 5,
                spaceBetween: -20
              },
              375: {
                slidesPerView: 5,
                spaceBetween: -10
              },
              425: {
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
              }
            }}
            slidesPerView={5}
            loop={true}
            coverflowEffect={{
              rotate: 3,
              stretch: -5,
              modifier: 2.0,
              depth: 100,
              slideShadows: false
            }}
            navigation={{
              prevEl: '.swiper-button-next',
              nextEl: '.swiper-button-prev'
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
                    style={{ padding: '16px 8px', paddingLeft: '8px' }}
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
                  style={{ borderRadius: '50%', width: '90%', height: '90%' }}
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
                    style={{ padding: '16px 8px', paddingLeft: '8px' }}
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
                  style={{ borderRadius: '50%', width: '90%', height: '90%' }}
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
  )
}
