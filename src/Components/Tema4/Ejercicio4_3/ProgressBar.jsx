function ProgressBar({ progress }) {
  return (
    <div style={{ background: "#eee", borderRadius: "5px", overflow: "hidden", margin: "10px 0" }}>
      <div
        style={{
          width: `${progress}%`,
          background: "green",
          color: "white",
          padding: "4px",
          textAlign: "center",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
export default ProgressBar