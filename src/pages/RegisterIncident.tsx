// registerincident.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonTextarea, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { saveIncident } from '../storage';

const RegisterIncident: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const history = useHistory();

  const handleRegister = async () => {
    // Handle file upload and save URLs
    const photoUrl = photo ? URL.createObjectURL(photo) : '';
    const audioUrl = audio ? URL.createObjectURL(audio) : '';
    const incident = { title, date, description, photo: photoUrl, audio: audioUrl };
    await saveIncident(incident);
    history.push('/incident-list');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrar Incidencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
        <IonInput placeholder="Título" onIonChange={(e: CustomEvent) => setTitle((e.target as HTMLInputElement).value)} />
        
        <IonModal keepContentsMounted={true}>
          <IonDatetime
            id="datetime"
            presentation="date"
            onIonChange={(e: CustomEvent) => setDate(e.detail.value)}
          ></IonDatetime>
        </IonModal>
        
        <IonTextarea placeholder="Descripción" onIonChange={(e: CustomEvent) => setDescription((e.target as HTMLTextAreaElement).value)} />
        <br />

        <label htmlFor="photo">Imagen:</label>
        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
        />
        <br />
        <br />

        <label htmlFor="audio">Audio:</label>
        <input
          id="audio"
          type="file"
          accept="audio/*"
          onChange={(e) => setAudio(e.target.files ? e.target.files[0] : null)}
        />
        <br />
        <br />

        <IonButton onClick={handleRegister}>Guardar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default RegisterIncident;
