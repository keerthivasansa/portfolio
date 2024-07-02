import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeCircleCheck,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ContactPage() {
  const links: { icon: IconDefinition; name: string; link: string }[] = [
    {
      name: "Email",
      link: "mailto:keerthivasansa@outlook.com",
      icon: faEnvelopeCircleCheck,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/keerthivasansa",
        icon: faLinkedin
    }
  ];
  return (
    <div className="mt-12 flex flex-col gap-12">
      {links.map((lk) => {
        return (
          <Link href={lk.link} key={lk.name}>
            <FontAwesomeIcon icon={lk.icon} size="2xl" />
            <span className="text-xl font-semibold ml-8">{lk.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default ContactPage;
