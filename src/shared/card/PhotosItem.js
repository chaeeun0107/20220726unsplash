import styled from "styled-components";

function PhotosItem({item}) {
    return (
        <Container>
            {
                <img src={item.urls.regular} alt={item.description}/>
            }
        </Container>
    )
}


const Container = styled.div`

`;

export default PhotosItem;