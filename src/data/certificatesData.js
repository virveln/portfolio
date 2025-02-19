
// const typescriptImage = require('../images/certificates/Udemy_Certificate_Understanding_Typescript_Hvirfvel.jpg');
// const unitTestImage = require('../images/certificates/Udemy_Certificate_Unit_Testing_TS_Node_Jest_Hvirfvel.jpg');
// const awsImage = require('../images/certificates/Udemy_Certificate_Introduction_AWS_Hvirfvel.jpg');

import typescriptImage from '../images/certificates/Udemy_Certificate_Understanding_Typescript_Hvirfvel.jpg';
import unitTestImage from '../images/certificates/Udemy_Certificate_Unit_Testing_TS_Node_Jest_Hvirfvel.jpg';
import awsImage from '../images/certificates/Udemy_Certificate_Introduction_AWS_Hvirfvel.jpg';
import fullstackImage from '../images/certificates/Udemy_Certificate_Fullstack_App_Jest_Hvirfvel.jpg';
import kandidatexamenPdf from '../images/certificates/Filosofie-kandidatexamen.pdf';
import kandidatexamenPng from '../images/certificates/Filosofie-kandidatexamenl.png';

const certificateData =[
    {
        id: 1,
        date: "2024-06-26",
        title: "Filosofie kandidatexamen - Informatik",
        provider: "Karlstads universitet",
        link: kandidatexamenPdf,
        image: kandidatexamenPng
    },
    {
        id: 2,
        date: "2025-01-10",
        title: "Understanding TypeScript",
        provider: "Udemy",
        link: "https://www.udemy.com/certificate/UC-47f25b80-de5e-4d07-915d-285bb0976f9c/",
        image: typescriptImage
    },
    {
        id: 3,
        date: "2025-01-17",
        title: "Unit Testing for Typescript & NodeJS Developers with Jest",
        provider: "Udemy",
        link: "https://www.ude.my/UC-669a9159-05b3-4fa1-96d4-20518b6a4c79",
        image: unitTestImage
    },
    {
        id: 4,
        date: "2025-01-24",
        title: "Introduction to Cloud Computing on AWS for Beginners [2025]",
        provider: "Udemy",
        link: "https://ude.my/UC-6d9c4fa0-e71a-434e-b707-7fb69eacda04",
        image: awsImage
    },
    {
        id: 5,
        date: "2025-02-07",
        title: "React  Django Full Stack: web app, backend API, mobile apps",
        provider: "Udemy",
        link: "https://www.ude.my/UC-165e6210-61fc-48a4-9879-472113116f79",
        image: fullstackImage
    }
]

export default certificateData;
