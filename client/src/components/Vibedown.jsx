import { useState, useEffect } from "react";
import "./Vibedown.css";

function Vibedown(props) {
  const [vibes, setVibes] = useState([]);
  const archive = props.archive;

  useEffect(() => {
    const vibeOptions = () => {
      const vibes = archive.reduce((acc, media) => {
        const { vibe } = media.fields;
        if (!acc.includes(media.fields.vibe)) {
          acc.push(vibe);
        }
        return acc;
      }, []);
      setVibes(vibes);
    };
    vibeOptions();
  }, [archive]);

  return (
    <div className="vibedown">
      <label htmlFor="vibe"></label>
      <select
        name="vibe"
        type="select"
        value={props.vibe}
        onChange={(e) => props.setVibe(e.target.value)}
        // required
      >
        <option value="">{props.default}</option>
        {vibes.map((vibe, index) => (
          <option key={"vibe" + index} value={vibe}>
            {vibe}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Vibedown;
