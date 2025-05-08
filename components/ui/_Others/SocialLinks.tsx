import React from 'react';
import Link from 'next/link';

// Social media icons as SVG components
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    colorClass: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, colorClass }) => (
    <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`
            group flex items-center gap-2 
            ${colorClass} 
            hover:scale-105 transition-all duration-300 
            p-2 rounded-lg 
            hover:bg-opacity-10 
            hover:shadow-md
        `}
    >
        <span className={`
            ${colorClass} 
            group-hover:scale-110 
            transition-transform
        `}>
            {icon}
        </span>
        <span className="hidden md:inline text-sm font-medium">{label}</span>
    </Link>
);

export const SocialLinks: React.FC = () => {
    return (
        <div className="flex justify-center items-center space-x-4 mt-8">
            <SocialLink 
                href="https://facebook.com/wandiko" 
                icon={<FacebookIcon />} 
                label="Facebook" 
                colorClass="text-blue-600 hover:text-blue-800" 
            />
            <SocialLink 
                href="mailto:support@wandiko.com" 
                icon={<EmailIcon />} 
                label="Email" 
                colorClass="text-red-600 hover:text-red-800" 
            />
            <SocialLink 
                href="https://wa.me/+254712345678" 
                icon={<WhatsAppIcon />} 
                label="WhatsApp" 
                colorClass="text-green-600 hover:text-green-800" 
            />
            <SocialLink 
                href="https://linkedin.com/company/wandiko" 
                icon={<LinkedInIcon />} 
                label="LinkedIn" 
                colorClass="text-blue-800 hover:text-blue-900" 
            />
        </div>
    );
};

export default SocialLinks;
