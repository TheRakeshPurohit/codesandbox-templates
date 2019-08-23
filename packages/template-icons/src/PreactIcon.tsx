import React from "react";
import { SVGIconProps } from "./types";
import { useUniqueId } from "./useUniqueId";

export const PreactIcon: React.FC<SVGIconProps> = ({
  scale = 1,
  width = 32,
  height = 32,
  ...props
}) => {
  const id = useUniqueId();

  return (
    <svg
      width={scale * width}
      height={scale * height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath={`url(#Preact_Clip0_${id})`}>
        <path
          d="M16 -4.76837e-07L29.8378 7.98918V23.9676L16 31.9567L2.16216 23.9676V7.98918L16 -4.76837e-07Z"
          fill="#673AB8"
        />
        <path
          d="M5.93132 23.8355C7.77096 26.1901 13.6173 24.396 19.1367 20.0837C24.6562 15.7714 27.8114 10.5328 25.9718 8.17819C24.1321 5.82356 18.2858 7.6177 12.7664 11.93C7.24688 16.2423 4.09168 21.4809 5.93132 23.8355ZM6.71722 23.2215C6.10712 22.4406 6.37368 20.9077 7.53602 18.9778C8.75997 16.9457 10.8377 14.7024 13.3804 12.7159C15.923 10.7294 18.6023 9.25602 20.8702 8.56004C23.0239 7.8991 24.5758 8.0113 25.1859 8.7922C25.796 9.5731 25.5294 11.106 24.3671 13.0359C23.1431 15.068 21.0654 17.3113 18.5227 19.2978C15.9801 21.2843 13.3008 22.7577 11.0329 23.4537C8.87922 24.1146 7.32733 24.0024 6.71722 23.2215Z"
          fill="white"
        />
        <path
          d="M25.9718 23.8355C27.8114 21.4809 24.6562 16.2423 19.1367 11.93C13.6173 7.6177 7.77096 5.82356 5.93132 8.17819C4.09168 10.5328 7.24688 15.7714 12.7664 20.0837C18.2858 24.396 24.1321 26.1901 25.9718 23.8355ZM25.1859 23.2215C24.5758 24.0024 23.0239 24.1146 20.8702 23.4537C18.6023 22.7577 15.923 21.2843 13.3804 19.2978C10.8377 17.3113 8.75997 15.068 7.53602 13.0359C6.37368 11.106 6.10712 9.5731 6.71722 8.7922C7.32733 8.0113 8.87922 7.8991 11.0329 8.56004C13.3008 9.25602 15.9801 10.7294 18.5227 12.7159C21.0654 14.7024 23.1431 16.9457 24.3671 18.9778C25.5294 20.9077 25.796 22.4406 25.1859 23.2215Z"
          fill="white"
        />
        <path
          d="M15.9516 18.1262C17.122 18.1262 18.0709 17.1773 18.0709 16.0068C18.0709 14.8364 17.122 13.8875 15.9516 13.8875C14.7811 13.8875 13.8322 14.8364 13.8322 16.0068C13.8322 17.1773 14.7811 18.1262 15.9516 18.1262Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`Preact_Clip0_${id}`}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
