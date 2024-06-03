interface IconProps {
  icon: "arrowLeft" | "chevronLeft" | "chevronRight" | "search";
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  const arrowLeft = (
    <span>
      <svg
        className={className}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  );

  const chevronLeft = (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.939 4.93896L6.87903 12L13.939 19.061L16.061 16.939L11.121 12L16.061 7.06096L13.939 4.93896Z"
        fill="#000"
      />
    </svg>
  );

  const chevronRight = (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.061 19.061L17.121 12L10.061 4.93896L7.93896 7.06096L12.879 12L7.93896 16.939L10.061 19.061Z"
        fill="#000"
      />
    </svg>
  );
  const search = (
    <svg
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 20H18V19H17V18H16V17H15V16H14V15H13V14H11V15H6V14H4V13H3V11H2V6H3V4H4V3H6V2H11V3H13V4H14V6H15V11H14V13H15V14H16V15H17V16H18V17H19V18H20V19H19M11 13V12H12V11H13V6H12V5H11V4H6V5H5V6H4V11H5V12H6V13H11Z"
        fill="black"
      />
    </svg>
  );

  let iconElement;

  switch (icon) {
    case "arrowLeft":
      iconElement = arrowLeft;
      break;
    case "chevronLeft":
      iconElement = chevronLeft;
      break;
    case "chevronRight":
      iconElement = chevronRight;
      break;
    case "search":
      iconElement = search;
      break;
    default:
      return null;
  }

  return iconElement;
};

export default Icon;
