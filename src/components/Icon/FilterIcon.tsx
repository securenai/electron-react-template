interface FilterIconProps {
  color?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({ color = '#FFF' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.30332 4.48573C2.68385 3.7233 3.22642 2.58337 4.20879 2.58337H15.8334C16.7948 2.58337 17.3435 3.68093 16.7667 4.45004L12.4167 10.25V17.2848C12.4167 18.1224 11.5603 18.6871 10.7905 18.3572L8.70715 17.4643C8.27818 17.2805 8.00005 16.8587 8.00005 16.392V10.2663L3.30332 4.48573ZM4.90911 4.08337L9.23885 9.41228C9.40782 9.62024 9.50005 9.88002 9.50005 10.148V16.1722L10.9167 16.7793V10.1389C10.9167 9.8865 10.9986 9.64087 11.1501 9.43893L15.1667 4.08337H4.90911Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterIcon;
