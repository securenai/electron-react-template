/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { DotPulse } from '@uiball/loaders';
import Box from '@mui/material/Box';
import AddIcon from 'components/Icon/AddIcon';
import FilterIcon from 'components/Icon/FilterIcon';
import DeleteIcon from 'components/Icon/DeleteIcon';
import { SECONDARY, WHITE, ERROR } from 'shared/constants/colors';
// eslint-disable-next-line import/no-cycle
import StyledButton from './styles';

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  margin?: string;
  mode?: 'primary' | 'secondary' | 'teriary' | 'delete' | 'filter';
  hasIcon?: boolean;
  label?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'md',
  width = 'fit-content',
  margin = '0 0',
  mode = 'primary',
  hasIcon = false,
  label,
  isSubmitting,
  disabled = isSubmitting,
  onClick,
}) => {
  const iconType =
    mode === 'filter' ? 'filter' : mode === 'delete' ? 'delete' : 'add';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [buttonState, setButtonState] = useState('default');

  return (
    <StyledButton
      size={size}
      mode={mode}
      margin={margin}
      width={width}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={() => setButtonState('hover')}
      onMouseLeave={() => setButtonState('default')}
    >
      {hasIcon && (
        <Box display="flex">
          {iconType === 'filter' ? (
            <FilterIcon color={label ? WHITE : SECONDARY} />
          ) : iconType === 'delete' ? (
            <DeleteIcon color={label ? WHITE : ERROR} />
          ) : (
            <AddIcon /> // define color of icon when hover using buttonState
          )}
        </Box>
      )}
      {isSubmitting ? <DotPulse size={25} speed={0.8} color="black" /> : label}
    </StyledButton>
  );
};

export default Button;
