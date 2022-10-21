import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter, setCounter } from 'state/slices/layoutSlice';
import icon from '../../../assets/icon.svg';

const Hello = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div>{counter}</div>
      <button
        type="button"
        onClick={() => {
          dispatch(setCounter(counter + 1));
        }}
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setCounter(counter - 1));
        }}
      >
        Minus
      </button>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
        <NavLink to="/login">to login page</NavLink>
      </div>
    </div>
  );
};

export default Hello;
