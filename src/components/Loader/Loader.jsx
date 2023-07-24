import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <RotatingLines
        strokeColor="#4b48db"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </div>
  );
};
