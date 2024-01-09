import { useState } from 'react';
import './App.css'; // Importing styles
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Payout from './pages/Payout';
import Refund from './pages/Refund';

function App() {
  // State to manage the current page (true for Payout, false for Refund)
  const [pagePayout, setPagePayout] = useState(true);

  // Function to handle the page change based on the selected value
  const handlePage = (value) => {
    setPagePayout(value);
  };

  return (
    <>
     
      <Flex w={"100%"} fontFamily={"Inter"}>
        {/* Sidebar component */}
        <Box w={"16%"} position={"fixed"} zIndex={3}>
          <Sidebar />
        </Box>

        {/* Main content container */}
        <Box bgColor={"white"} ml={"16%"} w={"full"}>
          {/* Navbar component with a fixed position */}
          <Box bgColor={"white"} borderBottom={"1px solid #D9D9D9"} position={"fixed"} w={"84%"} zIndex={2}>
            <Box px={"32px"}>
              <Navbar />
            </Box>
          </Box>

          {/* Main content area with padding and background color */}
          <Box px={"32px"} pt={"96px"} pb={"32px"} bgColor={"#FAFAFA"} zIndex={0}>
            {/* Conditional rendering of Payout or Refund page based on the state */}
            {pagePayout ? <Payout handlePage={handlePage} /> : <Refund handlePage={handlePage} />}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default App;
