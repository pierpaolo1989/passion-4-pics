import React, { useState } from "react";

const ImageFilterComponent = () => {
  // Stato per il filtro e la dimensione dell'immagine
  const [filter, setFilter] = useState("none");
  const [size, setSize] = useState(100);  // Inizialmente l'immagine è al 100% della dimensione originale

  // Funzione per cambiare il filtro
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Funzione per cambiare la dimensione dell'immagine
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="image-filter-container">
      <h2>Filtri e Resize per Immagine</h2>
      
      {/* Selezione del filtro */}
      <div>
        <label>Filtro:</label>
        <select onChange={handleFilterChange} value={filter}>
          <option value="none">Nessun Filtro</option>
          <option value="grayscale(100%)">Grayscale</option>
          <option value="sepia(100%)">Sepia</option>
          <option value="blur(5px)">Blur</option>
          <option value="invert(100%)">Inverti</option>
        </select>
      </div>

      {/* Controllo di ridimensionamento */}
      <div>
        <label>Ridimensiona (altezza/larghezza %):</label>
        <input
          type="range"
          min="50"
          max="200"
          step="1"
          value={size}
          onChange={handleSizeChange}
        />
        <span>{size}%</span>
      </div>

      <div className="image-container">
        {/* Immagine con filtro e dimensione applicata */}
        <img 
          src="image-placeholder.svg"  // Sostituisci con il link della tua immagine
          alt="Immagine con filtro e resize"
          style={{
            filter: filter,
            width: `${size}%`,  // Applica la percentuale selezionata per la larghezza
            maxWidth: "100%"  // Impedisce l'immagine di superare la larghezza del contenitore
          }} 
        />
      </div>
    </div>
  );
};

export default ImageFilterComponent;
