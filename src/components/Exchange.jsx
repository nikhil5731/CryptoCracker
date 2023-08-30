import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from '../index';
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import Loader from './Loader.jsx';

const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchexchange = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchange(data);
      setLoading(false);
    };
    fetchexchange();
  }, []);
  return (
    <>
      <Container maxW={'container.xl'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack flexWrap={'wrap'} justifyContent={'space-evenly'}>
              {exchange.map(i => (
                <ExchangeCard
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                />
              ))}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={'blank'}>
    <VStack
      w={'52'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      m={'4'}
      transition={'all 0.3s'}
      css={{ '&:hover': { transform: 'scale(1.1)' } }}
    >
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} />
      <Heading size={'md'} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchange;
