function ModeToggle({ mode, onModeChange }) {
  const isPersonal = mode === "personal";

  const toggleMode = () => {
    onModeChange(isPersonal ? "professional" : "personal");
  };

  return (
    <div className="mode-toggle">
      <span
  className={
    mode === "professional"
      ? "mode-label professional-label active"
      : "mode-label professional-label"
  }
>
  Professional
</span>

<button
  className={`toggle-switch ${
    isPersonal ? "personal-active" : ""
  }`}
  onClick={toggleMode}
  aria-label="Switch between professional and personal portfolio"
  aria-pressed={isPersonal}
>
  <span className="toggle-knob">
    {isPersonal ? "😛" : ""}
  </span>
</button>

<span
  className={
    mode === "personal"
      ? "mode-label personal-label active"
      : "mode-label personal-label"
  }
>
  Personal
</span>
    </div>
  );
}

export default ModeToggle;