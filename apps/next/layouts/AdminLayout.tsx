import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex } from '@chakra-ui/layout';
import { Portal } from '@chakra-ui/portal';
import MobileNav from '../components/Admin/Navbar/Navbar';
import SidebarWithHeader from '../components/Admin/Sidebar/Sidebar';

export default function AdminLayout(props) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { isOpen: isPushSidebar, onToggle: onPushSidebar } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <MobileNav
        onOpen={onOpen}
        onPushSidebar={onPushSidebar}
        isPushSidebar={isPushSidebar}
      />
      <SidebarWithHeader
        isOpen={isOpen}
        onClose={onClose}
        isPushSidebar={isPushSidebar}
      />
      <Flex
        transition="0.2s ease"
        ml={{ base: 0, md: !isPushSidebar ? 60 : 20 }}
        px={{ base: 4, md: 4 }}
        alignItems="flex-start"
        flexDirection="column"
      >
        {props.children}
      </Flex>
    </Box>
  );
}
