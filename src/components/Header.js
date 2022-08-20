import { Link } from 'react-router-dom';
import Button from './Button';
import Line from './Line';
import '../styles/Header.min.css';
import '../styles/Line.min.css';

const Header = ({ title, handleRemove }) => {
  return (
    <header>
      <nav>
        <h1>Product {title}</h1>
        <div>
          {title === 'List' && (
            <>
              <Link to='/add-product'>
                <Button text='ADD' type='save' />
              </Link>

              <Button
                text='MASS DELETE'
                id='delete-product-btn'
                type={'delete'}
                handleRemove={handleRemove}
              />
            </>
          )}

          {title === 'ADD' && (
            <>
              <Button text='SAVE' type='submit' />

              <Link to='/'>
                <Button text='CANCEL' type={'cancel'} />
              </Link>
            </>
          )}
        </div>
      </nav>

      <Line />
    </header>
  );
};

export default Header;
