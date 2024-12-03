import { useState } from "react";
import { languages } from "../../assets/data/languages";

export default function () {
  let activeCategory = "HTML";
  let activePost = languages.find(
    (element) => element.title === activeCategory
  );
  const [changedPost, setPost] = useState(activePost);

  return (
    <main className="m-5">
      {languages.map((element) => {
        return (
          <button
            onClick={() => setPost(element)}
            key={element.title}
            className="btn btn-primary me-3"
          >
            {element.title}
          </button>
        );
      })}
      <section>
        <div className="card p-3 mt-3 ">
          <h3>{changedPost.title}</h3>
          <p>{changedPost.description}</p>
        </div>
      </section>
    </main>
  );
}
