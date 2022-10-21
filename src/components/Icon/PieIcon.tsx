interface PieIconProps {
  color: string;
}

const PieIcon: React.FC<PieIconProps> = ({ color }) => {
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
        d="M7.66395 2.74981C7.83129 3.13329 7.65608 3.57982 7.27261 3.74716C6.25184 4.1926 5.35574 4.88132 4.66263 5.75309C3.96953 6.62486 3.50053 7.65315 3.29664 8.74805C3.09275 9.84296 3.16018 10.9711 3.49303 12.034C3.82588 13.0968 4.41402 14.0619 5.20602 14.8449C5.99803 15.6279 6.96979 16.205 8.03634 16.5257C9.1029 16.8464 10.2318 16.9009 11.3243 16.6845C12.4168 16.4682 13.4396 15.9874 14.3034 15.2844C15.1672 14.5814 15.8457 13.6775 16.2794 12.6517C16.4424 12.2664 16.8869 12.0861 17.2723 12.249C17.6576 12.412 17.8379 12.8565 17.675 13.2418C17.1448 14.4956 16.3156 15.6003 15.2599 16.4596C14.2041 17.3188 12.9539 17.9064 11.6186 18.1708C10.2834 18.4353 8.90363 18.3686 7.60006 17.9767C6.2965 17.5847 5.10879 16.8794 4.14078 15.9224C3.17278 14.9654 2.45394 13.7858 2.04713 12.4868C1.64031 11.1878 1.5579 9.80889 1.80709 8.47068C2.05629 7.13246 2.62951 5.87567 3.47664 4.81016C4.32376 3.74466 5.419 2.9029 6.66661 2.35847C7.05008 2.19113 7.49661 2.36634 7.66395 2.74981Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.46432 1.88839C9.60639 1.74632 9.79909 1.6665 10 1.6665C11.0944 1.6665 12.178 1.88205 13.189 2.30084C14.2001 2.71963 15.1188 3.33346 15.8926 4.10729C16.6664 4.88111 17.2802 5.79977 17.699 6.81082C18.1178 7.82187 18.3334 8.9055 18.3334 9.99985C18.3334 10.4183 17.9942 10.7574 17.5758 10.7574H10C9.58161 10.7574 9.24243 10.4183 9.24243 9.99985V2.42408C9.24243 2.22316 9.32225 2.03047 9.46432 1.88839ZM10.7576 3.22388V9.24228H16.776C16.705 8.60698 16.5448 7.98356 16.2992 7.39064C15.9566 6.56342 15.4543 5.81179 14.8212 5.17866C14.1881 4.54553 13.4364 4.04331 12.6092 3.70066C12.0163 3.45507 11.3929 3.2949 10.7576 3.22388Z"
        fill={color}
      />
    </svg>
  );
};

export default PieIcon;
