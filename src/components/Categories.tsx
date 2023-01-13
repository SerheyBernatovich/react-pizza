import React from 'react';
import { useWhyDidYouUpdate } from 'ahooks';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories: string[] = [
  'Всі',
  "М'ясні",
  'Вегетарианські',
  'Гриль',
  'Гострі',
  'Закриті',
];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    // const onClickCategory = (i) => {
    //   setActiveIndex(i);
    // };
    // useWhyDidYouUpdate('Categories', { value, onChangeCategory });
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              className={value === i ? 'active' : ''}
              onClick={() => onChangeCategory(i)}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
export default Categories;
