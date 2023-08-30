import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img from '../img.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={['89.20vh','88.7vh']}>
      <motion.div style={{ height: '80vh' }}
      animate={{
        translateY:'20px'
        // rotate:'360deg'
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
      }}
      >
        <Image
          w={'full'}
          h={'full'}
          objectFit={'contain'}
          src={img}
          filter={'grayscale(1)'}
        />
      </motion.div>
      <Text
        fontSize={['2xl','6xl']}
        textAlign={'center'}
        fontWeight={'bold'}
        color={'whiteAlpha.700'}
        mt={'-20'}
      >
        WELCOME TO DEMOCRACY
      </Text>
    </Box>
  );
};

export default Home;
