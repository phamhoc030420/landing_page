import Banner from "./component/banner/banner";
import Client from "./component/client/client";
import Count from "./component/count.js/count";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Our from "./component/our/our";
import Outfit from "./component/outfit/outfit";
import Saller from "./component/saller/saller";
function App() {
  return (
    <div >
    <Header />
    <Banner />
    <Saller />
      <Outfit />
      <Our />
      <Count />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
