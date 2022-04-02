export interface IPhoto {
  "id": number,
  "pageURL": string,
  "type": string,
  "tags": string,
  "previewURL": string,
  "previewWidth": number,
  "previewHeight": number,
  "webformatURL": string,
  "webformatWidth": number,
  "webformatHeight": number,
  "largeImageURL": string,
  "fullHDURL": string,
  "imageURL": string,
  "imageWidth": number,
  "imageHeight": number,
  "imageSize": number,
  "views": number,
  "downloads": number,
  "likes": number,
  "comments": number,
  "user_id": number,
  "user": string,
  "userImageURL": string,
  isLike?: boolean,
}

export interface IPhotos {
  total: number,
  totalHits: number,
  hits: IPhoto[];
}

// redux

export interface IPhotoState {
  photos: IPhoto[],
  loading: boolean,
  error: null | string,
}

export enum PhotosActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  TOGGLE_LIKE = 'TOGGLE_LIKE',
}

export enum FilterActionTypes {
  FILTER_FAVORITED = 'FILTER_FAVORITED',
}

interface IFetchPhotosAction {
  type: PhotosActionTypes.FETCH_PHOTOS
}
interface IFetchPhotosSuccessAction {
  type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
  payload: IPhoto[],
}
interface IFetchPhotosErrorAction {
  type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
  payload: string,
}

interface IToggleLikeAction {
  type: PhotosActionTypes.TOGGLE_LIKE,
  payload: number,
}

interface IFilterAction {
  type: FilterActionTypes.FILTER_FAVORITED
}

export type TPhotosAction = IFetchPhotosAction | IFetchPhotosSuccessAction | IFetchPhotosErrorAction | IToggleLikeAction
export type TFilterAction = IFilterAction

// redux