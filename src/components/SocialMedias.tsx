import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialMediasProps {
  instagram: string;
  linkedin: string;
  github: string;
}

export function SocialMedias({ instagram, linkedin, github }: SocialMediasProps) {
  return (
    <div className='p-5 max-w-sm flex gap-4 justify-end'>
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={32} color="#FFFFFF" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} color="#FFFFFF" />
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} color="#FFFFFF" />
      </a>
    </div>
  );
}
