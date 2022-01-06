import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, FlexProps, HStack, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';
import { FiBell, FiChevronDown, FiMenu, FiMoon, FiSun } from 'react-icons/fi';

interface MobileProps extends FlexProps {
  onOpen: () => void;
  onPushSidebar: () => void;
  isPushSidebar: boolean;
}
export default function MobileNav({
  onOpen,
  onPushSidebar,
  isPushSidebar,
  ...rest
}: MobileProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan767] = useMediaQuery('(min-width: 767px)');
  return (
    <>
      <Flex
        transition="0.2s ease"
        ml={{ base: 0, md: !isPushSidebar ? 60 : 20 }}
        px={{ base: 4, md: 4 }}
        height={'60px'}
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}
      >
        <Flex flexGrow={1}>
          <HStack spacing={{ base: '6' }}>
            {isLargerThan767 ? (
              <IconButton
                onClick={onPushSidebar}
                variant="ghost"
                aria-label="open menu"
                icon={<FiMenu />}
              />
            ) : (
              <IconButton
                onClick={onOpen}
                variant="ghost"
                aria-label="open menu"
                icon={<FiMenu />}
              />
            )}

            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Page
            </Text>
          </HStack>
        </Flex>

        <HStack spacing={{ base: '0', md: '2' }}>
          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="open menu"
            icon={colorMode == 'dark' ? <FiSun /> : <FiMoon />}
          />
          <IconButton
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}
