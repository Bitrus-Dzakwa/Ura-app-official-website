"use client";

type HorizontalProgressBarProps = {
  progress: number; // Progress value from 0 to 100
};

const HorizontalProgressBar: React.FC<HorizontalProgressBarProps> = ({
  progress,
}) => {
  // Ensure the progress is within the range of 0 to 100
  const normalizedProgress = Math.max(0, Math.min(progress, 100));

  // Determine the color based on the progress value
  let color;
  if (normalizedProgress >= 70) {
    color = "green"; // 70 and above
  } else if (normalizedProgress >= 30) {
    color = "orange"; // 30 to 69
  } else {
    color = "red"; // 0 to 29
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${normalizedProgress}%`,
          backgroundColor: color,
          height: "10px",
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default HorizontalProgressBar;
