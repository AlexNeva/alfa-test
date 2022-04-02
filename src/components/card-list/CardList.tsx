import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CardItem from '../card-item/CardItem';

const CardList: FC = () => {
  const { photos, error, loading } = useTypedSelector(state => state.photos);

  return (
    <ul>
      {/* <CardItem></CardItem> */}
    </ul>
  )
}

export default CardList;