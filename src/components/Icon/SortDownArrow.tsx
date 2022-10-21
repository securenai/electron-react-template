import { WHITE, BLACK } from 'shared/constants/colors';

interface SortDownArrowProps {
  status?: string;
}

const SortDownArrow: React.FC<SortDownArrowProps> = ({
  status = 'default',
}) => {
  const renderSortColor = () => {
    switch (status) {
      case 'hover':
        return WHITE;
      case 'active':
        return BLACK;
      default:
        return '#949899';
    }
  };

  return (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.55998 3.80556C4.25426 4.06481 3.74574 4.06481 3.44002 3.80556L0.218696 1.07383C-0.256379 0.670964 0.0935133 5.71998e-07 0.778676 5.12099e-07L7.22132 -5.11352e-08C7.90649 -1.11034e-07 8.25638 0.670963 7.7813 1.07383L4.55998 3.80556Z"
        fill={renderSortColor()}
      />
    </svg>
  );
};

export default SortDownArrow;
