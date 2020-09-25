import React, { useState } from 'react'
import { Main } from '@aragon/ui'
//import './home.css';  //Should this change to Home.css? TODO: Find consistent themeing

//Chakra UI - Added by stoner. Mobile compliant if we care about that
//https://chakra-ui.com/getting-started
// We're trying to leverage AragonUI. You won't need another Library.
import {
    Box,
    Flex,
    Image,
    Button,
    ButtonGroup,
    Stack,
    Text,
    ThemeProvider 
} from '@chakra-ui/core'

import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { dark } from '@material-ui/core/styles/createPalette';



function Home() {
    return (
    <ThemeProvider>
        <Main>
            <Box bg="black" bgSize="100%">
            {/* <Box bg="black" minHeight="100vh"> */}
                <Stack spacing={4} align="center">
                    <Flex align="center">
                        <Image
                            src={require('../img/logo.png')}
                            // size={400}
                            height={500}
                            width={600}
                            fallbackSrc='https://github.com/indigotheory/DPR-MarketPlace/raw/master/img/icon_sq.png'
                            alt=''
                        />
                    </Flex>
            
                    {/* <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Oswald:400,700" media="screen" /> 
                    <Text fontSize="40px" fontFamily="Oswald" display="flex" color="Maroon" fontWeight="bold" justifyContent="center" alignContent="center">PANDEMIC SUPPLY</Text>
             */}
                    <ButtonGroup p="4">
                        <Link to="/need" style={{ textDecoration: 'none' }}>
                            <Button 
                            mr="6" 
                            variantColor="pink" 
                            size="lg">
                            I have a need
                            </Button>
                        </Link>
                        <Link to="/supply" style={{ textDecoration: 'none' }}>
                            <Button 
                                ml="6"
                                mr="6" 
                                variantColor="white" 
                                color="black"
                                size="lg">
                                I can supply
                            </Button>
                        </Link>
                        <Link to="/voteneed" style={{ textDecoration: 'none' }}>
                            <Button 
                                ml="6" 
                                variantColor="cyan" 
                                size="lg">
                                See votes
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Stack>
            </Box>

            {/* // Github icon - this looks bad and should be on header instead

            <Box>  
                <FaGithub />
            </Box> */}

        </Main>
    </ThemeProvider>
    )
  }
  
  export default Home;