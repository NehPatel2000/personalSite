import { ExperienceType, ExperienceCard } from 'src/components/models';

const experiences: ExperienceCard[] = [
  {
    id: 1,
    title: 'Masters of Science In Computer Science',
    place: 'University of Tennessee Knoxville',
    duration: 'Aug 2023 - May 2024',
    type: ExperienceType.Education,
    description:
      "I'm currently pursuing a Master's in Computer Science at the University of Tennessee, where I'm dedicated to expanding my expertise in machine learning and software engineering. This program is a pivotal step in my journey, enabling me to delve deep into these dynamic fields, explore advanced concepts, and apply them to real-world challenges.",
  },
  {
    id: 2,
    title: 'Bachelor of Science In Computer Science',
    type: ExperienceType.Education,
    place: 'University of Tennessee Knoxville',
    duration: 'Aug 2019 - May 2023',
    description:
      'During my Bachelor\'s degree in Computer Science with a Minor in Cybersecurity at the University of Tennessee, I excelled academically, graduating Summa Cum Laude with a 4.0 GPA. This experience not only honed my technical skills but also exposed me to a diverse range of computer science topics, fostering a deep understanding of core concepts. It was during this time that I earned prestigious awards, including the University of Tennessee Volunteer of Distinction and the Gonzalez Family Award for outstanding achievement in computer science, solidifying my commitment to excellence in the field.',
  },
  {
    id: 3,
    title: 'Software Engineering Intern',
    type: ExperienceType.Work,
    place: 'Garmin',
    duration: 'May 2022 - Present',
    description:
      'As a Software Engineering Intern at Garmin, I continue to drive advancements in the company\'s technology landscape. My role involves revitalizing backend services, where I\'ve successfully implemented modern Java Reactor Core, resulting in a remarkable 40% improvement in response times. I\'ve also introduced new features using Scala and TypeScript, enhancing the precision of avionic map data for critical global regions. Leveraging technologies such as Spring Boot, RabbitMQ, Kubernetes, and Maven, I deploy and manage services that efficiently handle over 3,000 calls per hour. This ongoing experience allows me to continuously refine my technical expertise and collaborate effectively within a professional software development environment',
  },
  {
    id: 4,
    title: 'Undergraduate Research Assistant',
    type: ExperienceType.Work,
    place: 'University of Tennessee, Knoxville',
    duration: 'Nov 2021 - Jul 2022',
    description:
      'As an Undergraduate Research Assistant at the University of Tennessee, I actively contributed to cutting-edge projects that harnessed my technical skills and problem-solving abilities. My primary focus was on visualizing geographic mapping data for the National Park Service, involving the integration of internal UTK APIs with Intel oneApi. Additionally, I developed web-based visualizations using Python, enabling data-driven insights from vast datasets while repurposing substantial raw binary data into operational NetCDF format.',
  },
  {
    id: 5,
    title: 'Teaching Assistant',
    place: 'University of Tennessee Knoxville',
    type: ExperienceType.Work,
    duration: 'Feb 2021 - Dec 2021',
    description:
      'During my time as a Teaching Assistant, I played an essential role in facilitating a dynamic and engaging learning environment. Working closely with both students and instructors, I helped bridge the gap between theory and practice in various computer science courses. This involved assisting with course materials, conducting lab sessions, and providing one-on-one guidance to students facing challenges.',
  },
];

export function getExperiences(): ExperienceCard[] {
  return experiences;
}
