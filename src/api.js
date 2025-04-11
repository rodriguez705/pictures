import axios from "axios";

const searchImages = async(term)=>{
    const url='https://api.unsplash.com/search/photos/?client_id=TnElhmZcqccyQynBiQ-RkDN6gDCeYlVb6gzV7oRllb0'
    const response =await axios.get(url, {
        params:{
            query: term
        }
    })
    console.log(response)
    return response.data.results
}
export default searchImages