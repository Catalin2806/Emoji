import React from "react";
import Event from "./Event";
import emojipedia from "../emojipedia";

function Emoji(emojipedia){
return <Event
key={emojipedia.id}
emoji={emojipedia.emoji}
name={emojipedia.name}
meaning={emojipedia.meaning} />
}

export default Emoji;