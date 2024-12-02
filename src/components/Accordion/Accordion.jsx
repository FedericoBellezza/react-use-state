export default function Accordion({ data, isOpen }) {
  let className = "";

  if (isOpen) {
    className = " card p-3 mt-5";
  } else {
    className = " card p-3 mt-5 d-none";
  }

  return (
    <>
      <accordion className={className}>
        <h3 className="fw-bold">{data.title}</h3>
        <p className="m-0">{data.description}</p>
      </accordion>
    </>
  );
}
