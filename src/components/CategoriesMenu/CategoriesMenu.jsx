import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';
import newsApi from '../../services/news-api';
import css from './CategoriesMenu.module.scss';

export const CategoriesMenu = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const isTablet = useMediaQuery({
    query: '(max-width: 1279px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    newsApi
      .getNewsCategories()
      .then(categories => setCategories(categories))
      .catch(error => console.log(error));
  }, []);

  const getOptionsForSelect = () => {
    let result = [];
    [...categories].splice(isTablet ? 4 : 6, 50).forEach(categorie => {
      return result.push({
        value: categorie.section,
        label: categorie.display_name,
      });
    });
    return result;
  };

  return (
    <div className={css.CategoriesMenuWrapper}>
      <ul className={css.horizontalMenu}>
        {[...categories].splice(0, isTablet ? 4 : 6).map(({ display_name }) => {
          return (
            <li key={display_name}>
              <button
                onClick={() => setActive(display_name)}
                className={`${css.categoriesBtn} ${
                  active === display_name && css.activeBtn
                }`}
                type="button"
              >
                {display_name}
              </button>
            </li>
          );
        })}
      </ul>
      <Select
        defaultValue={selectedOption}
        onChange={(setSelectedOption, () => setActive('others'))}
        options={getOptionsForSelect()}
        className={`react-select-container ${
          active === 'others' && css.activeBtn
        }`}
        classNamePrefix="react-select"
        placeholder={isMobile ? 'Categories' : 'Others'}
        unstyled
      />
    </div>
  );
};
