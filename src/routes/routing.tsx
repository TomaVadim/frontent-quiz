import { FC, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';

type Props = {
  children: ReactNode;
};

export const Routing: FC<Props> = ({ children }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {children}
    </Router>
  );
};
