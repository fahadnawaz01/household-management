import Card from "react-bootstrap/Card";
const MessageCard = (props) => {
  let content = "";
  if (props.type === "left") {
    content = (
      <div
        style={{
          position: "relative",
          right: "-10px",
          border: "2px solid black",
          height: "max-content",
          width: "max-content",
          backgroundColor: "#9fe2bf",
          color: "#e27d60",
        }}
      >
        <p>{props.message}</p>
      </div>
    );
  } else if (props.type === "right") {
    content = (
      <div
        style={{
          position: "relative",
          right: "-95%",
          border: "2px solid black",
          height: "max-content",
          width: "max-content",
          backgroundColor: "#9fe2bf",
          color: "#e27d60",
        }}
      >
        <p>{props.message}</p>
      </div>
    );
  }
  console.log(props.message);
  return (
    <div
      style={{
        backgroundColor: "#e27d60",
      }}
    >
      {content} <br></br>
    </div>
  );
};
export default MessageCard;
