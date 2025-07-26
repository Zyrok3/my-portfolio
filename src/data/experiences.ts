export interface Experience {
    company: string;
    position: string;
    period: string;
    year: number;
    description: string;
    link: string;
}

export const experiences: Experience[] = [
        {
                company: "Ikarus Security",
                position: "Backend Developer",
                period: "Summer-Intern 2024",
                year: 2024,
                description: "Developed REST APIs in Node.js, improved database performance, and collaborated on security features. Enhanced API documentation, participated in code reviews, and implemented monitoring solutions to ensure system reliability and scalability.",
                link: "https://www.ikarussecurity.com"
        },
        {
                company: "Lean Coders",
                position: "Software-Engineer",
                period: "Summer-Intern 2023",
                year: 2023,
                description: "Built frontend components in React, automated CI/CD pipelines, and contributed to agile team sprints. Optimized user interfaces for responsiveness, integrated third-party APIs, and assisted in troubleshooting production issues to improve overall application stability.",
                link: "http://lean-coders.com/"
        }
];
