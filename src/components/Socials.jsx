import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Socials.css";

export default function () {
  return (
    <span className="social-icons">
      <a
        href="https://www.linkedin.com/in/muhammad-abdullah-usman-db3084/"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a href="https://www.instagram.com/codewith.abdullah/" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://github.com/AbdullahUsman-3824/" target="_blank">
        <GitHubIcon />
      </a>
    </span>
  );
}
