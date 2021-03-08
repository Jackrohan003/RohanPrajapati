import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="pl-7 pr-5 lg:pl-20 pt-32 flex flex-row space-x-6">
      <a
        className="hover:opacity-50"
        target="_blank"
        href="mailto:jackrohan003@gmail.com"
      >
        <AiFillMail className="text-gray-400 text-3xl" />
      </a>

      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://github.com/Jackrohan003"
      >
        <AiFillGithub className="text-gray-400 text-3xl" />
      </a>

      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://www.linkedin.com/in/jackrohan003/"
      >
        <AiFillLinkedin className="text-gray-400 text-3xl" />
      </a>
      <a
        className="hover:opacity-50"
        target="_blank"
        href="https://www.instagram.com/jackrohan003/"
      >
        <AiFillInstagram className="text-gray-400 text-3xl" />
      </a>
    </div>
  );
}
