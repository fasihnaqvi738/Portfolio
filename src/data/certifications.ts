export type Certification = {
  title: string
  issuer: string
  kind: 'course' | 'academic' | 'skills'
  kindLabel: string
  url: string
}

// Ordered top-to-bottom as the reverse of the user's down-to-up list.
export const certifications: Certification[] = [
  { title: 'Software Engineer Certificate', issuer: 'HackerRank', kind: 'skills', kindLabel: 'Role Certificate', url: 'https://www.hackerrank.com/certificates/7d7d03a60b15' },
  { title: 'SQL (Advanced)', issuer: 'HackerRank', kind: 'skills', kindLabel: 'Skill Certificate', url: 'https://www.hackerrank.com/certificates/9e878b488a71' },
  { title: 'Minor in Economics and Finance', issuer: 'IIT Madras', kind: 'academic', kindLabel: 'Academic Minor', url: 'https://drive.google.com/file/d/1BrS9bpH7R5RLZUhN90_XyuotHMLIVtwc/view' },
  { title: 'Minor in Computer Systems', issuer: 'IIT Madras', kind: 'academic', kindLabel: 'Academic Minor', url: 'https://drive.google.com/file/d/1lVAB75i3-c326OOljxPIiwSMPr46V868/view' },
  { title: 'Game Theory', issuer: 'Stanford Online & The University of British Columbia', kind: 'course', kindLabel: 'Course Certificate', url: 'https://www.coursera.org/account/accomplishments/verify/VRYQ7JE426GC' },
  { title: 'SQL (Intermediate)', issuer: 'HackerRank', kind: 'skills', kindLabel: 'Skill Certificate', url: 'https://www.hackerrank.com/certificates/4e780f92b949' },
  { title: 'Machine Learning with Python', issuer: 'IBM', kind: 'course', kindLabel: 'Course Certificate', url: 'https://www.coursera.org/account/accomplishments/verify/2L5RRQUB9P5X' },
  { title: 'Data Analysis with Python', issuer: 'IBM', kind: 'course', kindLabel: 'Course Certificate', url: 'https://www.coursera.org/account/accomplishments/verify/D8USP994KKS5' },
]
