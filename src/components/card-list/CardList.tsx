import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spin, message } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchPhotos } from '../../redux/actions-creators/photos';
import CardItem from '../card-item/CardItem';
import './CardList.scss';

const CardList: FC = () => {
  const { photos, error, loading } = useTypedSelector(state => state.photos);
  const { showFavorited } = useTypedSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [])

  useEffect(() => {
    if (error) {
      message.error(error)
    }
  }, [error])

  const showList = () => {
    if (showFavorited) {
      return photos
        .filter(photo => photo.isLike)
        .map(photo => <CardItem {...photo} key={photo.id} />)
    }

    return photos.map(photo => (
      <CardItem {...photo} key={photo.id} />
    ))
  }

  return (
    <ul className='card-list'>
      {
        loading
          ?
          <Spin size='large' />
          :
          showList()
      }
    </ul>
  )
}

export default CardList;