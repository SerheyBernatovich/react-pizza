import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
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
        {categories.map((value, i) => (
          <li
            key={i}
            className={activeIndex === i ? 'active' : ''}
            onClick={() => setActiveIndex(i)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
