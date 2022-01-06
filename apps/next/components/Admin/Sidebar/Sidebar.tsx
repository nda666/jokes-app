import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  BoxProps,
  FlexProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
  Image,
  HStack,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import Link from 'next/link';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function SidebarWithHeader(props) {
  const [isLargerThan766] = useMediaQuery('(min-width: 766px)');
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    mount && (
      <div>
        {isLargerThan766 && (
          <SidebarContent
            key="sidebar"
            isPushSidebar={props.isPushSidebar}
            display={{ base: 'none', md: 'block' }}
          />
        )}

        {!isLargerThan766 && (
          <Drawer
            autoFocus={false}
            isOpen={props.isOpen}
            placement="left"
            onClose={props.onClose}
            returnFocusOnClose={false}
            onOverlayClick={props.onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent key="sidebar2" onClose={props.onClose} />
            </DrawerContent>
          </Drawer>
        )}
      </div>
    )
  );
}

interface SidebarProps extends BoxProps {
  onClose?: () => void;
  isPushSidebar?: boolean;
}

const PopOverLink = React.forwardRef(({field,meta}) => {
  const { onChange, onBlur, value, ref } = field

  return <Select onChange={onChange} value={value} .../>
});

const SidebarContent = ({ onClose, isPushSidebar, ...rest }: SidebarProps) => {
  const firstFieldRef = React.useRef(null)

  return (
    <Box
      transition="0.2s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: !isPushSidebar ? 60 : 20 }}
      top="0"
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent={!isPushSidebar ? 'space-between' : 'center'}
        mx="2"
      >
        <HStack spacing={3}>
          <Image
            boxSize={10}
            objectFit="cover"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            p="1"
            background="white"
            src="img/logo.png"
            alt="Dan Abramov"
          />
          {!isPushSidebar && (
            <Text ml="2" fontSize="2xl" fontFamily="mono" fontWeight="bold">
              PLESETAN
            </Text>
          )}
        </HStack>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, index) => (
        <div key={index}>
          {!isPushSidebar ? (
            <NavItem key={link.name} icon={link.icon}>
              {!isPushSidebar ? link.name : ''}
            </NavItem>
          ) : (
            <Popover
              key={index}
              placement="right-start"
              trigger="hover"
              openDelay={1}
              closeDelay={1}
            >
              <PopoverAnchor>
                <p></p>
              </PopoverAnchor>
              <PopoverTrigger>
                <NavItem
                  key={link.name}
                  icon={link.icon}
                  justifyContent="flex-end"
                />
              </PopoverTrigger>
              <PopoverContent w={'max-content'} px={2}>
                <PopoverArrow />
                <PopoverBody fontSize="sm">{link.name}</PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </div>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children?: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" passHref>
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="17"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
