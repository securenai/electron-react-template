interface HelpIconProps {
  color?: string;
}

const HelpIcon: React.FC<HelpIconProps> = ({ color = '#508AF9' }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 2.54546C4.98752 2.54546 2.54543 4.98755 2.54543 8.00001C2.54543 11.0125 4.98752 13.4546 7.99998 13.4546C11.0124 13.4546 13.4545 11.0125 13.4545 8.00001C13.4545 4.98755 11.0124 2.54546 7.99998 2.54546ZM1.33331 8.00001C1.33331 4.31811 4.31808 1.33334 7.99998 1.33334C11.6819 1.33334 14.6666 4.31811 14.6666 8.00001C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00001Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 7.39395C8.3347 7.39395 8.60604 7.66529 8.60604 8.00001V10.4243C8.60604 10.759 8.3347 11.0303 7.99998 11.0303C7.66526 11.0303 7.39392 10.759 7.39392 10.4243V8.00001C7.39392 7.66529 7.66526 7.39395 7.99998 7.39395Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.39392 5.57576C7.39392 5.24104 7.66526 4.9697 7.99998 4.9697H8.00604C8.34076 4.9697 8.6121 5.24104 8.6121 5.57576C8.6121 5.91047 8.34076 6.18182 8.00604 6.18182H7.99998C7.66526 6.18182 7.39392 5.91047 7.39392 5.57576Z"
        fill={color}
      />
    </svg>
  );
};

export default HelpIcon;
