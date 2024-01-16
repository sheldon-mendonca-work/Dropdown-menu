import NewChip from './components/NewChip';
import { ChipsProvider } from './store/chips-context';
import classes from './App.module.css';

function App() {
  
  return (
    <ChipsProvider>
      <div className={classes.info}>
        <h1>Pick Users</h1>
        <h3>Features: </h3>
        <ol>
          <li>Add items by mouse clicking on list item.</li>
          <li>Add items by using "Up", "Down" and "Enter" keys on keyboard.</li>
          <li>Click on "X" in input chips to remove it.</li>
          <li>Check out the <a href='https://github.com/sheldon-mendonca-work/Dropdown-menu' target="_blank" rel="noopener noreferrer">code.</a></li>
        </ol>
      </div>
      <NewChip />
    </ChipsProvider>
  );
}

export default App;
