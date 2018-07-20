import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/IndexPage'),
  });
  const IndexPageI = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/IndexPageI'),
  });
  const AboutPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/AboutPage'),
  });
  const CompositionsPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/CompositionsPage'),
  });
  const CompositionPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/CompositionPage'),
  });
  const TrainPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/TrainPage')
  });
  const JobPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/JobPage')
  });
  const DubberPage = dynamic({
    app,
    models: () => [
      import('../models/sections.js'),
    ],
    component: () => import('./routes/DubberPage')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/v1" component={IndexPageI} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/train" component={TrainPage} />
        <Route exact path="/compositions" component={CompositionsPage} />
        <Route exact path="/composition" component={CompositionPage} />
        <Route exact path="/dubber" component={DubberPage} />
        <Route exact path="/job" component={JobPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
