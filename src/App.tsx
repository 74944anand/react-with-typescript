import ListGroup from "./Components/ListGroup";

import Alert from "./Components/alert";

import Buttons from "./Components/Buttons";
import { Children, useState } from "react";

function App() {
  // const items = ["latur", "pune", "mumbai", "Delhi", "Nashik"];
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="city"
    //     onSelectItem={(item) => console.log(item)}
    //   />
    // </div>

    // <div>
    //   <Alert>
    //     <span>Hiiii</span>
    //   </Alert>
    // </div>

    <div>
      {alertVisibility && (
        <Alert onChange={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
        My Buttons
      </Buttons>
    </div>
  );
}

export default App;
