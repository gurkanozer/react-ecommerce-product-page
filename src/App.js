import React, {useContext} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalContext } from "./context/globalState";
import GlobalStyle from "./components/globalStyle";
import Header from "./components/Header";
import ProductPage from './pages/ProductPage';

const App = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header />
        <ProductPage/>
    </ThemeProvider>
  )
};

export default App;
