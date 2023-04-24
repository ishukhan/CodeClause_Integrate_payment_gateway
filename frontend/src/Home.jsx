import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from "axios"



const Home = () => {

  const checkOutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://localhost:5000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
      amount
    })
    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Ishu Khan", //your business name
      description: "Integrated paymnet getway test",
      image: "https://avatars.githubusercontent.com/u/99346927?s=400&u=e821c49a23bb438e78a9edb921801f7f393fc465&v=4",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
      razor.open();
  }

  return (
    <Box>
      <Stack direction={["column", "row"]}
        h={"100vh"}
        alignItems={'center'}
        justifyContent={'center'}
      >

        <Card
          amount={5000}
          img="https://i.ibb.co/NYzPqYf/51q-Aox-G-bs-L-SL1280.jpg"
          checkOutHandler={checkOutHandler} />
        <Card
          amount={8000}
          img="https://i.ibb.co/k5xfVkL/41-Mlo-Pxj-VL-SL1000.jpg"
          checkOutHandler={checkOutHandler} />
      </Stack>
    </Box>
  )
}

export default Home
