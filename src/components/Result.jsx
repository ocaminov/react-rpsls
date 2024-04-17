import { options } from "../helpers/utils";
import useChoices from "../hooks/useChoices";
import Button from "./Button";

function Result({userChoice, computerChoice, result, reset}) {
  

  return (
    <>
      {result !== null && (
        <div className="mt-8">
          {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
          {result === 1 && (
            <p className="text-xl mt-4">
              ✅ Has ganado con {options[userChoice]?.name} contra{" "}
              {options[computerChoice]?.name}
            </p>
          )}
          {result === 2 && (
            <p className="text-xl mt-4">
              ❌ Has perdido con {options[userChoice]?.name} contra{" "}
              {options[computerChoice]?.name}
            </p>
          )}
          <Button reset={reset} />
        </div>
      )}
    </>
  );
}

export default Result;
