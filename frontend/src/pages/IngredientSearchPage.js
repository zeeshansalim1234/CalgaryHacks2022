import "../styles/IngredientsStyles.css";
import "../styles/GlassStyles.css";
import { Form } from "react-bootstrap";

function IngredientSearchPage() {
  return (
    <div className="glass">
      <div className="IngredientsHeader">
        <h1>Upload a Image of the Products Barcode</h1>
        <Form.Control type="file" size="lg" style={{width:`40%`}} />
      </div>
    </div>
  );
}

export default IngredientSearchPage;
