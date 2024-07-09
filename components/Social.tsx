import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

type SocialProps = {
    containerStyles?: string;
    iconStyles?: string;
}

type TSocialIcons = {
    icon: React.ReactNode;
    path: string;
}

const socials: TSocialIcons[] = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedinIn />,
        path: ""
    },
    {
        icon: <FaYoutube />,
        path: ""
    },
    {
        icon: <FaTwitter />,
        path: ""
    },
]

const Social = ({ containerStyles, iconStyles } : SocialProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            
            ))}
        </div>
    );
}

export default Social;
