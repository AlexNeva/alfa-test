import React, { FC } from 'react';
import { Checkbox } from 'antd';
import './Filter.scss';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions-creators/filter';


const Filter: FC = () => {

  const dispatch = useDispatch();

  const changeHandler = (): void => {
    dispatch(changeFilter());
  }

  return (
    <div className='filter'>
      <Checkbox
        onChange={changeHandler}
      >
        Favorited
      </Checkbox>
    </div>
  )
}

export default Filter;