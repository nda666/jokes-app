import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
export default function AuthLayout({ children }) {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      {children}
    </Box>
  );
}
