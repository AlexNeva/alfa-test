import React, { FC } from 'react';
import { TPhoto } from '../../types';
import { Tag } from 'antd';
import uniqid from 'uniqid';
import './CardItem.scss';
import { HeartTwoTone } from '@ant-design/icons';

const CardItem: FC<TPhoto> = (props) => {

  return (
    <li className='card-item'>
      <div className="card-item__preview">
        <img src={props.previewURL} alt="photo" />
      </div>
      <button type='button' className="card-item__like">
        {
          <HeartTwoTone
            style={{
              fontSize: '24px',
              color: 'red',
            }}
            twoToneColor='#fff'
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