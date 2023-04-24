import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 2. Wrap ChakraProvider at the root of your app
    <ChakraProvider>
        <App />
    </ChakraProvider>

);
