import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// Pages
import Footer from './components/Footer';
import TwentyFortyEight from './pages/TwentyFortyEight';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={TwentyFortyEight} path='/' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
