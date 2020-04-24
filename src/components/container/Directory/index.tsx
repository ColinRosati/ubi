import React, { FC } from 'react';
import { connect } from 'react-redux';

import styles from './Directory.module.scss';

import Header from 'components/dedicated/Directory/Header';
import IndexWrapper from 'components/dedicated/Directory/IndexWrapper';
import SearchWrapper from 'components/dedicated/Directory/SearchWrapper';

import { StoreState } from 'store/types';
import { Ubi } from 'types';

interface AppProps {
  ubiList: Ubi[];
  ubiFilter: Ubi[];
  fetchUbis: Function;
}

const mapStateToProps = ({ ubiList, ubiFilter }: StoreState) => {
  return { ubiList, ubiFilter };
};

const _DirectoryContainer: FC<AppProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <SearchWrapper />
      <IndexWrapper />
    </div>
  );
};

export const DirectoryContainer = connect(mapStateToProps)(_DirectoryContainer);
