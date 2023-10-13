export const Radio = ({ id, type, checked, handleChange, name, label }) => (
  <div className="switch">
    <input
      id={id}
      type="radio"
      checked={checked}
      className="visually-hidden"
      onChange={handleChange}
      name={name}
    />
    <label htmlFor={id} className="switch-label checkbox-label text-center">
      {label}
    </label>
  </div>
);
