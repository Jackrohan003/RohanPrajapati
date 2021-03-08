import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
  DiMongodb,
  DiGoogleCloudPlatform,
  DiGit,
  
} from "react-icons/di";
import {
  SiCplusplus,
  SiTypescript,
  SiGraphql,
  SiKubernetes,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";
import { FaNodeJs, FaDocker, FaAws, FaFigma } from "react-icons/fa";
import GoIcon from "./goicon";

export default function Techstack() {
  return (
    <div className="pt-10 pb-10 ">
      <div className="text-gray-300 overflow-y-hidden text-3xl lg:text-4xl body-font font-medium pl-7 lg:pl-10">
        Tech I'm familiar with
      </div>
      <div className="pt-3 lg:pt-10 flex flex-wrap pl-2 lg:pl-4 pr-3">
        <DiJava className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiJavascript1 className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiPython className="text-gray-400 text-5xl pl-5 pt-5" />
        <FaNodeJs className="text-gray-400 text-5xl pl-5 pt-5" />
        <DiReact className="text-gray-400 text-5xl pl-5 pt-5" />
        <FaAws className="text-gray-400 text-5xl pl-5 pt-5" />
      
      </div>
    </div>
  );
}
