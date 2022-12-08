import MessageCard from "../cards/messageCard";

const MessageList = (props) => {
  return (
    <div>
      {props.msg.map((message) => (
        <MessageCard message={message?.msg} type={message?.type}/>
      ))}
    </div>
  );
};
export default MessageList;
