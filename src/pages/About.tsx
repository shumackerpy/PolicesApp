import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const About: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acerca de</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>
          <div className="about-container">
            <img src="src/assets/foto.png" alt="Oficial" className="about-image" />
            <h2>Oficial</h2>
            <p>Nombre: Shumacker Antonio</p>
            <p>Apellido: Del Villar Lorenzo</p>
            <p>Matrícula: 2022-0477</p>
            <p>Reflexión: "La seguridad y protección es nuestro honor y deber"</p>
          </div>
        </IonText>
        <IonButton expand="full" onClick={() => history.push('/home')}>Volver al Inicio</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default About;
