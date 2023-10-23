import { useEffect } from "react";
import { useState } from "react";

const Main =()=>{

    const [videoData, setVideoData] = useState();


    const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b40207ed57msh5b1111125dadd92p169be0jsn29e821f237fb',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(url, options)
        .then(response => response.json())
        .then(response => setVideoData(response.items))
        .catch(err => console.error(err));
    }, [])
    
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }



    return(
        <>

            <main className="container mx-auto pl-60 pr-16 bg-gray-500">

                <div>

                </div>
            </main>
        </>
    )
}
export default Main