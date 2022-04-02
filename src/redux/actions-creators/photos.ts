import { Dispatch } from "redux";
import PhotoService from "../../API/photoService"
import { PhotosActionTypes, TPhotosAction } from "../../types";


const photoService = new PhotoService();

export const fetchPhotos = () => {
  return (dispatch: Dispatch<TPhotosAction>) => {
    dispatch({ type: PhotosActionTypes.FETCH_PHOTOS })
    photoService.getPhotos()
      .then(res => {
        dispatch({ type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: res.hits })
      })
      .catch(err => {
        dispatch({ type: PhotosActionTypes.FETCH_PHOTOS_ERROR, payload: 'ошибка' })
        console.log(err);

      })
  }
}

export const toggleLike = (payload: number) => ({ type: PhotosActionTypes.TOGGLE_LIKE, payload })
export const deleteItem = (payload: number) => ({ type: PhotosActionTypes.DELETE_ITEM, payload })