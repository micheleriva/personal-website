import { Box } from "@chakra-ui/react";

export default function PageContainer({ children }) {
  return (
    <Box
      width={["container.sm", "container.sm", "container.xl"]}
      p={["8", "4", "0"]}
    >
      {children}
    </Box>
  );
}
