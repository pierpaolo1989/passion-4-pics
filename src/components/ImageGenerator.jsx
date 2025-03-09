import { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [description, setDescription] = useState(""); // Testo inserito dall'utente
  const [imageUrl, setImageUrl] = useState(null); // URL dell'immagine generata
  const [loading, setLoading] = useState(false); // Stato di caricamento

  // Funzione per generare l'immagine
  const generateImage = async () => {
    setLoading(true);
    setImageUrl(null); // Reset dell'immagine precedente

    try {
      const response = await axios.post(
        "https://api.craiyon.com/generate", // Endpoint di Craiyon
        { prompt: description } // Passa la descrizione
      );
      const { images } = response.data; // Ottieni l'array delle immagini
      setImageUrl(images[0]); // Setta l'URL della prima immagine
    } catch (error) {
      console.error("Errore generazione immagine", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Generatore di Immagini con Craiyon</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrivi l'immagine"
      />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generando..." : "Genera Immagine"}
      </button>

      {imageUrl && <img src={imageUrl} alt="Generated" style={{ marginTop: 20, maxWidth: "100%" }} />}
    </div>
  );
};

export default ImageGenerator;
