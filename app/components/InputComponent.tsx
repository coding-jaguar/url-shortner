import { shortenLink } from "../actions/callapi";
import TextNButton from "./TextNButton";

const InputComponent = async () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-10/12 h-32 bg-shorten-desktop bg-veryDarkViolet bg-cover mt-16 flex flex-col justify-center">
        <TextNButton></TextNButton>
      </div>
    </div>
  );
};

export default InputComponent;
