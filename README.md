
# 📸 Passion4Pics - Website Source Code  

![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)  
![PHP](https://img.shields.io/badge/PHP-8.0-blueviolet?style=for-the-badge&logo=php)  

## 🌟 Descrizione  

**Passion4Pics** è una piattaforma dedicata agli amanti della fotografia. Il sito web offre una galleria interattiva dove gli utenti possono esplorare immagini, leggere articoli e condividere la loro passione per la fotografia.  

Questa repository contiene il **codice sorgente** del sito, sviluppato utilizzando **React** per il frontend e **PHP** per il backend.  

---

## 🚀 Tecnologie Utilizzate  

- **Frontend:** [React.js](https://react.dev/) (con **React Router** e **Framer Motion**)  
- **Styling:** Tailwind CSS  
- **Backend:** [PHP](https://www.php.net/)  
- **Database:** MySQL  
- **Icons:** FontAwesome  
- **Gestione Stato:** useState, useEffect  

---

## 📂 Struttura del Progetto  

```
📦 passion4pics  
 ┣ 📂 public             # File statici e immagini  
 ┣ 📂 src  
 ┃ ┣ 📂 components       # Componenti React riutilizzabili  
 ┃ ┣ 📂 pages            # Pagine principali del sito  
 ┃ ┣ 📂 assets           # Immagini e file multimediali  
 ┃ ┣ 📜 App.js           # Componente principale  
 ┃ ┣ 📜 index.js         # Punto di ingresso React  
 ┣ 📂 backend            # API PHP per gestione dati  
 ┣ 📜 package.json       # Configurazione delle dipendenze  
 ┣ 📜 .env               # Variabili d’ambiente  
 ┣ 📜 README.md          # Documentazione del progetto  
```

---

## 🛠️ Setup e Installazione  

### 1️⃣ Clonare la Repository  
```bash
git clone https://github.com/tuo-username/passion4pics.git
cd passion4pics
```

### 2️⃣ Installare le Dipendenze  
```bash
npm install
```

### 3️⃣ Configurare il Backend (PHP & MySQL)  
- Assicurati di avere **PHP** e **MySQL** installati  
- Importa il database da `backend/database.sql`  
- Configura il file `.env` con i dati di accesso al database  

### 4️⃣ Avviare il Progetto  
```bash
npm start  # Avvia il frontend React
```
Per il backend:  
```bash
php -S localhost:8000 -t backend
```

---

## 🚀 Features Principali  

✅ Galleria immagini dinamica con animazioni  
✅ Filtri e ricerca per autore e categoria  
✅ Sistema di caricamento immagini (solo admin)  
✅ Sezione blog con articoli sulla fotografia  
✅ Modalità dark/light  

---

## 👥 Contributors  

| Nome              | Ruolo         | GitHub                                             |
|-------------------|-------------- |----------------------------------------------------|
| Pierpaolo Di Dato | Frontend Dev  | [@pierpaolo1989](https://github.com/pierpaolo1989) |

💡 Se vuoi contribuire, sentiti libero di aprire una **Pull Request**!  

---

## 📜 Licenza  

Questo progetto è rilasciato sotto licenza **MIT**. Puoi utilizzarlo e modificarlo liberamente!  

📷 **Passion4Pics** – Per veri amanti della fotografia! 💙
