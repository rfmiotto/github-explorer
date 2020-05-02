import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RouteParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          Return
          <FiChevronLeft size={16} />
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/35971460?s=460&u=afbd61f4c934845811d218d94e094963081d5a30&v=4"
            alt="avatar"
          />
          <div>
            <strong>repo name</strong>
            <p>description</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>1800</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>1800</strong>
            <span>Open issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aefaefae">
          <div>
            <strong>aeaeae</strong>
            <p>Afaefaefa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
