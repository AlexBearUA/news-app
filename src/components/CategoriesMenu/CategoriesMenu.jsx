import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';
import newsApi from '../../services/news-api';
import css from './CategoriesMenu.module.scss';

export const CategoriesMenu = ({ setNewsByCategory }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [active, setActive] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const isTablet = useMediaQuery({
    query: '(max-width: 1279px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    newsApi
      .getNewsCategories()
      .then(categories => setCategoriesList(categories))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (active === 'others') {
      return;
    }
    newsApi
      .getNewsByCategory(active)
      .then(news => setNewsByCategory(news))
      .catch(error => console.log(error));
  }, [active, setNewsByCategory]);

  useEffect(() => {
    newsApi
      .getNewsByCategory(selectedOption.value)
      .then(news => setNewsByCategory(news))
      .catch(error => console.log(error));
  }, [selectedOption, setNewsByCategory]);

  const getOptionsForSelect = () => {
    let result = [];
    [...categoriesList].splice(isTablet ? 4 : 6, 50).forEach(categorie => {
      return result.push({
        label: categorie.display_name,
        value: categorie.section,
      });
    });
    return result;
  };

  return (
    <div className={css.CategoriesMenuWrapper}>
      <ul className={css.horizontalMenu}>
        {[...categoriesList]
          .splice(0, isTablet ? 4 : 6)
          .map(({ display_name }) => {
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
        onMenuOpen={() => {
          setSelectIsOpen(!selectIsOpen);
          setActive('others');
        }}
        onMenuClose={() => setSelectIsOpen(!selectIsOpen)}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={getOptionsForSelect()}
        className={`react-select-container ${
          active === 'others' && 'isActive'
        } ${selectIsOpen && 'rotateArrow'}`}
        classNamePrefix="react-select"
        placeholder={isMobile ? 'Categories' : 'Others'}
        unstyled
      />
    </div>
  );
};
