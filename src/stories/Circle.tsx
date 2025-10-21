interface CircleProps {
  variant: "orange" | "green" | "blue";
}

export default function Circle({variant}: CircleProps) {
  let bgColor = "";
  switch (variant) {
    case "orange":
      bgColor = "bg-orange-500";
      break;
    case "green":
      bgColor = "bg-green-500";
      break;
    case "blue":
      bgColor = "bg-blue-500";
      break;
  }
  return <div className={`${bgColor} w-10 h-10 rounded-full`}></div>;
}
