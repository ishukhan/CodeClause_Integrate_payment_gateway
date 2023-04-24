import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {

  const searchQuery = useSearchParams()[0]

  const refernceNum = searchQuery.get("reference")

  return (
    <Box>
      <VStack h={"100vh"} justifyContent={'center'}>
        <Heading textTransform={'uppercase'}>Order Succsessfully</Heading>
        <Text>Reference No.{refernceNum}</Text>
      </VStack>
    </Box>
  )
}

export default PaymentSuccess;
