export interface SecurityPillar {
  title: string;
  badge: string;
  description: string;
  implementationDetails: string[];
  referenceProject: string;
  referenceSlug: string;
}

export const securityPillars: SecurityPillar[] = [
  {
    title: 'Defensive Web Security Auditing',
    badge: 'OWASP Defensive',
    description: 'Engineering passive, non-destructive scanners to inspect web applications without risking denial-of-service or database disruption.',
    implementationDetails: [
      'Comprehensive inspection of HTTP security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy, COOP, CORP)',
      'TLS handshake inspection: certificate validity, cipher suite parameters, and mixed-content resource detection',
      'Cookie flag validation: auditing presence of HttpOnly, Secure, and SameSite attributes on sensitive tokens',
      'CORS reflection auditing: detecting arbitrary origin reflection with Access-Control-Allow-Credentials: true'
    ],
    referenceProject: 'SecuriScan-AI',
    referenceSlug: 'securiscan-ai'
  },
  {
    title: 'Server-Side Request Forgery (SSRF) Protection',
    badge: 'Network Defense',
    description: 'Designing security tooling that safely handles untrusted user input without exposing internal network infrastructure.',
    implementationDetails: [
      'DNS pre-resolution prior to dispatching any outbound network probes',
      'Strict IP subnet filtering blocking private, reserved, and loopback ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.0/8)',
      'Cloud metadata endpoint shielding (169.254.169.254)',
      'Zero-subprocess execution to eliminate command injection attack vectors'
    ],
    referenceProject: 'SecuriScan-AI',
    referenceSlug: 'securiscan-ai'
  },
  {
    title: 'Cryptographic Mechanics & Key Spaces',
    badge: 'Applied Cryptography',
    description: 'Understanding mathematical byte transformations, key space entropy, and practical cryptographic vulnerabilities.',
    implementationDetails: [
      'Streaming byte transformations using low-memory buffered input/output streams',
      'Modular arithmetic analysis demonstrating why small key spaces (mod 256) are susceptible to brute-force attacks',
      'Understanding frequency analysis vulnerabilities on additive byte ciphers',
      'Recognizing the necessity of AEAD authenticated encryption (e.g. AES-GCM) to prevent ciphertext tampering'
    ],
    referenceProject: 'Encryption System',
    referenceSlug: 'encryption-project'
  },
  {
    title: 'Actionable Multi-Persona Remediation',
    badge: 'Engineering Remediation',
    description: 'Bridging technical vulnerabilities with practical software engineering fixes for immediate resolution.',
    implementationDetails: [
      'Synthesizing production-ready copy-paste configuration blocks for Nginx, Apache, Express.js, Django, and Next.js',
      'Mapping technical findings directly to CWE identifiers and OWASP Top 10 categories',
      'Providing exact verification curl commands to validate remediation success'
    ],
    referenceProject: 'SecuriScan-AI',
    referenceSlug: 'securiscan-ai'
  }
];

export const continuousLearningSecurity = {
  title: 'Hands-on Learning: Hack The Box',
  platform: 'Hack The Box',
  description: 'Active practice across realistic target machines focusing on network enumeration, Linux privilege escalation fundamentals, service misconfigurations, and defensive hardening methodologies.',
  ethicStatement: 'All security practice and tooling development is conducted strictly within authorized learning labs and defensively against self-owned infrastructure.'
};
