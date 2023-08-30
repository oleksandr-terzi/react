import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function ThemeMode({ liftThemeMode }) {
  const [themeMode, setThemeMode] = useState("light");

  const changeThemeMode = (e) => {
    setThemeMode(e.target.value.toLowerCase());
  };

  useEffect(() => {
    liftThemeMode(themeMode);
  }, [themeMode]);

  return (
    <div className="container">
      <span>Choose theme mode:</span>
      <select
        name="themeMode"
        id="themeMode"
        onChange={changeThemeMode}
        value={themeMode}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
