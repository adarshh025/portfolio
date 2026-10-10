import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const GithubIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetcodeIcon: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.933 5.933 0 0 0 4.288 3.896 5.92 5.92 0 0 0 2.213-.082 5.86 5.86 0 0 0 2.05-.853l3.85-3.897 4.542-4.544a1.446 1.446 0 0 0 .385-.98 1.374 1.374 0 0 0-.4-.968l-3.92-3.921A1.374 1.374 0 0 0 13.483 0zm-.08 2.378 3.398 3.397L13.4 9.176 10.003 5.78zM8.562 7.22 11.96 10.62l-3.397 3.4-3.398-3.4zm10.742 4.14a1.44 1.44 0 0 0-1.025.438l-4.542 4.544-3.85 3.897a3.036 3.036 0 0 1-1.06.442 3.076 3.076 0 0 1-1.15.043 3.08 3.08 0 0 1-2.228-2.025 2.87 2.87 0 0 1-.182-.528 2.872 2.872 0 0 1-.032-1.229 2.736 2.736 0 0 1 .63-1.094l3.854-4.126 3.398 3.4-3.397 3.398 1.439 1.44 3.398-3.4 3.4-3.397 1.44 1.439-4.838 4.839a.25.25 0 0 0 0 .354l.707.707a.25.25 0 0 0 .354 0l5.897-5.897a1.374 1.374 0 0 0 .385-.98 1.374 1.374 0 0 0-.4-.968l-1.04-1.04a1.374 1.374 0 0 0-.968-.427z" />
  </svg>
);
