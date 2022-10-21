interface SettingsIconProps {
  color?: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ color = '#FFF' }) => {
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
        d="M9.99994 8.61106C9.23288 8.61106 8.61106 9.23288 8.61106 9.99994C8.61106 10.767 9.23288 11.3888 9.99994 11.3888C10.767 11.3888 11.3888 10.767 11.3888 9.99994C11.3888 9.23288 10.767 8.61106 9.99994 8.61106ZM7.22217 9.99994C7.22217 8.46582 8.46582 7.22217 9.99994 7.22217C11.5341 7.22217 12.7777 8.46582 12.7777 9.99994C12.7777 11.5341 11.5341 12.7777 9.99994 12.7777C8.46582 12.7777 7.22217 11.5341 7.22217 9.99994Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99996 3.05551C9.81578 3.05551 9.63915 3.12868 9.50891 3.25891C9.37868 3.38915 9.30552 3.56578 9.30552 3.74996V3.87078C9.30408 4.22968 9.19773 4.58032 8.99957 4.87955C8.8014 5.17878 8.52007 5.41354 8.19019 5.55492C8.13147 5.58008 8.0697 5.59697 8.00663 5.60521C7.70689 5.71018 7.38421 5.73605 7.0701 5.6791C6.70829 5.6135 6.37444 5.44101 6.11158 5.18389L6.10611 5.17854L6.06447 5.13684C5.99997 5.07227 5.92311 5.02078 5.83881 4.98583C5.7545 4.95088 5.66414 4.93289 5.57288 4.93289C5.48162 4.93289 5.39125 4.95088 5.30695 4.98583C5.22264 5.02078 5.14605 5.072 5.08156 5.13657L5.08101 5.13711C5.01644 5.20161 4.96522 5.2782 4.93027 5.3625C4.89533 5.44681 4.87734 5.53717 4.87734 5.62843C4.87734 5.71969 4.89533 5.81006 4.93027 5.89436C4.96522 5.97867 5.01644 6.05526 5.08101 6.11975L5.12837 6.16711C5.38549 6.42997 5.55794 6.76385 5.62354 7.12566C5.68784 7.48026 5.64658 7.84577 5.50513 8.17689C5.37627 8.51477 5.15064 8.80737 4.85624 9.01793C4.55589 9.23275 4.19786 9.35225 3.8287 9.36088L3.81246 9.36107H3.74996C3.56578 9.36107 3.38915 9.43424 3.25891 9.56447C3.12868 9.6947 3.05551 9.87134 3.05551 10.0555C3.05551 10.2397 3.12868 10.4163 3.25891 10.5466C3.38915 10.6768 3.56578 10.75 3.74996 10.75H3.87078C4.22968 10.7514 4.58032 10.8577 4.87955 11.0559C5.17774 11.2534 5.4119 11.5335 5.55344 11.8618C5.70071 12.1974 5.74448 12.5692 5.6791 12.9298C5.6135 13.2916 5.44101 13.6255 5.18389 13.8883L5.17853 13.8938L5.13684 13.9355C5.07227 13.9999 5.02078 14.0768 4.98583 14.1611C4.95088 14.2454 4.93289 14.3358 4.93289 14.427C4.93289 14.5183 4.95088 14.6087 4.98583 14.693C5.02078 14.7773 5.072 14.8539 5.13657 14.9184L5.13711 14.9189C5.20161 14.9835 5.2782 15.0347 5.3625 15.0696C5.44681 15.1046 5.53717 15.1226 5.62843 15.1226C5.71969 15.1226 5.81006 15.1046 5.89436 15.0696C5.97867 15.0347 6.05526 14.9835 6.11975 14.9189L6.16711 14.8716C6.42997 14.6144 6.76385 14.442 7.12566 14.3764C7.48026 14.3121 7.84576 14.3533 8.17688 14.4948C8.51477 14.6236 8.80737 14.8493 9.01793 15.1437C9.23275 15.444 9.35225 15.8021 9.36088 16.1712L9.36107 16.1875V16.25C9.36107 16.4341 9.43424 16.6108 9.56447 16.741C9.6947 16.8712 9.87134 16.9444 10.0555 16.9444C10.2397 16.9444 10.4163 16.8712 10.5466 16.741C10.6768 16.6108 10.75 16.4341 10.75 16.25V16.1319L10.75 16.1291C10.7514 15.7702 10.8577 15.4196 11.0559 15.1204C11.2534 14.8222 11.5335 14.588 11.8619 14.4464C12.1974 14.2992 12.5693 14.2554 12.9298 14.3208C13.2916 14.3864 13.6255 14.5589 13.8883 14.816L13.8938 14.8214L13.9355 14.8631C13.9999 14.9276 14.0768 14.9791 14.1611 15.0141C14.2454 15.049 14.3358 15.067 14.427 15.067C14.5183 15.067 14.6087 15.049 14.693 15.0141C14.7773 14.9791 14.8539 14.9279 14.9184 14.8634L14.9189 14.8628C14.9835 14.7983 15.0347 14.7217 15.0696 14.6374C15.1046 14.5531 15.1226 14.4627 15.1226 14.3715C15.1226 14.2802 15.1046 14.1899 15.0696 14.1056C15.0347 14.0213 14.9835 13.9447 14.9189 13.8802L14.8716 13.8328C14.6144 13.57 14.442 13.2361 14.3764 12.8743C14.311 12.5137 14.3548 12.1419 14.502 11.8064C14.6435 11.4779 14.8777 11.1978 15.1759 11.0003C15.4752 10.8022 15.8258 10.6958 16.1847 10.6944L16.1875 10.6944L16.25 10.6944C16.4341 10.6944 16.6108 10.6212 16.741 10.491C16.8712 10.3608 16.9444 10.1841 16.9444 9.99996C16.9444 9.81578 16.8712 9.63915 16.741 9.50891C16.6108 9.37868 16.4341 9.30552 16.25 9.30552H16.1319L16.1291 9.30551C15.7702 9.30408 15.4196 9.19773 15.1204 8.99957C14.8211 8.8014 14.5864 8.52007 14.445 8.19019C14.4198 8.13147 14.4029 8.06969 14.3947 8.00663C14.2897 7.70689 14.2639 7.38421 14.3208 7.0701C14.3864 6.7083 14.5589 6.37444 14.816 6.11158L14.8214 6.10611L14.8631 6.06447C14.9276 5.99997 14.9791 5.92311 15.0141 5.83881C15.049 5.7545 15.067 5.66414 15.067 5.57288C15.067 5.48162 15.049 5.39125 15.0141 5.30695C14.9791 5.22264 14.9279 5.14605 14.8634 5.08156L14.8628 5.08101C14.7983 5.01644 14.7217 4.96522 14.6374 4.93027C14.5531 4.89533 14.4627 4.87734 14.3715 4.87734C14.2802 4.87734 14.1899 4.89533 14.1056 4.93027C14.0213 4.96522 13.9447 5.01644 13.8802 5.08101L13.8328 5.12837C13.57 5.38549 13.2361 5.55794 12.8743 5.62354C12.5137 5.68892 12.1418 5.64515 11.8063 5.49788C11.4779 5.35635 11.1978 5.12219 11.0003 4.824C10.8022 4.52477 10.6958 4.17412 10.6944 3.81523L10.6944 3.81246V3.74996C10.6944 3.56578 10.6212 3.38915 10.491 3.25891C10.3608 3.12868 10.1841 3.05551 9.99996 3.05551ZM15.1388 12.0833L15.7742 12.3637C15.7378 12.4462 15.7269 12.5377 15.743 12.6265C15.7589 12.7142 15.8005 12.7953 15.8624 12.8594L15.9005 12.8975C15.9005 12.8976 15.9004 12.8974 15.9005 12.8975C16.094 13.091 16.2479 13.3209 16.3527 13.5737C16.4575 13.8266 16.5115 14.0977 16.5115 14.3715C16.5115 14.6453 16.4575 14.9164 16.3527 15.1693C16.2478 15.4222 16.0942 15.652 15.9005 15.8454L15.4097 15.3541L15.901 15.8449C15.7075 16.0386 15.4777 16.1923 15.2248 16.2971C14.9719 16.4019 14.7008 16.4559 14.427 16.4559C14.1533 16.4559 13.8822 16.4019 13.6293 16.2971C13.3765 16.1923 13.1468 16.0387 12.9534 15.8452C12.9533 15.8451 12.9534 15.8453 12.9534 15.8452L12.915 15.8068C12.8509 15.7449 12.7698 15.7033 12.682 15.6874C12.5933 15.6713 12.5018 15.6822 12.4192 15.7186L12.4124 15.7216C12.3315 15.7563 12.2625 15.8138 12.2139 15.8872C12.1655 15.9604 12.1394 16.046 12.1388 16.1336V16.25C12.1388 16.8025 11.9194 17.3324 11.5287 17.7231C11.138 18.1138 10.6081 18.3333 10.0555 18.3333C9.50298 18.3333 8.97308 18.1138 8.58238 17.7231C8.19168 17.3324 7.97218 16.8025 7.97218 16.25V16.1974C7.96889 16.1091 7.93973 16.0236 7.88825 15.9517C7.83556 15.878 7.76192 15.8219 7.67692 15.7906C7.66319 15.7856 7.64962 15.7801 7.63623 15.7742C7.55372 15.7378 7.46219 15.7269 7.37345 15.743C7.28567 15.7589 7.20459 15.8005 7.14045 15.8624L7.10239 15.9005C7.1023 15.9005 7.10248 15.9004 7.10239 15.9005C6.90896 16.094 6.67902 16.2479 6.42622 16.3527C6.17331 16.4575 5.90222 16.5115 5.62843 16.5115C5.35465 16.5115 5.08355 16.4575 4.83064 16.3527C4.57797 16.2479 4.34839 16.0944 4.15502 15.901C3.96132 15.7075 3.80765 15.4777 3.70281 15.2248C3.59797 14.9719 3.54401 14.7008 3.54401 14.427C3.54401 14.1533 3.59797 13.8822 3.70281 13.6293C3.80765 13.3763 3.96132 13.1466 4.15502 12.9531L4.19309 12.915C4.25502 12.8509 4.29658 12.7698 4.31249 12.682C4.32858 12.5933 4.31772 12.5018 4.2813 12.4192L4.2783 12.4124C4.24362 12.3315 4.18607 12.2625 4.11268 12.2139C4.03957 12.1655 3.95395 12.1394 3.86628 12.1388H3.74996C3.19742 12.1388 2.66752 11.9194 2.27682 11.5287C1.88612 11.138 1.66663 10.608 1.66663 10.0555C1.66663 9.50298 1.88612 8.97308 2.27682 8.58238C2.66752 8.19168 3.19742 7.97218 3.74996 7.97218H3.80249C3.89082 7.96889 3.97629 7.93973 4.04826 7.88825C4.12193 7.83556 4.17804 7.76193 4.20931 7.67692C4.21436 7.66319 4.21984 7.64962 4.22575 7.63623C4.26217 7.55372 4.27303 7.46219 4.25694 7.37345C4.24102 7.28567 4.19946 7.2046 4.13753 7.14045L4.09946 7.10239C3.90576 6.9089 3.7521 6.67914 3.64726 6.42622C3.54241 6.17331 3.48845 5.90221 3.48845 5.62843C3.48845 5.35465 3.54241 5.08355 3.64726 4.83064C3.75205 4.57785 3.90562 4.34818 4.09919 4.15475C4.29262 3.96117 4.52229 3.8076 4.77508 3.70281C5.028 3.59797 5.29909 3.54401 5.57288 3.54401C5.84666 3.54401 6.11776 3.59797 6.37067 3.70281C6.62358 3.80765 6.85335 3.96132 7.04683 4.15502L7.0849 4.19308C7.14904 4.25501 7.23011 4.29658 7.31789 4.31249C7.40664 4.32858 7.49817 4.31772 7.58068 4.2813C7.62515 4.26168 7.67144 4.24683 7.71876 4.23692C7.76718 4.20405 7.80898 4.16193 7.84159 4.11268C7.89001 4.03957 7.91608 3.95395 7.91663 3.86628V3.74996C7.91663 3.19742 8.13612 2.66752 8.52682 2.27682C8.91752 1.88612 9.44743 1.66663 9.99996 1.66663C10.5525 1.66663 11.0824 1.88612 11.4731 2.27682C11.8638 2.66752 12.0833 3.19742 12.0833 3.74996V3.81072C12.0838 3.89839 12.1099 3.98401 12.1583 4.05712C12.2069 4.13052 12.2759 4.1881 12.3569 4.22278L12.3637 4.22571C12.4462 4.26213 12.5377 4.27303 12.6265 4.25694C12.7142 4.24102 12.7953 4.19946 12.8595 4.13754L12.8975 4.09946C13.091 3.90576 13.3208 3.7521 13.5737 3.64726C13.8266 3.54241 14.0977 3.48845 14.3715 3.48845C14.6453 3.48845 14.9164 3.54241 15.1693 3.64726C15.4222 3.7521 15.652 3.90576 15.8454 4.09946C16.0389 4.29283 16.1924 4.52241 16.2971 4.77508C16.4019 5.028 16.4559 5.29909 16.4559 5.57288C16.4559 5.84666 16.4019 6.11776 16.2971 6.37067C16.1923 6.62346 16.0387 6.85313 15.8452 7.04656C15.8451 7.04665 15.8453 7.04647 15.8452 7.04656L15.8068 7.0849C15.7449 7.14904 15.7033 7.23011 15.6874 7.31789C15.6713 7.40664 15.6822 7.49817 15.7186 7.58068C15.7382 7.62515 15.7531 7.67143 15.763 7.71876C15.7959 7.76718 15.838 7.80897 15.8872 7.84159C15.9604 7.89001 16.046 7.91608 16.1336 7.91663H16.25C16.8025 7.91663 17.3324 8.13612 17.7231 8.52682C18.1138 8.91752 18.3333 9.44742 18.3333 9.99996C18.3333 10.5525 18.1138 11.0824 17.7231 11.4731C17.3324 11.8638 16.8025 12.0833 16.25 12.0833H16.1892C16.1015 12.0838 16.0159 12.1099 15.9428 12.1583C15.8694 12.2069 15.8118 12.2759 15.7771 12.3569L15.1388 12.0833Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingsIcon;
