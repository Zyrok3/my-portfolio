export interface ToolkitItem {
  name: string;
  icon: string; // path to SVG image
}

export const toolkit: ToolkitItem[] = [
  { name: 'Java',          icon: '/icons/java.svg' },
  { name: 'Python',        icon: '/icons/python.svg' },
  { name: 'HTML5',         icon: '/icons/html5.svg' },
  { name: 'CSS3',          icon: '/icons/css3.svg' },
  { name: 'JavaScript',    icon: '/icons/javascript.svg' },
  { name: 'TypeScript',    icon: '/icons/typescript.svg' },
  { name: 'React',         icon: '/icons/react.svg' },
  { name: 'Tailwind-CSS',  icon: '/icons/tailwindcss.svg' },
  { name: 'Django',        icon: '/icons/django.svg' },
  { name: 'Docker',        icon: '/icons/docker.svg' },
  { name: 'GitHub',        icon: '/icons/github.svg' },
  { name: 'Bash/Shell',    icon: '/icons/bash.svg' },
  { name: 'Vercel',        icon: '/icons/vercel.svg' },
  { name: 'Flutter',       icon: '/icons/flutter.svg' },
  { name: 'Jira',          icon: '/icons/jira.svg' },
  { name: 'Notion',        icon: '/icons/notion.svg' },
];