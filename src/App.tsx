import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, add, list, informationCircle } from 'ionicons/icons';
import Home from './pages/Home';
import RegisterIncident from './pages/RegisterIncident';
import IncidentList from './pages/IncidentList';
import About from './pages/About';
import IncidentDetail from './pages/IncidentDetail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/register-incident">
            <RegisterIncident />
          </Route>
          <Route exact path="/incident-list">
            <IncidentList />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/incident-detail/:id">
            <IncidentDetail />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="register" href="/register-incident">
            <IonIcon icon={add} />
            <IonLabel>Registrar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list" href="/incident-list">
            <IonIcon icon={list} />
            <IonLabel>Lista</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={informationCircle} />
            <IonLabel>Acerca</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
