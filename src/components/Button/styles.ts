/* eslint-disable no-nested-ternary */
import { styled } from '@mui/system';
// eslint-disable-next-line import/no-cycle
import { ButtonProps } from 'components/Button';
import { SECONDARY, TERTIARY, WHITE, BLACK } from 'shared/constants/colors';

const StyledButton = styled('button')<Partial<ButtonProps>>(
  ({ width, size, mode, disabled, margin }) => ({
    width,
    margin,
    cursor: 'pointer',
    color: WHITE,
    display: 'flex',
    outline: 'none',
    fontSize: '14px',
    padding: '0 15px',
    borderRadius: '3px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    border: '1px solid transparent',
    '&:hover': {
      opacity: 0.9,
    },
    // conditional styles
    ...(mode && {
      backgroundColor:
        mode === 'primary'
          ? SECONDARY
          : mode === 'secondary'
          ? 'transparent'
          : TERTIARY,
      color: mode === 'secondary' ? BLACK : WHITE,
      borderColor: mode === 'secondary' ? BLACK : WHITE,
    }),
    ...(size && {
      height:
        size === 'md' ? 40 : size === 'sm' ? 36 : size === 'lg' ? 56 : '100%',
    }),
    ...(disabled && {
      cursor: 'not-allowed',
      backgroundColor: '#CCC',
    }),
  })
);

export default StyledButton;
