import { ChakraProvider } from "@chakra-ui/core"
import { GlobalProvider } from '../context/GlobalState'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
    </GlobalProvider>
  )
}

export default MyApp