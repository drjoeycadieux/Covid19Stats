import { Message } from "rsuite";

const AlertBanner = () => {
  return (
    <div className="message">
      <Message
        showIcon
        type="warning"
        title="Warning"
        description="The Covid-19 Tracker is under development.. & we also doing some test so its possible that you see change at any time."
      />
    </div>
  );
};
export default AlertBanner;
