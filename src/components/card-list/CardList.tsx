import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchPhotos } from '../../redux/actions-creators/photos';
import CardItem from '../card-item/CardItem';
import './CardList.scss';

const CardList: FC = () => {
  const { photos, error, loading } = useTypedSelector(state => state.photos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [])

  return (
    <ul className='card-list'>
      {
        photos.map(photo => (
          <CardItem {...photo} key={photo.id} />
        ))
      }
    </ul>
  )
}

export default CardList;