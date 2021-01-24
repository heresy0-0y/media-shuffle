import { useState, useEffect } from "react";

function Vibedown(props) {
  const [vibes, setVibes] = useState([]);
  const archive = props.archive;

  useEffect(() => {
    const vibeOptions = () => {
      const vibes = archive
        .reduce((acc, media) => {
          if (!acc.includes(media.fields.vibe)) acc.push(media.fields.vibe);
          return acc;
        }, [])
        .map((vibe) => <option>{vibe}</option>);
      setVibes(vibes);
    };
    vibeOptions();
  }, [archive]);

  return (
    <div>
      <label htmlFor="vibe"> vibe: </label>
      <select
        name="vibe"
        type="select"
        value={props.vibe}
        onChange={(e) => props.setVibe(e.target.value)}
        // required
      >
        <option value=''>select vibe</option>
        {vibes}
      </select>
    </div>
  );
}

export default Vibedown;
