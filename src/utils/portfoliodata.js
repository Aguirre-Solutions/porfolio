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
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488289/portfolio/Nibble%20Notebook/Authentication/Signin_j9cxr7.png",
                        description: "Sign in page"
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488289/portfolio/Nibble%20Notebook/Authentication/SignUp_nniz6r.png",
                        description: "Sign up page"
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1699488290/portfolio/Nibble%20Notebook/Authentication/CodeAuth_m4i53n.png",
                        description: "Both views are components on the AuthPage page. A simple react state is set to switch between the two views."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699488291/portfolio/Nibble%20Notebook/Authentication/codeSingIn_ofpwr7.png",
                        description: "In the SignIn component, I've implemented a simple sign-in interface using Firebase for authentication, with options for email or Google login. It smartly redirects users after sign-in and provides immediate feedback on input errors. There's also a quick link for new users to switch to SignUp. The SingUp component is very similar."
                    
                    }
                ],
                technology: "React: Context and State, Firebase",
                githubLink: "https://github.com/louderthanme/recipes-second-version/tree/main/src/components/Authentication"
            },
            dailyRecipe: {
                description: "I developed a DailyRecipe component which enhances user engagement by showcasing a daily featured recipe. I integrated the previously mentioned favourite system that allows users to mark recipes as favourites and incorporated a social sharing functionality with a custom hook for a seamless user experience. To improve performance and responsiveness, I also implemented a utility to optimize image loading. This leads users to share it, or save it to their favorites, or even upload their own recipes.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "In designing this UI, I prioritized clarity and visual appeal. I chose a soothing color palette to invite users into a daily culinary exploration. I decided on an intuitive layout, where the day's featured recipe is presented with accessible action buttons—'Go to Recipe' and 'Share'—to encourage user engagement. I incorporated interactive elements like the favorite icon, which animates upon interaction, to create a satisfying user experience."
                                       
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "In the useDailyRecipeSelector custom React hook, I designed a function that takes an array of recipes and determines the 'Recipe of the Day' based on the current date. It formats the date into a reader-friendly version and uses it to cycle through the recipe list for a fresh selection every day. If the recipe list is empty, the hook adapts to display a message indicating no available recipe."
                    },
                ],
                technology: "React, Custom React Hooks, Cloudinary, React Router",
                githubLink: ""
            },
            favouriting: {
                description: "Edit: Users can edit their recipes.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "I made favouriting one click away whenever a recipe is in view."
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Favourites show up in the User Profile"
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "The favorite functionality in UserProvider is the cornerstone of personalizing the user experience. It asynchronously updates the user's favorite recipes, allowing them to effortlessly curate their own collection of go-to dishes, and reflects changes in real-time, thanks to Firebase integration."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "This function utilizes Firebase to update a user's favorite recipes list, checking for uniqueness before appending the new choice, all to create a curated culinary journey."
                    
                    },
                ],
                technology: "React: State Management, Firestore",
                githubLink: ""
            },
            profile: {
                description: "I developed a feature that allows users to manage their own recipes and favorite recipes, enhancing their experience with a personalized dashboard for all CRUD operations.",
                images: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "The User Profile Interface is where you can manage your recipes, delete them, edit them or share them. You can also see your favorite recipes."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Search functionality within the profile to quickly add more recipes to your favorites."
                  },
                ],
                codeImages: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "I made the UserProfile component to act as a central hub for user interactions, integrating React Context for global state management and hooks to manage component lifecycle and state."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "I utilized the useEffect hook to fetch user-specific recipes upon user ID changes, which I implemented to ensure real-time data synchronization with the user's actions."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "I chose a conditional rendering approach for this component, allowing it to display content based on the active tab. This showcases my approach to efficient UI state management. A similar approach is taken to display the delete and edit buttons on the images. Edited for image size, the full code is available in the repository."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "I integrated programmatic navigation using the useNavigate hook from React Router to redirect users to different parts of the app, reflecting my attention to a seamless user journey."
                  },
                ],
                technology: "React, React Hooks, Context API, Material UI, React Router",
                githubLink: "https://github.com/yourusername/your-repo-name"
            },
            resposiveness: {
                description: "Every single page or view in this app responds to mobile, tablet or desktop sizes.",
                images: [
                    {
                        link:'',
                        description: 'Home page'
                    },
                    {
                        link:'',
                        description: 'Upload/edit page'
                    },
                    {
                        link:'',
                        description: ''
                    },
                ],
            },
            search: {
                description: "Search: Search for recipes using tags or keywords.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "This is the search bar, the placeholder changes to different products as examples. You can search via exact match or keywords."
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "It can be used in different parts of the app."
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "I designed SearchBarBox to engage users with rotating prompts, sparking their appetite for adventure in the kitchen. Every few seconds, a new culinary quest appears, inviting them to explore the endless possibilities of recipes." 
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "My goal was to keep the UI clutter-free, so I implemented a conditional render that switches between showing trending recipes and the user's search results. It ensures a seamless and focused culinary discovery experience."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "In the handleChange function, I've set up a straightforward search-trigger mechanism. As users type, it begins the hunt for recipes, making the search process intuitive and dynamic."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "With the SearchResults component, I aimed to create a pleasing look. The search yields a tidy grid of recipe cards, each a snapshot and a gateway to a delicious dish, just a click away."
                    },


                ],  
                technology: "React: Context and State, Firestore",
                githubLink: ""
            },
            sharing: {
                description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Firebase Authentication"
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description:"I designed a custom  hook to control the visibility and placement of a share window popup. With a click the window appears right where the user needs it, enhancing the interactivity of the UI."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "To make useShareWindow work I implemented a React portal to seamlessly render components like modals outside the regular DOM hierarchy. This allows me to place elements exactly where needed on the screen, ensuring a consistent and clean user experience."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "The actual share window implements this ideas by using the coordinates for the positioning of the paper. The sharing process is handlged by the library React-Share"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "This code showcases the integration of a FacebookShareButton with a custom StopPropagationWrapper for seamless social sharing, ensuring click events don't bubble up unexpectedly in the app."
                    },
                ],
                technology: "React, React Hooks, React Portals, React-Share",
                githubLink: ""
            },
            upload: {
                description: "Recipe Upload: Enables users to contribute their own recipes, complete with images, preparation times, ingredients, instructions, and tags for a rich culinary sharing experience. The Edit component functions similarly, allowing users to update their recipes with ease.",
                images: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_ui_xf8eax.png",
                    description: "User Interface for recipe upload, using Material-UI components for a clean and responsive design."
                  },
                ],
                codeImages: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_hooks_xf8eax.png",
                    description: "Utilization of React's useState and useContext hooks for managing the form's state and user authentication."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_form_handling_xf8eax.png",
                    description: "The useForm hook from react-hook-form is used to handle form submission, validation, and resetting the form state."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_navigation_xf8eax.png",
                    description: "Leveraging the useNavigate hook from React Router for post-submission navigation to the newly created recipe page."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_snackbar_xf8eax.png",
                    description: "Implementation of a Snackbar component for user notifications utilizing a custom useSnackbar hook for enhanced UX."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_image_upload_xf8eax.png",
                    description: "Integration of image uploading logic with feedback on progress and error handling for a seamless user experience. Using cloudinary and serverless functions to manage upload."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_tag_management_xf8eax.png",
                    description: "Complex tag input functionality, allowing users to add and remove tags dynamically, enriching the recipe metadata."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/recipe_upload_ingredient_management_xf8eax.png",
                    description: "All of the code is extracted into reusable forms, re used in the Edit page."
                  }
                ],
                technology: "React, React Hooks, Material-UI, React Router, Cloudinary API",
                githubLink: ""
            },            
            convenience: {
                description: "These are small hooks, or utils that came in handy during coding.",
                codeImages: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Observing Firebase's interchangeable handling of user sign-ins and registrations, I deliberately employed the handleGoogleAuthentication hook across the SignIn and SignUpForm components. This integration takes advantage of Firebase's backend logic, providing a uniform authentication route for users. My decision underscores a thoughtful design choice that not only streamlines the user's journey but also simplifies the development process by aligning closely with Firebase's inherent functionality."
                    
                    },                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "I've created a handy React component named StopPropagationWrapper to prevent click events from bubbling up the DOM tree. By wrapping elements with this, I ensure that any click event inside is contained, making it super convenient when I need to isolate interactive elements without affecting the surrounding elements."
                    
                    },
                    {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "I've integrated a custom React hook, useSnackbar, with the Material-UI Snackbar component to streamline displaying notifications in my app. This hook initializes with a default severity state and exposes functions to show and hide the snackbar, which are wired to the MUI Alert's properties. The complete interaction is smooth and efficient, leveraging MUI's polished visual components. For those interested in seeing the full implementation and how it fits into a larger application, the complete code is available in the repository."
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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
            images: [
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
                {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                    description: "Firebase Authentication"
                
                },
            ],
            codeImages: [
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