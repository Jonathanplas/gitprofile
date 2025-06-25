
const CONFIG = {
  github: {
    username: 'Jonathanplas', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Jonathanplas/Private_Credit_LP_Mgmt', 'arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display.
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Clinical Psychology Internships AI Data Pipeline',
          description:
            'The Clinical Psychology Internship Database is an AI-powered platform that collects, analyzes, and presents comprehensive information about psychology internship sites through an intuitive web interface, helping doctoral students efficiently search, filter, and compare training opportunities based on location, specialties, and rotation options.',
          imageUrl:
            'https://github.com/Jonathanplas/gitprofile/blob/main/RachelAI.gif?raw=true',
          link: 'https://github.com/Jonathanplas/clinical-psychology-internships/tree/master',
        },
        {
          title: 'LP Management System',
          description:
            'A web-based application for managing and viewing Limited Partner (LP) investments across multiple funds. Built with Python/FastAPI backend and React/TypeScript frontend. Features include financial metric calculations, IRR computations, and data visualization for private equity/credit portfolios.',
          imageUrl:
            'https://github.com/Jonathanplas/gitprofile/blob/main/lp_management_dashboard.png?raw=true',
          link: 'https://github.com/Jonathanplas/Private_Credit_LP_Mgmt',
        },
        {
          title: 'Dorm Room Thermostat Hack',
          description:
            'This dorm-room project utilizes a heating element and a thermistor to regulate room temperature. By adjusting the programmed temperature range, the system triggers the heating element when the room exceeds the desired temperature, fooling the thermostat into activating the AC until the room reaches the set temperature.',
          imageUrl:
            'https://github.com/Jonathanplas/gitprofile/blob/main/IMG_7129.PNG?raw=true',
          link: '',
        },
        {
          title: 'Video Game Treadmill Input',
          description:
            'This project enables a user to control forward movement of a video game character by detecting passes of a magnet attached to a wheel running atop a treadmill',
          imageUrl:
            'https://github.com/Jonathanplas/gitprofile/blob/main/treadmill.gif?raw=true',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jonathan Plas',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/jonathanplas/',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Python',
    'C++',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'SQL',
    'Power BI',
    'AWS',
  ],
  experiences: [
    {
      company: 'Deloitte',
      position: 'Analyst → Consultant - Software Developer',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'deloitte.com',
    },
    {
      company: 'University of Notre Dame, Department of Computer Science',
      position: 'Research Assistant',
      from: 'August 2020',
      to: 'May 2021',
      companyLink: 'nd.edu',
    },
  ],
  certifications: [
    {
      name: 'AWS',
      body: 'Certified Cloud Practitioner',
      year: 'March 2022',
    },
        {
      name: 'Power BI',
      body: 'Microsoft Certified: Power BI Data Analyst Associate',
      year: 'February 2023',
    },
  ],
  educations: [
    {
      institution: 'University of Notre Dame',
      degree: 'Double Major in Science-Computing and Economics',
      from: '2017',
      to: '2021',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
