import { IPhotos } from './../types';

export default class PhotoService {

  API_KEY: string = '17766632-9696463ed60dcf33340f3d2a4';
  BASE_URL: string = `https://pixabay.com/api/?key=${this.API_KEY}`;

  async getResource<T>(url: string): Promise<T> {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw data
    }
    return data;
  }

  getPhotos(): Promise<IPhotos> {
    return this.getResource(this.BASE_URL);
  }
}