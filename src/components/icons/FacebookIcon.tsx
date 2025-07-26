import type { IconType } from '../../types';

export default function FacebookIcon({
  width = 24,
  height = 24,
  className,
}: IconType) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_253)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.334595 8.71133C0.334595 12.6887 3.22326 15.996 7.00126 16.6667V10.8887H5.00126V8.66667H7.00126V6.88867C7.00126 4.88867 8.28993 3.778 10.1126 3.778C10.6899 3.778 11.3126 3.86667 11.8899 3.95533V6H10.8679C9.88993 6 9.66793 6.48867 9.66793 7.11133V8.66667H11.8013L11.4459 10.8887H9.66793V16.6667C13.4459 15.996 16.3346 12.6893 16.3346 8.71133C16.3346 4.28667 12.7346 0.666668 8.33459 0.666668C3.93459 0.666668 0.334595 4.28667 0.334595 8.71133Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_253">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.334595 0.666668)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
