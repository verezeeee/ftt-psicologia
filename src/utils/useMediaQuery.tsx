import React from "react";

import { useMediaQuery } from "react-responsive";

export default function MediaQuery(): {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
} {
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [tablet, setTablet] = React.useState<boolean>(false);
  const [desktop, setDesktop] = React.useState<boolean>(false);

  const a = useMediaQuery({ query: "(min-width: 1224px)" });
  const b = useMediaQuery({
    query: "(min-width: 1000px) and (max-width: 1224px)",
  });
  const c = useMediaQuery({ query: "(max-width: 1000px)" });

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
