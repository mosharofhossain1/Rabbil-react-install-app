
import './App.css'

function App() {

  const marks = 85;
  const citys = ['Dhaka', 'Kolkata', 'London', 'Katar', 'Dubai'];
  return (
    <div>
      {
        marks > 80 ? <h1>Brilent Student</h1> : <h1>Average student</h1>
      }
      {
        <ol>
          {citys.map((item, i) => {
            return <li key={i.toString}>{item}</li>
          })}
        </ol>
      }

    </div>
  )
}

export default App
