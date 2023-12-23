import { useState } from 'react'
import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Payout from './pages/Payout'
import Refund from './pages/Refund'

function App() {
  const [pagePayout,setPagePayout] = useState(true)
  const handlePage=(value)=>{
    setPagePayout(value)
  }

  return (
    <>
      <Flex w={"100%"} fontFamily={"Inter"}>
        <Box w={"16%"} position={"fixed"} zIndex={3}>
          <Sidebar />
        </Box>
        <Box bgColor={"white"} ml={"16%"} w={"full"}>
          <Box bgColor={"white"} borderBottom={"1px solid #D9D9D9"} position={"fixed"} w={"84%"} zIndex={2}>
            <Box px={"32px"}>
              <Navbar />
            </Box>
          </Box>
          <Box px={"32px"} pt={"96px"} pb={"32px"} bgColor={"#FAFAFA"} zIndex={0}>
            {
              pagePayout?
              <Payout handlePage={handlePage} />
              :
              <Refund handlePage={handlePage} />
              }
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default App
