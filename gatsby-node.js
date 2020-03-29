///////////////CUANDO SE HACEN CAMBIOS EN ESTE ARCHIVO, HAY QUE REINICIAR EL SERVIDOR//////////////

//Libreria de Node
const path = require('path');

exports.createPages = async ({graphql,actions}) => {

    //el objeto "graphql" nos permite hacer consultas al servidor de Graphql

    const result = await graphql(`
        {
            allEducationJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    result.data.allEducationJson.edges.forEach(element => {
        const {node} = element; //node = element.node

        actions.createPage({
            path: node.slug,
            component: path.resolve("./src/template/education.js"),
            context: {
                slug: node.slug
            }
    
        });

    })
    
}