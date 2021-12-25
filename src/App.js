import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const App = () => (
  <SwaggerUI url="http://54.188.195.125:5000/api/swagger.json" />
);

export default App;
