import logo from './logo.svg';
import './App.css';
const styling = {
  backgroundColor: 'blue',
  color: 'white'
}
function App() {
  return (
    <div className="App">
      <badPerson></badPerson>
      <h3>New component</h3>
      <goodPerson></goodPerson>
      <goodPerson></goodPerson>
    </div >
  );
}
/* Creating components */
function BadPerson() {
  return (
    <div>
      <h1>I am Ahnaf</h1>
      <p>My age is 20</p>
    </div>
  )
}
function GoodPerson() {
  return (
    <div>
      <h1>I am Kamrul</h1>
      <p>My age is 25</p>
    </div>
  )
}
export default App;
