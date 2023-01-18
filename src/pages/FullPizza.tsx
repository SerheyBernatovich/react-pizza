import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://639c590f16d1763ab14707cf.mockapi.io/items/' + id
        );
        console.log(data);
        setPizza(data);
      } catch (error) {
        alert('Mistake');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} UAH</h4>
      <Link to="notFoundghghghg">
        <button className="button button--outline button--add">
          <span>Return</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
