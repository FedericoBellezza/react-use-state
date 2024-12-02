import { languages } from "../../assets/data/languages";
import Button from "./Button/Button";
import Accordion from "../Accordion/Accordion";

export default function () {
  return (
    <main className="m-5">
      {languages.map((element) => {
        return <Button data={element} />;
      })}
      {languages.map((element) => {
        return <Accordion data={element} isOpen={false} />;
      })}
    </main>
  );
}
