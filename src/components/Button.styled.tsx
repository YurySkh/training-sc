import { css, styled } from "styled-components";

type StyledBtnPropsType = {
	btnType?: 'default' | 'another'
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
	width: 86px;
	height: 30px;
	border-radius: 5px;
	font-weight: 700;
	font-size: 10px;

${props => props.btnType === "default" && css<StyledBtnPropsType>`
	border: 2px solid;
	color: #4e71fe;
	background-color: transparent;
`}

${props => props.btnType === "another" && css<StyledBtnPropsType>`
	border: none;
	color: white;
	background-color: #4e71fe;
`}
`;