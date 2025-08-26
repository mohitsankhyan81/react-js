const Greet = (props) => {
  return props.timeofday === "morning" ? (
    <h1>Good Morning!</h1>
  ) : (
    <h1>Good Afternoon!</h1>
  );
};

export default Greet;
