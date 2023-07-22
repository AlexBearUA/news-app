import { useContext } from 'react';
import css from './Home.module.scss';
import { CategoriesMenu } from 'components/CategoriesMenu/CategoriesMenu';
import { ThemeContext } from 'components/App';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${css.home} ${theme}`}>
      <CategoriesMenu />
    </div>
  );
};

export default Home;
