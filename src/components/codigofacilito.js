import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Posts from "./posts";
import Certificate from "./certificate";
import Course from "./course";

export default () => {

    //Consulta de graphql
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
                certificates {
                    score
                    title
                    code
                }
                courses {
                    progress
                    title
                    url
                }
            }
        }
    }`) //hook

    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">

                    <Posts  
                    title="Mis certificados online en Codigo Facilito"
                    data = {data.codigofacilitoJson.data.certificates} 
                    card={Certificate}/>

                    <Posts  
                    title="Mis cursos Facilito" 
                    data = {data.codigofacilitoJson.data.courses}
                    card={Course}/>
                   
                </div>
                
            </div>
        </section>
    );
}