import "./button.css";
const Button = ({ buttonText, onClick, customClass, prefix }) => {
  return (
    <div
      className={`button-wrapper flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
