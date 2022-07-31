import styled from 'styled-components';
import PhotosItem from "../card/PhotosItem";

export const generatePhotoGroup = (data) => {
    const photosGroup = [[], [], []];
    const photoGroupHeight = [0, 0, 0];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
        const minHeightValue = Math.min(...photoGroupHeight);
        const minHeightIndex = photoGroupHeight.indexOf(minHeightValue);
        photosGroup[minHeightIndex]?.push(data[i]);
        photoGroupHeight[minHeightIndex] += (data[i].height / data[i].width);
    }
    return photosGroup;
};


function MasonryList({ data = [] }) {
  const photosGroup = generatePhotoGroup(data);
  return (
    <Container>
      <Row>
        {
          photosGroup.map((group, groupIndex) => (
            <Col key={groupIndex}>
              {
                group.map((item, index) => (
                  <ItemWrapper>
                    <PhotosItem item={item} index={index} />
                  </ItemWrapper>
                ))
              }
            </Col>
          ))

        }
      </Row>
    </Container>
  );
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
`;

const Col = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
     margin-bottom: 20px;
`;

export default MasonryList;
