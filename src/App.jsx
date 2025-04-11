import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pictures Apps</h1>
      <SearchBar/>
      <imageList/>
    </>
  )
}

export default App