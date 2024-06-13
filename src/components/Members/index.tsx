import React, { useState } from "react";
import { Avatar, Biography, CardMember, CardSelect, Container, MemberName, RowCards, StackName, Title } from "./styles";
import { MemberCard } from "./component/MemberCard";

export type Member = {
  name: string;
  photo: string;
  tag: string[];
  course: string;
  year: string;
  technologies: string[];
  birthday: string;
  linkedin: string;
  github: string;
}

export const Members: React.FC = () => {
  const [filtro, setFiltro] = useState<string>()
  const [membros, setMembros] = useState<Member[]>(members)
  const [member, setMember] = useState<Member|null>(null)

  const toggleFiltro = (filt: string) => {
    // Adicionar um filtro que fica verdadeiro se a gnt clica e falso se clicamos novamente
    if (filtro === filt) {
      setFiltro('');
      setMembros(members);
    } else {
      setFiltro(filt);
      setMembros(members.filter((m) => m.tag.includes(filt)));
    }
  }

  const handleClick = (filt: string) => {
    toggleFiltro(filt);
  }

  return (
    <Container>
      {member != null && <MemberCard member={member}/>}
      <Title id="members">Membros</Title>
      <RowCards>
        <CardSelect selected={filtro === "Diretoria"} onClick={() => handleClick("Diretoria")}>Diretoria</CardSelect>
        <CardSelect selected={filtro === "DEV"} onClick={() => handleClick("DEV")}>Devs</CardSelect>
        <CardSelect selected={filtro === "Infra"} onClick={() => handleClick("Infra")}>Infra</CardSelect>
        <CardSelect selected={filtro === "UX / UI"} onClick={() => handleClick("UX / UI")}>UX/UI</CardSelect>
        <CardSelect selected={filtro === "PO"} onClick={() => handleClick("PO")}>POs</CardSelect>
        <CardSelect selected={filtro === "Comunicação"} onClick={() => handleClick("Comunicação")}>Comunicação</CardSelect>
        <CardSelect selected={filtro === "RH"} onClick={() => handleClick("RH")}>RH</CardSelect>
        <CardSelect selected={filtro === "Financeiro"} onClick={() => handleClick("Financeiro")}>Financeiro</CardSelect>
        <CardSelect selected={filtro === "Data Science"} onClick={() => handleClick("Data Science")}>Data Science</CardSelect>
      </RowCards>
      <RowCards style={{ justifyContent: 'flex-start' }}>
        {membros.map((data) => (
          <CardMember onClick={()=>setMember(data)}>
            <Avatar src={data.photo} alt="profile" />
            <MemberName>{data.name}</MemberName>
            <StackName>
              {data.tag.map((t, i) => (
                <React.Fragment key={i}>
                  {t}
                  {i < data.tag.length - 1 && ", "}
                </React.Fragment>
              ))}
            </StackName>
            <Biography>Ler bio</Biography>
          </CardMember>
        ))}
      </RowCards>
    </Container>
  )
}


