interface HistoryInfoProps {
  historyId: number;
}

const HistoryInfo = ({ historyId }: HistoryInfoProps) => {
  return (
    <div>
      <h1>HistoryInfo: {historyId}</h1>
    </div>
  );
};

export default HistoryInfo;
