import React, {useState} from 'react'
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router";


//components
import useMotion from '../utils/useMotion';
import MovieCard from '../components/MovieCard';
import { head_4 } from '../shared/textStyle';
import MovieContentdData from '../Data/MovieContentData';



const ComingSoonPage = (propss) => {

  let { id } = useParams();
  const history = useHistory();
  let [movieContent, setmovieContent] = useState(MovieContentdData);


  return (
    <SectionWrapper>

      {/* <LogoTitle dark {...useMotion('down', 1, 0.3)}>
        SEULKOK
      </LogoTitle> */}

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>이번달 <b>개봉작</b> 궁금하시죠? <br/>
        <p2 dark {...useMotion('down', 1, 0.2)}> <span style={{color:'#e8384c'}}>슬콕</span>이 알려드려요</p2></p>
        {/* <p2 dark {...useMotion('up', 2, 0.8)}> <p2 style={{color: '#e8384c'}}>슬톡</p2>이 추천해요.</p2> */}
      </MainContent>

      <Link to ="/preview/1" style={{textDecoration: 'none'}}>
        <MovieCard />
      </Link>


      <Link to="/survey" style={{textDecoration: 'none'}}>
        <StartButton><span>이달의 OTT 추천받기</span></StartButton>
      </Link>


    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  margin: 0;

  width: 100%;
  top: 120%;

  text-align: center;
  position: absolute;

  `;

  // background: radial-gradient(
  //   60% 55% at 50% 8%,
  //   #2f1316 0%,
  //   #000000 100%
  // ),
  // #594fa9;


const MainContent = styled.div`
  ${head_4}
`;


// const StartButton = styled.button`

//   text-align: center;
//   cusor: pointer;

//   width: 13rem;
//   height: 3rem;
//   margin-top: 20px;

//   background: linear-gradient(80deg, #e8384c 0.73%, #b63140 100%);
//   border-radius: 15px;
//   border: none;

//   color: #ffffff;
//   font-style: normal;
//   font-wight: bold;
//   font-size: 1.2rem;
//   span {
//     font-weight: bold;
//   }

//   &:hover {
//     color: var(--black);
//     background: linear-gradient(
//       to right,
//       var(--main), #5a292f
//     );

// `

const StartButton = styled.button`

  text-align: center;
  cusor: pointer;

  width: 13rem;
  height: 3rem;
  margin-top: 20px;

  background: transparent;
  border-radius: 15px;
  border: 2px solid var(--main);

  color: var(--main);
  font-style: normal;
  font-wight: bold;
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }

  &:hover {
    color: #ffffff;
    background: var(--main);
  );

`;


export default ComingSoonPage
