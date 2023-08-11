interface ButtonProps {
  name: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button
      className="bg-pink-200 p-2 m-2 border-red-500 border-spacing-7 rounded-2xl cursor-pointer text-center"
      onClick={onClick}
      type="submit"
    >
      {name}
    </button>
  );
};

export default Button;
