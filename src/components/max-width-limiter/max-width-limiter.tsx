import { Flex } from "@chakra-ui/react";
import type { MaxWidthLimiterProps } from "./types";

export const MaxWidthLimiter = ({
  maxWidth = 1280,
  children,
}: MaxWidthLimiterProps) => {
  return (
    <Flex
      maxWidth={`${maxWidth}px`}
      margin="0 auto"
      flexDirection="row"
      width="100%"
      paddingX="2"
    >
      {children}
    </Flex>
  );
};
