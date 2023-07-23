import { useContext } from 'react';
import css from './Home.module.scss';
import { CategoriesMenu } from 'components/CategoriesMenu/CategoriesMenu';
import { NewsList } from 'components/NewsList/NewsList';
import { ThemeContext } from 'components/App';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${css.home} ${theme}`}>
      <CategoriesMenu />
      <NewsList />
    </div>
  );
};

export default Home;
