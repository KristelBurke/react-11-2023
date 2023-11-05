// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className="nupp">Vajuta siia</button>
      <p className="sinine-tekst">Sinine tekst</p>
      <p className="roheline-tekst">Roheline tekst</p>
      <img className="pilt" src="https://wallpapers.com/images/hd/summer-background-zh8tgpq7gl5i3sbq.jpg" alt=""/>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
      <iframe width="600" height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
    </div>
  );
}

export default App;
