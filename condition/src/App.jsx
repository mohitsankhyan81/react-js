const ValidPass = () => <h1>Valid pass</h1>;
const InvalidPass = () => <h1>Not Valid pass</h1>;

const Passwort = ({ isvalid }) => {
  // if (isvalid) {
  //   return <ValidPass />;
  // } else {
  //   return <InvalidPass />;
  // }

  return isvalid?<ValidPass/>:<InvalidPass/>
};

const App = () => {
  return (
    <div>
      <Passwort isvalid={true} />
    </div>
  );
};

export default App;
