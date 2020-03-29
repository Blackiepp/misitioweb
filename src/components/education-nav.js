import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default (props) =>{
    //consultas con graphql

    const data = useStaticQuery(graphql` 
        {
            allEducationJson{
                edges{
                    node{
                        slug
                        title
                        description
                    }
                }
            }
        }
    `)

    //devolvemos la navegacion
    return (
        <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center">Conoce sobre mi formacion educativa</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allEducationJson.edges.map((element,index) =>{
                        const {node} = element;
                        return(
                            <article className="flex-1 bg-white shadow mt-4 max-w-sm p-4">
                                <header>
                                    <p className="font-bold leading-loose">{node.title}</p>
                                    <div className="mt-8">
                                        <p className="font-light">{node.description}</p>
                                        <Link to={`/${node.slug}`} className="btn inline-block mt-4">
                                            Ir
                                        </Link>
                                    </div>
                                </header>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    );

}