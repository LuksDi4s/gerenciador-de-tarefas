function Input(props) {
  return (
    <input
      className="bortder border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // ele puxa todos os props dos inputs
    />
  );
}

export default Input;
