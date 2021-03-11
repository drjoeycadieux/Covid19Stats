import { Message } from "rsuite";

const AlertBanner = () => {
  return (
    <div className="message">
      <Message
        showIcon
        type="warning"
        title="Warning"
        description="This is a warning notice about copywriting."
      />
    </div>
  );
};
export default AlertBanner;
