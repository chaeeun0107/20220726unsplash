import styled from "styled-components";
import Header from "../header";

function LayoutWithTopics({children}) {
    return (
        <Container>
            <Header/>
            Topics
            {children}
        </Container>
    )
}


const Container = styled.div`
  padding-top: 60px;
`;

export default LayoutWithTopics;