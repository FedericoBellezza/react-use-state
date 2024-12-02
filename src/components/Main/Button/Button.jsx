export default function ({ data }) {
  return (
    <button onClick={() => open(data)} className="btn btn-primary m-3">
      {data.title}
    </button>
  );
}
