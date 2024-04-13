import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
import { useRef } from 'react';

export const GoBackBtn = () => {
  const location = useLocation();
  const ref = useRef(location.state ?? '/');
  // console.log('ref ', ref.current);

  // console.log('loca ', location);

  return (
    <Link className={css.link} to={ref.current}>
      Go Back
    </Link>
  );
};
