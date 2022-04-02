import { IPhotoState, PhotosActionTypes, TPhotosAction } from "../../types";


const initialState: IPhotoState = {
  photos: [],
  loading: false,
  error: null,
}


export const photosReducer = (state = initialState, action: TPhotosAction): IPhotoState => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS:
      return { loading: true, error: null, photos: [] }
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      return { loading: false, error: null, photos: action.payload }
    case PhotosActionTypes.FETCH_PHOTOS_ERROR:
      return { loading: true, error: action.payload, photos: [] }
    case PhotosActionTypes.TOGGLE_LIKE:
      return { ...state, photos: state.photos.map((item) => item.id === action.payload ? { ...item, isLike: !item.isLike } : item) }
    default:
      return state;
  }
}