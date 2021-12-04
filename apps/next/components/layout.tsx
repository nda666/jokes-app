import { Box, useDisclosure } from '@chakra-ui/react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout(props) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Navbar isOpen={isOpen} onToggle={onToggle} onOpen={onOpen} />
      <Sidebar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

      <Box>{props.children}</Box>
    </>
  );
}
