import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/react';
import { getIncidents, deleteAllIncidents } from '../storage'; // Asegúrate de que deleteAllIncidents esté en tu módulo de almacenamiento
import { useHistory } from 'react-router-dom';

const IncidentList: React.FC = () => {
  const [incidents, setIncidents] = useState<any[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchIncidents = async () => {
      const incidents = await getIncidents();
      setIncidents(incidents);
    };
    fetchIncidents();
  }, []);

  const handleDeleteAll = async () => {
    await deleteAllIncidents(); // Función que debes implementar en el módulo de almacenamiento
    setIncidents([]); // Actualiza el estado para reflejar que la lista está vacía
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Incidencias</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {incidents.map((incident, index) => (
            <IonItem
              key={index}
              button
              onClick={() => history.push(`/incident-detail/${index}`)}
            >
              <IonLabel>
                <h2>{incident.title}</h2>
                <p>{incident.date}</p>
                <p>{incident.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="full" onClick={() => history.push('/home')}>Volver al Inicio</IonButton>
        <IonButton expand="full" color="danger" onClick={() => setShowAlert(true)}>Eliminar Todos los Registros</IonButton>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Confirmar'}
          message={'¿Estás seguro de que quieres eliminar todos los registros? Esta acción no se puede deshacer.'}
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => console.log('Cancelado'),
            },
            {
              text: 'Eliminar',
              handler: handleDeleteAll,
            }
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default IncidentList;
