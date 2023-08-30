import React from 'react'
import { Spinner, VStack,Text } from '@chakra-ui/react'

const Loader = () => {
  return (
    <>
    <VStack height={'80vh'} alignItems={'center'} justifyContent={'center'}>
      <Spinner size={'xl'} mb={'2'}/>
      <Text fontWeight={'bold'}>Loading</Text>
      </VStack>
    </>
  )
}

export default Loader
