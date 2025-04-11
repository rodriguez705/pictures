function App() {
  //searchImages('cars')
  const [images, setImages] = useState ([])

  const handleSubmit  = async (term) => {
    console.log ('Ustedesta buscando cars ', term)
    const result = await searchImages (term)
  }
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </>
  )
}

export default App