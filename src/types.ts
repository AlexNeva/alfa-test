const initialPhoto = {
  "id": 195893,
  "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
  "type": "photo",
  "tags": "blossom, bloom, flower",
  "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
  "previewWidth": 150,
  "previewHeight": 84,
  "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
  "webformatWidth": 640,
  "webformatHeight": 360,
  "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
  "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
  "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
  "imageWidth": 4000,
  "imageHeight": 2250,
  "imageSize": 4731420,
  "views": 7671,
  "downloads": 6439,
  "likes": 5,
  "comments": 2,
  "user_id": 48777,
  "user": "Josch13",
  "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
}

export type TPhoto = typeof initialPhoto;

export interface IPhotos {
  total: number,
  totalHits: number,
  hits: TPhoto[];
}

// redux

export interface IPhotoState {
  photos: TPhoto[],
  loading: boolean,
  error: null | string,
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
}

interface IFetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS
}
interface IFetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  payload: TPhoto[],
}
interface IFetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  payload: string,
}

export type TPhotosAction = IFetchPhotosAction | IFetchPhotosSuccessAction | IFetchPhotosErrorAction;

// redux