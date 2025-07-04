function Rating({ stars }) {
  return (
    <div>
      {"★".repeat(stars)}
      {"☆".repeat(5 - stars)}
    </div>
  );
}
export default Rating