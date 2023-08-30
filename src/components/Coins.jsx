import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from '../index';
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import Loader from './Loader.jsx';
import { Link } from 'react-router-dom';

const Coins = () => {
  const btns = new Array(132).fill(1);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');
  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
  const changepage = page => {
    setPage(page);
    setLoading(true);
  };
  useEffect(() => {
    const fetchcoins = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}&page=${page}`
      );
      setCoins(data);
      setLoading(false);
    };
    fetchcoins();
  }, [currency, page]);
  return (
    <>
      <Container maxW={'container.xl'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
              <HStack spacing={'4'}>
                <Radio value={'inr'}>INR</Radio>
                <Radio value={'usd'}>USD</Radio>
                <Radio value={'eur'}>EUR</Radio>
              </HStack>
            </RadioGroup>
            <HStack flexWrap={'wrap'} justifyContent={'space-evenly'}>
              {coins.map(i => (
                <CoinsCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  img={i.image}
                  price={i.current_price}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>
            <HStack w={'full'} overflowX={'auto'}>
              {btns.map((item, index) => (
                <Button
                  onClick={() => changepage(index + 1)}
                  bgColor={'blackAlpha.900'}
                  color={'white'}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

const CoinsCard = ({ id, name, img, symbol, price, currencySymbol = '₹' }) => (
  <Link to={`/coin/${id}`}>
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
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : 'NA'}</Text>
    </VStack>
  </Link>
);

export default Coins;
