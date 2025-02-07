// https://devicon.dev/ for the icons

import '../../styles/General.css';
import '../../styles/about/About.css';
import '../../styles/about/TechIcons.css'
import Marquee from "react-fast-marquee";
import { SiAdobe, SiAdobeindesign } from "react-icons/si";


const TechIcons = () => {

    return (
        <div className='tech-icons-container new-container'>
            <Marquee speed={30}>
                <i className="devicon-html5-plain-wordmark"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-reactrouter-plain"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-wordpress-plain"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-c-plain-wordmark"></i>
                <i className="devicon-csharp-plain-wordmark"></i>
                <i className="devicon-dot-net-plain"></i>
                <i className="devicon-java-plain"></i>
                <i className="devicon-mongodb-plain"></i>
                <i className="devicon-mysql-original"></i>
                <i className="devicon-postman-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-json-plain"></i>
                <i className="devicon-xml-plain"></i>
                <i className="devicon-git-plain"></i>
                <i className="devicon-github-original"></i>
                <SiAdobe />
                <i className="devicon-photoshop-plain"></i>
                <i className="devicon-illustrator-plain"></i>
                <SiAdobeindesign />
                <i className="devicon-figma-plain"></i>
                <i className="devicon-jest-plain"></i>
                <i className="devicon-androidstudio-plain"></i>
                <i className="devicon-npm-original-wordmark"></i>
                <i className="devicon-pycharm-plain"></i>
                <i className="devicon-vscode-plain"></i>
                <i className="devicon-visualstudio-plain"></i>
                <i className="devicon-eclipse-plain"></i>
                <i className="devicon-powershell-plain"></i>
                <i className="devicon-django-plain"></i>
                <i className="devicon-djangorest-plain-wordmark"></i>
                <i className="devicon-python-plain"></i>
                <i className="devicon-vite-original"></i>
                <i className="devicon-tailwindcss-original"></i>

            </Marquee>
        </div>
    );
};

export default TechIcons;
