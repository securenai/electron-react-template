interface StatusCriticalIconProps {
  toggled?: boolean;
}

const StatusCriticalIcon: React.FC<StatusCriticalIconProps> = ({
  toggled = false,
}) => {
  return (
    <svg
      width="25"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8.33333" fill={toggled ? '#FFF' : '#999999'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24245 13.1819C9.24245 12.7635 9.58163 12.4243 10 12.4243H10.0076C10.426 12.4243 10.7652 12.7635 10.7652 13.1819C10.7652 13.6003 10.426 13.9395 10.0076 13.9395H10C9.58163 13.9395 9.24245 13.6003 9.24245 13.1819Z"
        fill={toggled ? '#999999' : '#FFF'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.21216C10.4184 6.21216 10.7576 6.55134 10.7576 6.96973V10C10.7576 10.4184 10.4184 10.7576 10 10.7576C9.58163 10.7576 9.24245 10.4184 9.24245 10V6.96973C9.24245 6.55134 9.58163 6.21216 10 6.21216Z"
        fill={toggled ? '#999999' : '#FFF'}
      />
    </svg>
  );
};

export default StatusCriticalIcon;
