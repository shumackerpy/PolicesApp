// incidentdetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { getIncidents } from '../storage';

const IncidentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [incident, setIncident] = useState<any>(null);

  useEffect(() => {
    const fetchIncident = async () => {
      const incidents = await getIncidents();
      const selectedIncident = incidents[parseInt(id)];
      setIncident(selectedIncident);
    };
    fetchIncident();
  }, [id]);

  if (!incident) {
    return <IonContent>Cargando...</IonContent>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles de la Incidencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>{incident.title}</h2>
        <p>{incident.date}</p>
        <p>{incident.description}</p>
        {incident.photo && <img src={incident.photo} alt="Foto del incidente" style={{ maxWidth: '100%', height: 'auto' }} />}
        <br></br>
        <br></br>
        {incident.audio && (
          <audio controls>
            <source src={incident.audio} type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}
      </IonContent>
    </IonPage>
  );
};

export default IncidentDetail;
