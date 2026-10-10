import type { Certification } from '../types';

/**
 * Centralized Certifications Data Store
 * Grounded in verified documents provided by Adarsh Aher.
 */
export const certificationsData: Certification[] = [
  {
    id: 'persevex-ml-cert',
    name: 'Machine Learning Course Completion',
    issuer: 'Persevex',
    issueDate: 'August 11, 2026',
    previewImage: '/certificates/persevex-machine-learning.jpg',
    status: 'Verified',
    tags: ['Machine Learning', 'Applied AI', 'Data Science', 'Python'],
    notes: 'ISO 9001 certified program certifying completion of the Machine Learning curriculum at Persevex with strong commitment and demonstrated competence.'
  },
  {
    id: 'itronix-python-cert',
    name: 'Python Programming Professional Certification',
    issuer: 'Itronix Solutions',
    issueDate: 'August 20, 2025',
    credentialId: 'IS/PY/23/173',
    previewImage: '/certificates/itronix-python.jpg',
    status: 'Verified',
    tags: ['Python', 'Software Engineering', 'Algorithms'],
    notes: 'ISO 9001:2015 certified credential awarded for successfully passing professional Python programming requirements.'
  },
  {
    id: 'aicpe-ms-office-cert',
    name: 'Certificate in MS Office',
    issuer: 'All India Council for Professional Excellence (AICPE)',
    issueDate: 'November 1, 2021',
    credentialId: '21Q68110335277774',
    credentialUrl: 'https://www.aicpeindia.ac.in',
    previewImage: '/certificates/aicpe-ms-office.jpg',
    status: 'Verified',
    tags: ['MS Office', 'Productivity Tools', 'Computer Systems'],
    notes: 'Passed prescribed examination with Grade A (75% Marks) through Jijau Computers and Classes, Nashik (ATC Code: Q681).'
  }
];

export const certificationsSystemInfo = {
  architectureReady: true,
  verifiedCount: certificationsData.length,
  instructions: 'All listed certificates are verified with official certificate IDs, QR codes, or issuing authority registries.'
};
