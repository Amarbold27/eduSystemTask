import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./container/header/Header";
import EbsPage from "./container/ebsPage/EbsPage";
import Footer from "./container/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/ebs" exact component={EbsPage} />
          <Route path="/ebs/classes" exact component={EbsPage} />
          <Route path="/ebs/curses" exact component={EbsPage} />
          <Route path="/ebs/textbook" exact component={EbsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
