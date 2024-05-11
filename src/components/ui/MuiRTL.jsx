import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({ key: "muirtl", stylisPlugins: [prefixer, rtlPlugin] });

function MuiRTL({ children }) {
  return <CacheProvider value={cacheRtl}> {children} </CacheProvider>;
}

export default MuiRTL;
