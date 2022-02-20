import "../styles/IngredientsStyles.css";
import "../styles/GlassStyles.css";
import { Form } from "react-bootstrap";

function HealthSearchPage() {
  return (
    <div className="glass">
      <div className="IngredientsHeader">
        <h1>Upload a PDF, Image, or other document to Search</h1>
        <Form.Control type="file" size="lg" style={{width:`40%`}} />
      </div>
    </div>
  );
}

export default HealthSearchPage;
