import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";
import Event from "./Event";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
{emojipedia.map(Emoji)}
</dl>
    </div>
  );
}

export default App;
