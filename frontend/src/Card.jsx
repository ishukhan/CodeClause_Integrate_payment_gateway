import { Button, VStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, img, checkOutHandler }) => {
    return (
        <VStack>
            <Image boxSize={64} objectFit={'cover'} src={img} />
            <Text>₹{amount}</Text>
            <Button onClick={() => checkOutHandler(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card
