import { login } from '@app-next/actions/auth';
import AuthLayout from '@app-next/layouts/AuthLayout';
import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from '@chakra-ui/input';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout';
import { Avatar, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import React, { useState } from 'react';

export default function Login({ users, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      login(email, password).catch((error) => {
        toast({
          title: 'Error',
          description: error.message,
          position: 'top-right',
        });
      });
      //   await auth.login(email, password);
      setEmail('');
      setPassword('');
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: '90%', md: '468px' }}>
            <form>
              <Stack spacing={4} p="1rem" boxShadow="md">
                <FormControl>
                  <InputGroup>
                    {/* <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    /> */}
                    <Input
                      color="black"
                      type="email"
                      placeholder="email address"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    {/* <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    /> */}
                    <Input
                      color="black"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{' '}
          <Link color="teal.500" href="#">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </AuthLayout>
  );
}
