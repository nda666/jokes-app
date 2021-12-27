import Layout from '../components/Layout';
import { gql } from '@apollo/client';
import { initializeApollo } from '../apollo/client';
import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';
import { Collapse } from '@chakra-ui/transition';
import { useDisclosure } from '@chakra-ui/hooks';

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const { data, errors } = await apolloClient.query({
    query: gql`
      query jokes {
        jokes {
          answer
          category_id
          createdAt
          id
          question
          updatedAt
          user_id
        }
      }
    `,
  });
  return {
    props: {
      errors: errors || null,
      jokes: data?.jokes || [],
    },
  };
}

function JokeText({ question, answer }: { question: string; answer: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack spacing={4}>
      <Text color={'gray.500'}>{question}</Text>

      <Collapse in={isOpen} animateOpacity>
        <Text color={'gray.500'}>{answer}</Text>
      </Collapse>
      <Button onClick={isOpen ? onClose : onOpen}>
        {isOpen ? `Hide` : `Show`}
      </Button>
    </Stack>
  );
}

export function Index({ jokes, error }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  return (
    <Layout>
      <Container marginTop={5} maxW="container.xl">
        <Grid
          gap={4}
          templateColumns={{
            base: '1fr',
            sm: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
        >
          {jokes.map((joke) => (
            <GridItem w="100%" key={joke.id}>
              <Center py={6}>
                <Box
                  maxW={'445px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}
                >
                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}
                    >
                      Blog
                    </Text>
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                    >
                      Heading
                    </Heading>
                    <JokeText question={joke.question} answer={joke.answer} />
                  </Stack>
                  <Divider />
                  <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                      src={
                        'https://avatars0.githubusercontent.com/u/1164541?v=4'
                      }
                      alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                      <Text fontWeight={600}>Achim Rolle</Text>
                      <Text color={'gray.500'}>
                        {joke.createdAt} · 6min read
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Index;
