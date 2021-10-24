import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './IndexWrapper.module.scss';

import Loader from 'components/core/Loader';
import { Ubi } from 'types';
import IndexList from './IndexList/IndexList';

const IndexWrapper: FC = () => {
  const ubiList: Ubi[] = useSelector(state => state.ubiList);
  const body = !!ubiList.length ? <IndexList /> : <Loader />;

  return <div className={styles.wrapper}>{body}</div>;
};

export default IndexWrapper;
