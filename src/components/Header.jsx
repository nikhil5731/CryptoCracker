import { HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HStack bgColor={'blackAlpha.900'} p={'5'} >
        <Button variant={'unstyled'} color={'white'} px={'4'}>
          <Link to={'/'}>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'4'}>
          <Link to={'/exchanges'}>Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={'white'} px={'4'}>
          <Link to={'/coins'}>Coins</Link>
        </Button>
      </HStack>
    </>
  );
};

export default Header;
