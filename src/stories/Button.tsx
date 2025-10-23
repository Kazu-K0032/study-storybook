interface ButtonProps {
  text: string;
  color: string;
  onClick: (val: string) => void;
}

export default function Button({text, color, onClick}: ButtonProps) {
  const handleClick = () => {
    onClick(text);
  }
  return (
    <button onClick={handleClick} style={{backgroundColor: `${color}`}}>
      {text}
    </button>
  )
}
