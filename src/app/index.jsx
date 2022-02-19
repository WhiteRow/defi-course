import { Suspense } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Routing } from '../pages';

import { Skeleton } from '../features/skeleton';

import './index.scss';

const App = () => {
  const browserHistory = createBrowserHistory();

  return (
    <div className="app">
      <Router history={browserHistory}>
        <Suspense fallback={Skeleton()}>
          <Routing />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
