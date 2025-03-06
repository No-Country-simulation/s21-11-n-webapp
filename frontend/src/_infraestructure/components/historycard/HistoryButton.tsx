import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import HistoryInfo from "./HistoryInfo";

interface HistoryButtonProps {
  historyId: number;
}

const HistoryButton = ({ historyId }: HistoryButtonProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);
  return (
    <>
      <Button label="ver mas" size="small" text onClick={toggleVisible} />
      <Dialog draggable={false} visible={visible} onHide={toggleVisible}>
        <HistoryInfo historyId={historyId} />
      </Dialog>
    </>
  );
};

export default HistoryButton;
