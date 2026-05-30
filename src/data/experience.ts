export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  active: boolean;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: 'huaman',
    role: 'Software Engineer Intern (Year 2)',
    company: 'Humana',
    period: '2024 – Present',
    active: true,
    description:
      'Building data pipelines and internal tooling on Databricks and Azure for production workflows that touch real customer data. Developed REST API integrations and contributed to full-stack web features across the customer-facing platform.',
    tags: ['Databricks', 'Azure', 'REST API', 'Web Dev', 'Python'],
  },
  {
    id: 'biosensors-lab',
    role: 'Research Engineer',
    company: 'UIUC Biosensors Lab',
    period: '2024 – Present',
    active: true,
    description:
      'Developing low-level camera firmware for the GSENSE imaging system used in intraoperative cancer-cell detection. Work spans embedded control, frame acquisition pipelines, and real-time image processing to support surgeons with live fluorescence data.',
    tags: ['Firmware', 'C++', 'Embedded', 'Computer Vision', 'GSENSE'],
  },
];
