import styled from "styled-components";
import Header from "../header";

function LayoutWithSearchLnb({children}) {
    return (
        <Container>
            <Header/>
            SearchLnb
            {children}
        </Container>
    )
}


const Container = styled.div`
  padding-top: 60px;
`;

export default LayoutWithSearchLnb;