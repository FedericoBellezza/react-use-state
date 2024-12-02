export default function Accordion({ data }) {
  return (
    <>
      <div className="card p-3 mt-5">
        <h3 className="fw-bold">{data.title}</h3>
        <p className="m-0">{data.description}</p>
      </div>
    </>
  );
}
