import { pizzaSizeType } from "../page";

type PizzaButtonProps = {
  pizzaSize: pizzaSizeType;
  size: string;
  label: string;
  onClick: () => void;
};

const PizzaButton = ({ pizzaSize, size, label, onClick }: PizzaButtonProps) => {
  const switchSize = () => {
    onClick();
  };

  return (
    <button
      onClick={switchSize}
      className={`cursor-pointer rounded-full border border-black px-2 py-1 text-sm font-bold duration-200
        ${
          pizzaSize === size &&
          "cursor-default border-red-castle bg-red-castle text-white"
        }
      `}
    >
      {label}
    </button>
  );
};

export default PizzaButton;
