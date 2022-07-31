import photosReducer from "./photos/slice";
import searchCollectionsReducer from "./search/searchCollections";
import searchPhotosReducer from "./search/searchPhotos";
import searchUsersReducer from "./search/searchUsers";

export const rootReducer = {
    photos: photosReducer,
    searchPhotos:searchPhotosReducer,
    searchCollections:searchCollectionsReducer,
    searchUsers:searchUsersReducer,
}