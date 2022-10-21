import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter, setCounter } from 'state/slices/layoutSlice';
import Button from 'components/Button';
import icon from '../../../assets/icon.svg';

const Hello = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <Box display="flex" alignItems="center" gap="20px">
        <Button
          label="Minus"
          width="100px"
          // margin="20px 0 0 0"
          onClick={() => {
            dispatch(setCounter(counter - 1));
          }}
        />
        <div>{counter}</div>
        <Button
          label="Add"
          width="100px"
          // margin="20px 0 0 0"
          onClick={() => {
            dispatch(setCounter(counter + 1));
          }}
        />
      </Box>
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
            <NavLink to="/login">to login page</NavLink>
          </button>
        </a>
        {/* <NavLink to="/login">to login page</NavLink> */}
      </div>
    </Box>
  );
};

export default Hello;
