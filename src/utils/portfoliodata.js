export const projectsData = [ 
    {
        id: 1,
        title: "Nibble Notebook",
        link: "https://nibblenotebook.com",
        githubLink: "https://github.com/louderthanme/recipes-second-version",
        image: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
        shortDescription: "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
        description: [
        "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
        "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
        "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
        "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
        "A search function is available, allowing users to search recipes by tags or keywords."
        ],
        technologyStack: [
        "React",
        "Vite",
        "Firebase (for authentication and database)",
        "Cloudinary (for image uploads)",
        "Express (for the development server)",
        "Serverless functions (for deployment)"
        ],
        highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI'],
        setup: {
        dependencies: "yarn install",
        devServer: "yarn start-server",
        frontend: "yarn dev",
        liveBuild: "yarn start",
        notes: [
            "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required."
        ]
        },
        usage: {
        authentication: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
        profile: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
        dailyRecipe: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
        sharing: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
        search: "Search: Search for recipes using tags or keywords."
        },
        contributions: "This project is not open for contributions as it's intended for portfolio purposes.",
        license: "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
        highlights: {
            authentication: {
                description: "In creating the `AuthPage` component, I designed a user-friendly interface for both signing in and signing up. I made the decision to manage the display with a simple toggle state, allowing users to switch views with ease.  I chose a centered layout for a clean and focused user experience, with the forms adapting dynamically to the user's needs. The snackbar messages are set to appear at the top of the page, ensuring they are noticeable yet unobtrusive. I leveraged ",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Sign in page"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Sign up page"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Both views are components on the AuthPage page. A simple react state is set to switch between the two views."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "In the SignIn component, I've implemented a simple sign-in interface using Firebase for authentication, with options for email or Google login. It smartly redirects users after sign-in and provides immediate feedback on input errors. There's also a quick link for new users to switch to SignUp. The SingUp component is very similar."
                    
                    },
                ],
                technology: "React: Context and State, Firebase",
                githubLink: ""
            },
            search: {
                description: "Search: Search for recipes using tags or keywords.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],                technology: "React: Context and State, Firestore",
                githubLink: ""
            },
            sharing: {
                description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                technology: "Social Media APIs",
                githubLink: ""
            },
            dailyRecipe: {
                description: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                technology: "React: Carousel Components, Firebase",
                githubLink: ""
            },
            profile: {
                description: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                technology: "React: Private Routes, Firebase Auth",
                githubLink: ""
            },
            upload: {
                description: "Upload: Users can upload recipes with images, instructions, ingredients, and more.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                technology: "React: Forms and Validation, Firebase Storage",
                githubLink: ""
            },
            edit: {
                description: "Edit: Users can edit their recipes.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                technology: "React: State Management, Firestore",
                githubLink: ""
            },
            convenience: {
                description: "These are small hooks, or utils that came in handy during coding.",
                image: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImage: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                technology: "Javascript, custom hooks, utils, and more",
                githubLink: ""
            }
        }
  },
  {
    id: 2,
    title: "Nibble Notebook",
    link: "https://nibblenotebook.com",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
    shortDescription: "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    description: [
    "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
    "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
    "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
    "A search function is available, allowing users to search recipes by tags or keywords."
    ],
    technologyStack: [
    "React",
    "Vite",
    "Firebase (for authentication and database)",
    "Cloudinary (for image uploads)",
    "Express (for the development server)",
    "Serverless functions (for deployment)"
    ],
    highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI'],
    setup: {
    dependencies: "yarn install",
    devServer: "yarn start-server",
    frontend: "yarn dev",
    liveBuild: "yarn start",
    notes: [
        "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required."
    ]
    },
    usage: {
    authentication: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
    profile: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
    dailyRecipe: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
    sharing: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
    search: "Search: Search for recipes using tags or keywords."
    },
    contributions: "This project is not open for contributions as it's intended for portfolio purposes.",
    license: "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
    highlights: {
        authentication: {
            description: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Context and State, Firebase",
            githubLink: ""
        },
        search: {
            description: "Search: Search for recipes using tags or keywords.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],                technology: "React: Context and State, Firestore",
            githubLink: ""
        },
        sharing: {
            description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Social Media APIs",
            githubLink: ""
        },
        dailyRecipe: {
            description: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Carousel Components, Firebase",
            githubLink: ""
        },
        profile: {
            description: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Private Routes, Firebase Auth",
            githubLink: ""
        },
        upload: {
            description: "Upload: Users can upload recipes with images, instructions, ingredients, and more.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Forms and Validation, Firebase Storage",
            githubLink: ""
        },
        edit: {
            description: "Edit: Users can edit their recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: State Management, Firestore",
            githubLink: ""
        },
        convenience: {
            description: "These are small hooks, or utils that came in handy during coding.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Javascript, custom hooks, utils, and more",
            githubLink: ""
        }
    }
},
{
    id: 3,
    title: "Nibble Notebook",
    link: "https://nibblenotebook.com",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
    shortDescription: "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    description: [
    "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
    "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
    "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
    "A search function is available, allowing users to search recipes by tags or keywords."
    ],
    technologyStack: [
    "React",
    "Vite",
    "Firebase (for authentication and database)",
    "Cloudinary (for image uploads)",
    "Express (for the development server)",
    "Serverless functions (for deployment)"
    ],
    highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI'],
    setup: {
    dependencies: "yarn install",
    devServer: "yarn start-server",
    frontend: "yarn dev",
    liveBuild: "yarn start",
    notes: [
        "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required."
    ]
    },
    usage: {
    authentication: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
    profile: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
    dailyRecipe: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
    sharing: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
    search: "Search: Search for recipes using tags or keywords."
    },
    contributions: "This project is not open for contributions as it's intended for portfolio purposes.",
    license: "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
    highlights: {
        authentication: {
            description: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Context and State, Firebase",
            githubLink: ""
        },
        search: {
            description: "Search: Search for recipes using tags or keywords.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],                technology: "React: Context and State, Firestore",
            githubLink: ""
        },
        sharing: {
            description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Social Media APIs",
            githubLink: ""
        },
        dailyRecipe: {
            description: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Carousel Components, Firebase",
            githubLink: ""
        },
        profile: {
            description: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Private Routes, Firebase Auth",
            githubLink: ""
        },
        upload: {
            description: "Upload: Users can upload recipes with images, instructions, ingredients, and more.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Forms and Validation, Firebase Storage",
            githubLink: ""
        },
        edit: {
            description: "Edit: Users can edit their recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: State Management, Firestore",
            githubLink: ""
        },
        convenience: {
            description: "These are small hooks, or utils that came in handy during coding.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Javascript, custom hooks, utils, and more",
            githubLink: ""
        }
    }
},
{
    id: 4,
    title: "Nibble Notebook",
    link: "https://nibblenotebook.com",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
    shortDescription: "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    description: [
    "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
    "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
    "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
    "A search function is available, allowing users to search recipes by tags or keywords."
    ],
    technologyStack: [
    "React",
    "Vite",
    "Firebase (for authentication and database)",
    "Cloudinary (for image uploads)",
    "Express (for the development server)",
    "Serverless functions (for deployment)"
    ],
    highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI'],
    setup: {
    dependencies: "yarn install",
    devServer: "yarn start-server",
    frontend: "yarn dev",
    liveBuild: "yarn start",
    notes: [
        "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required."
    ]
    },
    usage: {
    authentication: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
    profile: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
    dailyRecipe: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
    sharing: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
    search: "Search: Search for recipes using tags or keywords."
    },
    contributions: "This project is not open for contributions as it's intended for portfolio purposes.",
    license: "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
    highlights: {
        authentication: {
            description: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Context and State, Firebase",
            githubLink: ""
        },
        search: {
            description: "Search: Search for recipes using tags or keywords.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],                technology: "React: Context and State, Firestore",
            githubLink: ""
        },
        sharing: {
            description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Social Media APIs",
            githubLink: ""
        },
        dailyRecipe: {
            description: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Carousel Components, Firebase",
            githubLink: ""
        },
        profile: {
            description: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Private Routes, Firebase Auth",
            githubLink: ""
        },
        upload: {
            description: "Upload: Users can upload recipes with images, instructions, ingredients, and more.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Forms and Validation, Firebase Storage",
            githubLink: ""
        },
        edit: {
            description: "Edit: Users can edit their recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: State Management, Firestore",
            githubLink: ""
        },
        convenience: {
            description: "These are small hooks, or utils that came in handy during coding.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Javascript, custom hooks, utils, and more",
            githubLink: ""
        }
    }
},
{
    id: 5,
    title: "Nibble Notebook",
    link: "https://nibblenotebook.com",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
    shortDescription: "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    description: [
    "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
    "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
    "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
    "A search function is available, allowing users to search recipes by tags or keywords."
    ],
    technologyStack: [
    "React",
    "Vite",
    "Firebase (for authentication and database)",
    "Cloudinary (for image uploads)",
    "Express (for the development server)",
    "Serverless functions (for deployment)"
    ],
    highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI'],
    setup: {
    dependencies: "yarn install",
    devServer: "yarn start-server",
    frontend: "yarn dev",
    liveBuild: "yarn start",
    notes: [
        "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required."
    ]
    },
    usage: {
    authentication: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
    profile: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
    dailyRecipe: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
    sharing: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
    search: "Search: Search for recipes using tags or keywords."
    },
    contributions: "This project is not open for contributions as it's intended for portfolio purposes.",
    license: "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
    highlights: {
        authentication: {
            description: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Context and State, Firebase",
            githubLink: ""
        },
        search: {
            description: "Search: Search for recipes using tags or keywords.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],                technology: "React: Context and State, Firestore",
            githubLink: ""
        },
        sharing: {
            description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Social Media APIs",
            githubLink: ""
        },
        dailyRecipe: {
            description: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Carousel Components, Firebase",
            githubLink: ""
        },
        profile: {
            description: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Private Routes, Firebase Auth",
            githubLink: ""
        },
        upload: {
            description: "Upload: Users can upload recipes with images, instructions, ingredients, and more.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Forms and Validation, Firebase Storage",
            githubLink: ""
        },
        edit: {
            description: "Edit: Users can edit their recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: State Management, Firestore",
            githubLink: ""
        },
        convenience: {
            description: "These are small hooks, or utils that came in handy during coding.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Javascript, custom hooks, utils, and more",
            githubLink: ""
        }
    }
},
{
    id: 6,
    title: "Nibble Notebook",
    link: "https://nibblenotebook.com",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
    shortDescription: "This application allows users to upload, manage and recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    description: [
    "This application allows users to upload and manage recipes. Users can add images, instructions, ingredients, and more to their recipes.",
    "The application supports user authentication via email/password and Google authentication. Once authenticated, users can view their profile, showcasing all the recipes they've uploaded or saved to their favorites.",
    "The app also features a daily recipe and a carousel of featured recipes. Each recipe showcase includes images and ingredients for quick reference.",
    "Additionally, users can share recipes on Facebook, WhatsApp, and Twitter.",
    "A search function is available, allowing users to search recipes by tags or keywords."
    ],
    technologyStack: [
    "React",
    "Vite",
    "Firebase (for authentication and database)",
    "Cloudinary (for image uploads)",
    "Express (for the development server)",
    "Serverless functions (for deployment)"
    ],
    highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI'],
    setup: {
    dependencies: "yarn install",
    devServer: "yarn start-server",
    frontend: "yarn dev",
    liveBuild: "yarn start",
    notes: [
        "Firebase and Cloudinary are already set up for use. This repository is intended for portfolio purposes, so no additional setup for Firebase or Cloudinary is required."
    ]
    },
    usage: {
    authentication: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
    profile: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
    dailyRecipe: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
    sharing: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
    search: "Search: Search for recipes using tags or keywords."
    },
    contributions: "This project is not open for contributions as it's intended for portfolio purposes.",
    license: "This project is for educational and portfolio purposes. Please ensure to give credit if you use any part of the code or design.",
    highlights: {
        authentication: {
            description: "User Authentication: Users can sign up and log in using email/password or Google authentication.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Context and State, Firebase",
            githubLink: ""
        },
        search: {
            description: "Search: Search for recipes using tags or keywords.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],                technology: "React: Context and State, Firestore",
            githubLink: ""
        },
        sharing: {
            description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Social Media APIs",
            githubLink: ""
        },
        dailyRecipe: {
            description: "Daily Recipe & Featured Carousel: The app showcases a daily recipe and a carousel of featured recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Carousel Components, Firebase",
            githubLink: ""
        },
        profile: {
            description: "Profile: Authenticated users can view their profile to see all their uploaded recipes and favorites.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Private Routes, Firebase Auth",
            githubLink: ""
        },
        upload: {
            description: "Upload: Users can upload recipes with images, instructions, ingredients, and more.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: Forms and Validation, Firebase Storage",
            githubLink: ""
        },
        edit: {
            description: "Edit: Users can edit their recipes.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "React: State Management, Firestore",
            githubLink: ""
        },
        convenience: {
            description: "These are small hooks, or utils that came in handy during coding.",
            image: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImage: [
                {
                    link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            technology: "Javascript, custom hooks, utils, and more",
            githubLink: ""
        }
    }
}]