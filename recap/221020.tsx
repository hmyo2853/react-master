import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  // interface 정의하여 props 사용하기
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.bgColor}; // props는 containerProps에서 가져옴
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // ? = optional
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />; // borderColor가 있다면 사용 ?? 그게 아니라면 default로 bgColor 사용
}

export default Circle;
