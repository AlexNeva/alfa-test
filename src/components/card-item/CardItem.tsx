import React, { FC } from 'react';
import { IPhoto } from '../../types';
import { Tag } from 'antd';
import uniqid from 'uniqid';
import './CardItem.scss';
import { HeartTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleLike } from './../../redux/actions-creators/photos'

const CardItem: FC<IPhoto> = (props) => {

  const dispatch = useDispatch();

  const likesHandler = (): void => {
    dispatch(toggleLike(props.id))
  }

  return (
    <li className='card-item'>
      <div className="card-item__preview">
        <img src={props.previewURL} alt="photo" />
      </div>
      <button
        type='button'
        className="card-item__like"
        onClick={likesHandler}
      >
        {
          <HeartTwoTone
            style={{
              fontSize: '24px',
              color: 'red',
            }}
            twoToneColor={props.isLike ? '#FF0000' : '#FFFFFF'}
          />
        }
      </button>
      <div className="card-item__tags">
        {
          props.tags.split(',').map((tag: string) => (
            <Tag key={uniqid()}>{tag}</Tag>
          ))
        }
      </div>
      <div className="card-item__author">
        <strong>Author</strong>: {props.user}
      </div>
    </li >
  )
}

export default CardItem;