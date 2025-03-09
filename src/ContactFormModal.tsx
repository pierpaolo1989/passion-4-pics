import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactFormModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [captcha, setCaptcha] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string>("");
  const [accepted, setAccepted] = useState(false);
  const showButton = process.env.REACT_APP_SHOW_BUTTON_UPLOAD_PICS === "true";

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha(`${num1} + ${num2}`);
    setCaptchaValue((num1 + num2).toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (captcha !== captchaValue) {
      alert("Wrong Captcha!");
      return;
    }
    if (!accepted) {
      alert("Devi accettare la privacy policy");
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("instagram", instagram);
    if (photo) formData.append("photo", photo);

    try {
      await fetch("https://example.com/api/upload.php", {
        method: "POST",
        body: formData,
      });
      alert("Dati inviati con successo!");
      setShow(false);
    } catch (error) {
      alert("Errore nell'invio dei dati");
    }
  };

  return (
    <div>
      {showButton &&<button className="btn btn-primary" onClick={() => { setShow(true); generateCaptcha(); }}>
        Send pic
      </button>}
      {show && (
        <div className="modal d-block show" tabIndex={-1} style={{ backgroundColor: "rgba(0, 0, 0, 0.92)" }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxHeight: "250px" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contattaci</h5>
                <button className="btn-close" onClick={() => setShow(false)}>
                              <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Instagram</label>
                    <input type="text" className="form-control" value={instagram} onChange={(e) => setInstagram(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Carica Foto</label>
                    <input type="file" className="form-control" onChange={(e) => setPhoto(e.target.files?.[0] || null)} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Captcha: {captcha}</label>
                    <input type="text" className="form-control" onChange={(e) => setCaptchaValue(e.target.value)} required />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} required />
                    <label className="form-check-label">Accetto la policy</label>
                  </div>
                  <button type="submit" className="btn btn-success">Invia</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormModal;