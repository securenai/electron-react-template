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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4569 3.40655C10.8218 2.26353 9.178 2.26353 8.54299 3.40655L1.62592 15.8573C1.00876 16.9682 1.81205 18.3333 3.08285 18.3333H16.917C18.1878 18.3333 18.9911 16.9682 18.3739 15.8573L11.4569 3.40655Z"
        fill={toggled ? '#FFF' : '#FF3E49'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24234 14.4697C9.24234 14.0513 9.58152 13.7122 9.99992 13.7122H10.0075C10.4259 13.7122 10.7651 14.0513 10.7651 14.4697C10.7651 14.8881 10.4259 15.2273 10.0075 15.2273H9.99992C9.58152 15.2273 9.24234 14.8881 9.24234 14.4697Z"
        fill={toggled ? '#FF3E49' : '#FFF'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99992 7.5C10.4183 7.5 10.7575 7.83918 10.7575 8.25758V11.2879C10.7575 11.7063 10.4183 12.0455 9.99992 12.0455C9.58152 12.0455 9.24234 11.7063 9.24234 11.2879V8.25758C9.24234 7.83918 9.58152 7.5 9.99992 7.5Z"
        fill={toggled ? '#FF3E49' : '#FFF'}
      />
    </svg>
  );
};

export default StatusCriticalIcon;
