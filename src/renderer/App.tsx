import { Provider } from 'react-redux';
import store from 'state/store';
import Login from 'pages/login';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from 'components/Hello';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}
