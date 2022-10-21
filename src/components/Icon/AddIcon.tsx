interface AddIconProps {
  color?: string;
}

const AddIcon: React.FC<AddIconProps> = ({ color = '#FFF' }) => {
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
        d="M9.99996 3.33334C10.4602 3.33334 10.8333 3.70644 10.8333 4.16668V15.8333C10.8333 16.2936 10.4602 16.6667 9.99996 16.6667C9.53972 16.6667 9.16663 16.2936 9.16663 15.8333V4.16668C9.16663 3.70644 9.53972 3.33334 9.99996 3.33334Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33337 9.99999C3.33337 9.53975 3.70647 9.16666 4.16671 9.16666H15.8334C16.2936 9.16666 16.6667 9.53975 16.6667 9.99999C16.6667 10.4602 16.2936 10.8333 15.8334 10.8333H4.16671C3.70647 10.8333 3.33337 10.4602 3.33337 9.99999Z"
        fill={color}
      />
    </svg>
  );
};

export default AddIcon;
