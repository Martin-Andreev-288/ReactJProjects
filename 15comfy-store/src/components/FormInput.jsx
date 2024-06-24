/* zapochvame form input-a. Vzehme gotov ot daisyui.com. Napisahme input v tyrsachkata,
vzehme edin gotov, no i go promenihme (t.e. ne e tochno syshtiq). */
const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};
export default FormInput;
