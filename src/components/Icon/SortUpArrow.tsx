import { WHITE, BLACK } from 'shared/constants/colors';

interface SortUpArrowProps {
  status?: string;
}

const SortUpArrow: React.FC<SortUpArrowProps> = ({ status = 'default' }) => {
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
        d="M3.44002 0.194442C3.74574 -0.064814 4.25426 -0.0648142 4.55998 0.194442L7.7813 2.92617C8.25638 3.32904 7.90649 4 7.22132 4H0.778677C0.093514 4 -0.256378 3.32904 0.218697 2.92617L3.44002 0.194442Z"
        fill={renderSortColor()}
      />
    </svg>
  );
};

export default SortUpArrow;
