import React from "react";
import ilustration from '../images/undraw_welcome_cats_thqn.svg';
import Form from './contact.form';

export default () => (
    
    <header className="bg-gray-500">
        <div className="container mx-auto p-12 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-green-800 text-6xl">¡Hola! Bienvenidos</h1>
                    <p className="font-light text-xl">Soy Rocio Pepek, Analista en Informatica</p>
                </div>
                <img src={ilustration} alt="Bienvenidos" style={{height:"200px"}}></img>
            </div>
            <div>
                <Form/>
            </div>
        </div>
        
    </header>
    
);