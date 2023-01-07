import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
};

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const categories: string[] = [
    'Всі',
    "М'ясні",
    'Вегетарианські',
    'Гриль',
    'Гострі',
    'Закриті',
  ];
  // const onClickCategory = (i) => {
  //   setActiveIndex(i);
  // };
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
};
export default Categories;
