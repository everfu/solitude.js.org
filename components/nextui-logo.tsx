import React from "react";
import {clsx} from "@nextui-org/shared-utils";

import {IconSvgProps} from "@/types";
import {dataAttr} from "@/utils";
export interface LogoProps extends IconSvgProps {
  auto?: boolean;
  small?: boolean;
  fill?: string;
  className?: string;
}

export const SmallLogo: React.FC<LogoProps> = ({
  auto,
  size,
  width,
  height,
  className,
  ...props
}) => (
  <svg
    className={clsx("data-[auto=true]:sm:hidden block text-foreground", className)}
    data-auto={dataAttr(auto)}
    fill="currentColor"
    height={height || size || 25}
    viewBox="0 0 100 24.48"
    width={width || size || 25}
    {...props}
  >
    <text x="0" y="20" fontSize="20" fill="currentColor">
      Solitude
    </text>     
  </svg>
);

export const LargeLogo: React.FC<LogoProps> = ({auto, className, ...props}) => (
  <svg
    className={clsx(
      "data-[auto=true]:hidden data-[auto=true]:sm:block block text-foreground",
      className,
    )}
    data-auto={dataAttr(auto)}
    fill="currentColor"
    viewBox="0 0 100 24.48"
    {...props}
  >
    <text x="0" y="20" fontSize="20" fill="currentColor">
      Solitude
    </text>    
  </svg>
);

export const NextUILogo: React.FC<LogoProps> = ({auto, small, ...props}) => {
  if (auto) {
    return (
      <div>
        <SmallLogo auto={auto} {...props} />
        <LargeLogo auto={auto} {...props} />
      </div>
    );
  }

  if (small) {
    return <SmallLogo {...props} />;
  }

  return <LargeLogo auto={auto} {...props} />;
};
