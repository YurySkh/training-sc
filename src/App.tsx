import React from 'react';
import './App.css';
import styled from 'styled-components';
import image from './assets/images/Rectangle-1.jpg';
import { StyledBtn } from './components/Button.styled';


function App() {
  return (
    <div className="App">
      
      <CardSection>
        <Wrapper>
          <CardImg src={image} alt="desert" />
            <Wrapper>
            <CardTitle>Headline</CardTitle>
            <CardDescription>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardDescription>
            <StyledBtn btnType="another">See more</StyledBtn>
            <StyledBtn btnType="default">Save</StyledBtn>
            </Wrapper>
          </Wrapper>
      </CardSection>
    </div>
  );
}

export default App;


//Секция с карточной
const CardSection = styled.section`
width: 300px;
height: 350px;
border-radius: 15px;
background-color: #fff;
box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);

button + button {
  margin-left:12px;
}
`
//Обертка для отступов
const Wrapper = styled.div`
  padding: 10px;
  /* border: 1px solid red; */
`

//Картинка
const CardImg = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 10px;
  vertical-align:bottom;
  `

//Заголовок
const CardTitle = styled.h1`
font-size: 16px;
font-weight: 700;
margin-bottom: 20px;
`

//Текст
const CardDescription = styled.p`
font-size: 12px;
font-weight: 500;
color: rgb(171, 179, 186);
margin-bottom: 19px;
`

//Кнопка - Унесена в отдельный component