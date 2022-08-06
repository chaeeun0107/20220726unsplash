import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import {Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../src/redux/photos/slice";
import {httpClient} from "../src/api/httpClient";
import MasonryList from "../src/shared/list/MasonryList";
import LayoutWithTopics from "../src/shared/layout/LayoutWithTopics";


export default function Home({initPhotos}) {

    const dispatch = useDispatch()
    const {list, status, page} = useSelector(state => state.photos);

    const handleNext = () => {
        dispatch(fetchPhotos({
            page: page + 1,
            per_page: 20
        }))
    }

    const photos = [...initPhotos,...list]

    return (
        <Container>
            <InfiniteScroll
                dataLength={photos.length}
                next={handleNext}
                hasMore={true}
                loader={(
                    <div className={"flex justify-center py-5"}>
                        <Spin tip="Loading..."/>
                    </div>
                )}
            >
                <MasonryList data={photos}/>

            </InfiniteScroll>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.div`

`;

Home.getLayout = LayoutWithTopics;


export async function getStaticProps(context) {
    const {data} = await httpClient({
        url: '/photos',
        method: 'get',
        params: {
            page: 1,
            per_page: 20
        }
    })

    return {
        props: {
            name: 'a',
            initPhotos: data
        },
    }
}