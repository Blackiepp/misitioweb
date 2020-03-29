import React, { useState, useEffect } from 'react';
import Posts from "./posts";
import Post from "./post";

export default () => {
    const [posts, setPosts] = useState([]);
    //El efecto no depende de ningun props ni state, se ejecuta al montar el componente y no en cada actualizacion

    useEffect(() => {
        const data = sessionStorage.getItem("posts");
        let myPosts;

        if(data){
            return setPosts(JSON.parse(data))
        }

        async function getMediumPosts(){
            //Medium de Uriel - CodigoFacilito
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40Uriel_Hedz");

            myPosts = await response.json();

            sessionStorage.setItem("posts", JSON.stringify(myPosts.items)); //Guardo los posts en el storage, se debe pasar json a string

            setPosts(myPosts.items);
        }

        getMediumPosts();
    },[]);

    return(
        <div className="max-w-4xl mx-auto overflow-x-scroll">
            <Posts  
            title="Mis publicaciones en Medium"
            data = {posts} 
            card={Post}/>
        </div>
    );
}