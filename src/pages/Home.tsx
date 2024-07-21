import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center><IonTitle>Inicio</IonTitle></center>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="full" onClick={() => history.push('/register-incident')}>
          Registrar Incidencia
        </IonButton>
        <IonButton expand="full" onClick={() => history.push('/incident-list')}>
          Ver Incidencias
        </IonButton>
        <IonButton expand="full" onClick={() => history.push('/about')}>
          Acerca de
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
