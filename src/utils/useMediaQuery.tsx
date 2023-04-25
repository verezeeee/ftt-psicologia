import React from "react";

import { useMediaQuery as rrUseMediaQuery } from "react-responsive";

export function useMediaQuery(): {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
} {
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [tablet, setTablet] = React.useState<boolean>(false);
  const [desktop, setDesktop] = React.useState<boolean>(false);

  const a = rrUseMediaQuery({ query: "(min-width: 1224px)" });
  const b = rrUseMediaQuery({
    query: "(min-width: 1000px) and (max-width: 1224px)",
  });
  const c = rrUseMediaQuery({ query: "(max-width: 1000px)" });

  React.useEffect(() => {
    if (a) {
      setDesktop(true);
      setTablet(false);
      setMobile(false);
    }
    if (b) {
      setTablet(true);
      setMobile(false);
      setDesktop(false);
    }
    if (c) {
      setMobile(true);
      setDesktop(false);
      setTablet(false);
    }
  }, [a, b, c]);

  return { mobile, tablet, desktop };
}
