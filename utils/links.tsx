import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "https://flowcv.com/resume/r8p9dbnsrn" },
  // { name: "About", href: "/about" },
  // { name: "Home", href: "/" },
];

export const socialLinks = {
  github: "https://github.com/eakelvin",
  linkedin: "https://www.linkedin.com/in/kelvin-akaba/",
  email: "mailto:akabakelvin@gmail.com",
};

export const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/kelvin-akaba/",
    label: "LinkedIn",
    handle: "Kelvin Akaba",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:akabakelvin@gmail.com",
    label: "Email",
    handle: "akabakelvin@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/eakelvin",
    label: "Github",
    handle: "eakelvin",
  },
];