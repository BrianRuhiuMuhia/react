let data=undefined
if(data===undefined)
{
    if(localStorage.getItem("data"))
    {
        data=JSON.parse(localStorage.getItem("data"))
        console.log(data)
    }
    else{
         fetchFromMovieApi().then((result)=>{
   data=result
        })
    }
   
}
async function fetchFromMovieApi()
{
    const url = 'https://movies-api14.p.rapidapi.com/home';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '685155abd9mshcf702cf1a036246p1bcde8jsnfd58b8d5d7d1',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem("data",JSON.stringify(result))
        return result
    } catch (error) {
        console.error(error);
    }
}
export {data,fetchFromMovieApi}