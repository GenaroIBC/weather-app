export function SearchForm({ handleSubmit, inputName }) {
  return (
    <form onSubmit={handleSubmit}>
      <input minLength={3} type="text" name={inputName} />
      <button type="submit">Submit</button>
    </form>
  );
}
