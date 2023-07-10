"use client";

import Stack from "@mui/material/Stack";

const PannelLayout = ({ children }: { children: React.ReactElement }) => {
  return <Stack direction="row">{children}</Stack>;
};

export default PannelLayout;