const members = [
  {
    "name": "Enrico Mota Santarelli",
    "birthday": "7/23/2003",
    "ra": "22.00370-3",
    "email_dev": "esantarelli.devmaua@gmail.com",
    "course": "Engenharia da Computação",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1WgkvcXrvrgRgHs3Qvqw2s9APfeaB8jYR",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "Flutter",
      "React"
    ],
    "linkedin": "https://www.linkedin.com/in/enrico-santarelli-b50054236/",
    "github": "https://github.com/EnricoSantarelli"
  },
  {
    "name": "Gustavo Seripierri da Conceição ",
    "birthday": "10/2/2004",
    "ra": "24.00630-0",
    "email_dev": "gser.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1XG64cXrppqaI5PqND1afCmukh7aYOtM7",
    "tag": [
      "DEV"
    ],
    "technologies": []
  },
  {
    "name": "Gustavo Hamad Tamura",
    "birthday": "10/27/2005",
    "ra": "24.00006-0",
    "email_dev": "gtamura.devmaua@gmail.com",
    "course": "Ciencia da Computação 1",
    "year": "ano",
    "photo": "https://drive.google.com/open?id=1ZVxoTWaImJs9SlVR6T-VKm5DZbke2peA",
    "tag": [
      "DEV"
    ],
    "technologies": []
  },
  {
    "name": "Gabriela Formagge Moreira",
    "birthday": "1/11/2000",
    "ra": "21.95016-4",
    "email_dev": "gformagge.dev@gmail.com",
    "course": "Design",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1MdiWdOnOaY0TxT5dfB_WJbnrke7aWkiP",
    "tag": [
      "UX / UI"
    ],
    "technologies": [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator"
    ],
    "linkedin": "https://www.linkedin.com/in/gabriela-formagge-18b763183/"
  },
  {
    "name": "Eimi Takatori Okuda ",
    "birthday": "11/18/2002",
    "ra": "22.00776-8",
    "email_dev": "eokuda.devmaua@gmail.com",
    "course": "Design",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=16DJQscpiinUkWJMVSzO-FFwhiLRcs5Wm",
    "tag": [
      "Comunicação"
    ],
    "technologies": [],
    "linkedin": "https://www.linkedin.com/in/eimi-okuda-b66293258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Rafael Carvalho",
    "birthday": "6/9/2006",
    "ra": "24.00003-5",
    "email_dev": "rruthes.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1UlFQz-dBy0vJAvQz6CRTmGyoZv8xNfxl",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "GitHub",
      "Eclipse",
      "VsCode"
    ],
    "linkedin": "https://www.linkedin.com/in/rafael-ruthes-5445031ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "github": "https://github.com/rruthes"
  },
  {
    "name": "Bruno Oseliero Gomes de Souza",
    "birthday": "1/23/0006",
    "ra": "24.00328-0",
    "email_dev": "boseliero.devmaua@gmail.com",
    "course": "Engenharia da computação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1b3DFj9Lc1TACLDeGSI5UP7Ysric_BYa1",
    "tag": [
      "DEV",
      "UX / UI"
    ],
    "technologies": []
  },
  {
    "name": "Mateo",
    "birthday": "10/25/2005",
    "ra": "24.00775-7",
    "email_dev": "mcortez.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1u46h38VXQqC7jbTxtOCBNls9FDMQXEID",
    "tag": [
      "DEV",
      "UX / UI"
    ],
    "technologies": []
  },
  {
    "name": "Thamires Pietra Menezes dos Santos",
    "birthday": "7/28/2005",
    "ra": "24.00872-9",
    "email_dev": "tpietra.devmaua@gmail.com",
    "course": "Ciência de dados e Inteligência Artificial",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1lz4f6qKFKUfwo9J8lBqVFoIiVey0hNF_",
    "tag": [
      "DEV"
    ],
    "technologies": []
  },
  {
    "name": "João Antonnio Martinez",
    "birthday": "7/25/2005",
    "ra": "23.00983-7",
    "email_dev": "jmartinez.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "2ano",
    "photo": "https://drive.google.com/open?id=1cCKq2TZ2Gt6ZmZnwRuloNMJ8AHfaa0zz",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "Java",
      "python",
      "HTML",
      "CSS",
      "React",
      "Javascript",
      "node.js",
      "bootsrap",
      "SQL",
      ""
    ],
    "linkedin": "www.linkedin.com/in/ joao-martinez-br-cic",
    "github": "https://github.com/JamizM"
  },
  {
    "name": "Luigi Trevisan",
    "birthday": "12/17/2004",
    "ra": "22.01102-0",
    "email_dev": "ltrevisan.devmaua@gmail.com",
    "course": "Ciência da Computação",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=19vGz1P46LoXG8Pq47zIlAuzVI05ShDaJ",
    "tag": [
      "DEV",
      "Infra"
    ],
    "technologies": [
      "Python",
      "AWS"
    ],
    "linkedin": "linkedin.com/in/luigi-trevisan",
    "github": "github.com/LuigiTrevisan"
  },
  {
    "name": "Amanda Juliani Huck",
    "birthday": "10/28/2003",
    "ra": "22.00468-8",
    "email_dev": "ahuck.devmaua@gmail.com",
    "course": "Design",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1nr5ifoghQVL-IgNcN_GACNfBIZaQOLL9",
    "tag": [
      "UX / UI"
    ],
    "technologies": [
      "Figma",
      "photoshop",
      "illustrator",
      "adobe XD"
    ],
    "linkedin": "https://www.linkedin.com/in/amanda-juliani-huck-9451562b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Dimitri ",
    "birthday": "12/21/2003",
    "ra": "22.00820-9 ",
    "email_dev": "doliveira.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1uyF1t6iUkaOvkh9lhrakPA6SiQy3Myrc",
    "tag": [
      "Comunicação"
    ],
    "technologies": [
      "Java",
      "Python",
      "Django",
      "SQL",
      "PowerBI",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "linkedin": "https://www.linkedin.com/in/dimitri-zenaro-1a8279213",
    "github": "https://github.com/Diimy"
  },
  {
    "name": "Arthur Barbosa Dornelas Silva ",
    "birthday": "2/6/2006",
    "ra": "24.00813-3",
    "email_dev": "asilva.devmaua@gmail.com",
    "course": "Sistemas de Informação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1InJUd1WYnOVYoAQmRb8bDojN29viLz4V",
    "tag": [
      "DEV",
      "PO"
    ],
    "technologies": [],
    "linkedin": "",
    "github": "https://github.com/MrFr0gg"
  },
  {
    "name": "Rafael Rubio ",
    "birthday": "5/25/2002",
    "ra": "20.00611-0",
    "email_dev": "rrubio.devcomaua@gmail.com",
    "course": "Engenharia de computação",
    "year": "4ano",
    "photo": "https://drive.google.com/open?id=1cwSyOk36Ib2y52Fu_yGKKdAOAR1RFBNR",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "Python",
      "AWS"
    ],
    "linkedin": "Confira o perfil de Rafael Rubio Carnes no LinkedIn https://br.linkedin.com/in/rafael-rubio-carnes-b2561b212",
    "github": "github.com/rubiozito"
  },
  {
    "name": "Luca Pinheiro Gomes",
    "birthday": "11/23/2003",
    "ra": "23.00335-9",
    "email_dev": "lpg.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1_QATfDuMmPeMLNKdftdQ2EDrM3jRcNk6",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "NodeJs",
      "Typescript",
      "Clean Architeture",
      "ExpressJs",
      "SpringBoot"
    ],
    "linkedin": "https://www.linkedin.com/in/luca-pinheiro-gomes-516661213/",
    "github": "https://github.com/lucapinheiro"
  },
  {
    "name": "Gabriel Festa Pinheiro",
    "birthday": "4/8/2005",
    "ra": "24.00199-6",
    "email_dev": "gfesta.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1io7HtzQSUI2osdwf2p1HADKKIRsyMu1e",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "java",
      "javascript",
      "python"
    ],
    "linkedin": "https://www.linkedin.com/in/gabrielfestapinheiro/",
    "github": "https://github.com/GabrielFesta"
  },
  {
    "name": "Lucas Gozze Crapino ",
    "birthday": "6/4/2004",
    "ra": "22.00667-2",
    "email_dev": "lcrapino.devmaua@gmail.com",
    "course": "Engenharia de computação",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1wGoq4ReonnBXMw5zz_4XBZymNijhEgxy",
    "tag": [
      "DEV",
      "Infra"
    ],
    "technologies": [
      "Conhecimento básico em c e python"
    ]
  },
  {
    "name": "Enzo Sakamoto",
    "birthday": "7/20/2002",
    "ra": "21.00210-0",
    "email_dev": "esakamoto.devmaua@gmail.com",
    "course": "Engenharia de computação",
    "year": "4ano",
    "photo": "https://drive.google.com/open?id=1jQ9Nvx2sqbH40i_mTYD77loNtQ8xsbUN",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "Javascript",
      "Typescript",
      "React",
      "Node.js",
      "Python"
    ],
    "linkedin": "https://www.linkedin.com/in/enzosakamoto/",
    "github": "https://github.com/enzosakamoto"
  },
  {
    "name": "Flavio Murata",
    "birthday": "12/20/2002",
    "ra": "21.01192-3",
    "email_dev": "fmurata.devmaua@gmail.com",
    "course": "Engenharia de computação",
    "year": "4ano",
    "photo": "https://drive.google.com/open?id=1Ph1LVgIlvsJ63MSyqQHgKkEyQYa6Qmij",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "React",
      "Boostrap",
      "Java"
    ],
    "linkedin": "https://www.linkedin.com/in/02mrt/",
    "github": "https://github.com/flaviomurata"
  },
  {
    "name": "Gustavo Gomes",
    "birthday": "5/21/2004",
    "ra": "23.01268-4",
    "email_dev": "ggomes.devmaua@gmail.com",
    "course": "Engenharia da computação",
    "year": "2ano",
    "photo": "https://drive.google.com/open?id=18AH-qgbSR1j5UODqj1jmJFrIG7mbdJat",
    "tag": [
      "DEV",
      "Infra"
    ],
    "technologies": [
      "python"
    ]
  },
  {
    "name": "Mateus Capaldo Martins",
    "birthday": "9/6/2003",
    "ra": "22.01082-3",
    "email_dev": "mcapaldo.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=18b14rnwqrcVUK74oASBg4RLskt7xx9iX",
    "tag": [
      "DEV",
      "Infra"
    ],
    "technologies": [
      "Python",
      "JS",
      "Java",
      "SQL",
      "NoSQL"
    ],
    "linkedin": "https://www.linkedin.com/in/mateuscmartins/",
    "github": "https://github.com/MatCMartins"
  },
  {
    "name": "Gabriel da Silva Merola",
    "birthday": "8/23/2004",
    "ra": "23.00825-3",
    "email_dev": "gsm.devmaua@gmail.com",
    "course": "Ciencia da Computação",
    "year": "2ano",
    "photo": "https://drive.google.com/open?id=1vIPRZ_-sZIxiC1mQkVh835KL1hkflgTR",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "React",
      "React Native",
      "Python",
      "Java",
      "Typescript"
    ],
    "linkedin": "https://www.linkedin.com/in/gabriel-merola",
    "github": "https://github.com/Titans07"
  },
  {
    "name": "Sérgio Trovo",
    "birthday": "4/12/2004",
    "ra": "22.01128-5",
    "email_dev": "strovo.devmaua@gmail.com",
    "course": "Engenharia de computação",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1dUPK_t9fmlf-KacXbHxLU3ZTGSGHk07Q",
    "tag": [
      "DEV"
    ],
    "technologies": [],
    "linkedin": "https://www.linkedin.com/in/sergio-trovo-95ba69b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxrUgP2VDQoiek65M7bJtsA%3D%3D",
    "github": "https://github.com/SergioTrovo"
  },
  {
    "name": "Tiago Tokugi de Albuquerque Massuda",
    "birthday": "1/2/2005",
    "ra": "24.01217-3",
    "email_dev": "tmassuda.devmaua@gmail.com",
    "course": "Ciencia da Computação 1ano",
    "year": "",
    "photo": "https://drive.google.com/open?id=1HJiwGMbZqJFlhkQ0TKoY4VRwxoXvFWuE",
    "tag": [
      "DEV",
      "UX / UI"
    ],
    "technologies": [],
    "linkedin": "https://www.linkedin.com/in/tiago-tokugi-massuda-557759285/",
    "github": "https://github.com/tokujiTO"
  },
  {
    "name": "Tiago Francisco de Oliveira ",
    "birthday": "12/12/2005",
    "ra": "24.01199-0",
    "email_dev": "toliveira.devmaua@gmail.com",
    "course": "Engenharia de Controle e Automação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1kYdLOXOP6CSF1bEnPwKQ1AQLSMK7HCxN",
    "tag": [
      "DEV",
      "Infra"
    ],
    "technologies": [
      "Arduino"
    ]
  },
  {
    "name": "Felipe De Rosa Pucci Canavarro",
    "birthday": "7/15/2005",
    "ra": "24.00875-3",
    "email_dev": "fpucci.devmaua@gmail.com",
    "course": "Engenharia ciclo básico",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1wdHgVVg1J0rDzsfTTfrq169EJOIQfIwH",
    "tag": [
      "Comunicação",
      "PO",
      "Diretoria"
    ],
    "technologies": []
  },
  {
    "name": "João Vitor Choueri Branco",
    "birthday": "10/10/2002",
    "ra": "21.01075-7",
    "email_dev": "jbranco.devmaua@gmail.com",
    "course": "Engenharia de Computação",
    "year": "4ano",
    "photo": "https://drive.google.com/open?id=1JtPVUpjzeM16WX_KQBZPNAD4ln-F8xnd",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "Python",
      "Java",
      "Django",
      "Javascript",
      "FastAPI"
    ],
    "linkedin": "https://www.linkedin.com/in/jo%C3%A3o-vitor-choueri-branco-a756ab209/",
    "github": "https://github.com/JoaoVitorBranco"
  },
  {
    "name": "Vinícius de Oliveira Berti",
    "birthday": "8/1/2003",
    "ra": "21.01219-9",
    "email_dev": "vberti.devmaua@gmail.com",
    "course": "Engenharia da Computação",
    "year": "4ano",
    "photo": "https://drive.google.com/open?id=1nmSIZ6_CGUxDogO_MSyPBq7gsVj2Lg5s",
    "tag": [
      "DEV"
    ],
    "technologies": [
      "Java",
      "Python",
      "C"
    ],
    "linkedin": "https://www.linkedin.com/in/vinicius-berti-a80354209/",
    "github": "https://github.com/ViniciusBerti"
  },
  {
    "name": "Giulia Letícia Soares ",
    "birthday": "1/6/2006",
    "ra": "24.01409-5",
    "email_dev": "gsoares.devmaua@gmail.com",
    "course": "Engenharia da Computação 1",
    "year": "ano",
    "photo": "https://drive.google.com/open?id=1fr9UsIgYiU9xNYEJbVcggENdjHxqsHxd",
    "tag": [
      "DEV",
      "UX / UI"
    ],
    "technologies": [
      "Experiência em Python",
      "C+ e Java"
    ]
  },
  {
    "name": "Nicole Silva Mascaretti ",
    "birthday": "2/13/2005",
    "ra": "24.01804-0",
    "email_dev": "Nmascaretti.devmaua@gmail.com",
    "course": "Sistemas da informação",
    "year": "1ano",
    "photo": "https://drive.google.com/open?id=1u_ZQ-hrmy-XvCnXLHMl5UfizNw30ebb0",
    "tag": [
      "UX / UI",
      "Comunicação"
    ],
    "technologies": [],
    "linkedin": "https://www.linkedin.com/in/nicole-mascaretti-369b95256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "github": "https://github.com/NicoleMascaretti"
  },
  {
    "name": "Giovanna Karoline de Oliveira Albuquerque ",
    "birthday": "1/17/2006",
    "ra": "24.01460-5",
    "email_dev": "galbuquerque.devmaua@gmail.com",
    "course": "Sistemas de informação- 1",
    "year": "ano",
    "photo": "https://drive.google.com/open?id=1CTq7HL1dyIDO4dbLDkTmNCCMqjc5-mX6",
    "tag": [
      "DEV",
      "UX / UI"
    ],
    "technologies": [
      "Básico de python"
    ],
    "linkedin": "https://www.linkedin.com/in/giovanna-albuquerque-16917a245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Enzo Pistori Fontenele de Oliveira",
    "birthday": "12/9/2005",
    "ra": "23.00768-0",
    "email_dev": "eoliveira.devmaua@gmail.com",
    "course": "Engenharia da computação",
    "year": "2ano",
    "photo": "https://drive.google.com/open?id=1Y8XlAwHqIul_xMt8E52Sj_NcRdrB2SZS",
    "tag": [
      "DEV"
    ],
    "technologies": [],
    "linkedin": "https://www.linkedin.com/in/enzo-pistori-fontenele-de-oliveira-06a603285?trk=contact-info",
    "github": "https://github.com/Pistori1"
  },
  {
    "name": "Fernando Andrade Rodrigues",
    "birthday": "4/6/2004",
    "ra": "22.00968-0",
    "email_dev": "fandrade.devmaua@gmail.com",
    "course": "Engenharia de Produção",
    "year": "3ano",
    "photo": "https://drive.google.com/open?id=1bvMw-E_y5EhUVSHQXA1bxMW9znlZzNsG",
    "tag": [
      "PO",
      "Diretoria"
    ],
    "technologies": [
      "Scrum",
      "Azure DevOps"
    ],
    "linkedin": "www.linkedin.com/in/fernando-andrade-rodrigues",
    "github": "https://github.com/FernandoAndrade-devmaua"
  }
]