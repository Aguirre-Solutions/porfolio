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
        highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI', 'Vercel'],
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
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567188/portfolio/Nibble%20Notebook/DailyRecipe/dailyRecipe_w7bea0.gif",
                        description: "In designing this UI, I prioritized clarity and visual appeal. I chose a soothing color palette to invite users into a daily culinary exploration. I decided on an intuitive layout, where the day's featured recipe is presented with accessible action buttons—'Go to Recipe' and 'Share'—to encourage user engagement. I incorporated interactive elements like the favorite icon, which animates upon interaction, to create a satisfying user experience."
                                       
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1699567188/portfolio/Nibble%20Notebook/DailyRecipe/dailyRecipeCode_i2wddi.png",
                        description: "In the useDailyRecipeSelector custom React hook, I designed a function that takes an array of recipes and determines the 'Recipe of the Day' based on the current date. It formats the date into a reader-friendly version and uses it to cycle through the recipe list for a fresh selection every day. If the recipe list is empty, the hook adapts to display a message indicating no available recipe."
                    },
                ],
                technology: "React, Custom React Hooks, Cloudinary, React Router",
                githubLink: "https://github.com/louderthanme/recipes-second-version/tree/main/src/components/Recipe/daily-recipe"
            },
            favouriting: {
                description: "Edit: Users can edit their recipes.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567522/portfolio/Nibble%20Notebook/Favouriting/FavouriteAction_mso7wu.gif",
                        description: "I made favouriting one click away whenever a recipe is in view."
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567517/portfolio/Nibble%20Notebook/Favouriting/FavouriteViewUserProfile_kukgty.png",
                        description: "Favourites show up in the User Profile"
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1699567516/portfolio/Nibble%20Notebook/Favouriting/image1-_favouriteLogicUserContext_x3z1r9.png",
                        description: "The favorite functionality in UserProvider is the cornerstone of personalizing the user experience. It asynchronously updates the user's favorite recipes, allowing them to effortlessly curate their own collection of go-to dishes, and reflects changes in real-time, thanks to Firebase integration."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567517/portfolio/Nibble%20Notebook/Favouriting/image2-favouriteFirebaseLogic_fnkiqr.png",
                        description: "This function utilizes Firebase to update a user's favorite recipes list, checking for uniqueness before appending the new choice, all to create a curated culinary journey. This function is called within the user provider"
                    
                    },
                ],
                technology: "React: State Management, Firestore",
                githubLink: "https://github.com/louderthanme/recipes-second-version/blob/main/src/contexts/user.context.jsx"
            },
            profile: {
                description: "I developed a feature that allows users to manage their own recipes and favorite recipes, enhancing their experience with a personalized dashboard for all CRUD operations.",
                images: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567802/portfolio/Nibble%20Notebook/UserProfile/manageRecipesView_ioxr2h.gif",
                    description: "The User Profile Interface is where you can manage your recipes, delete them, edit them or share them. You can also see your favorite recipes."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568318/portfolio/Nibble%20Notebook/UserProfile/favouriteSection_l2vfur.gif",
                    description: "Search functionality within the profile to quickly add more recipes to your favorites."
                  },
                ],
                codeImages: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567795/portfolio/Nibble%20Notebook/UserProfile/CentralLogicHub_znus2v.png",
                    description: "I made the UserProfile component to act as a central hub for user interactions, integrating React Context for global state management and hooks to manage component lifecycle and state."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567796/portfolio/Nibble%20Notebook/UserProfile/recipesbyuser_pb0oyy.png",
                    description: "I utilized the useEffect hook to fetch user-specific recipes upon user ID changes, which I implemented to ensure real-time data synchronization with the user's actions."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567799/portfolio/Nibble%20Notebook/UserProfile/activeTabLogic_d9rskj.png",
                    description: "I chose a conditional rendering approach for this component, allowing it to display content based on the active tab. This showcases my approach to efficient UI state management. A similar approach is taken to display the delete and edit buttons on the images. Edited for image size, the full code is available in the repository."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699567795/portfolio/Nibble%20Notebook/UserProfile/navigation_zcihet.png",
                    description: "I integrated programmatic navigation using the useNavigate hook from React Router to redirect users to different parts of the app, reflecting my attention to a seamless user journey."
                  },
                ],
                technology: "React, React Hooks, Context API, Material UI, React Router",
                githubLink: "https://github.com/louderthanme/recipes-second-version/blob/main/src/pages/user-profile/user-profile.component.jsx"
            },
            resposiveness: {
                description: "Every single page or view in this app responds to mobile, tablet or desktop sizes.",
                images: [
                    {
                        link:'https://res.cloudinary.com/recipeb00k/image/upload/v1699568841/portfolio/Nibble%20Notebook/Responsiveness/home_page_eygdaf.gif',
                        description: 'Home page'
                    },
                    {
                        link:'https://res.cloudinary.com/recipeb00k/image/upload/v1699568839/portfolio/Nibble%20Notebook/Responsiveness/upload_page_mgyjyx.gif',
                        description: 'Upload/edit page'
                    },
                    {
                        link:'https://res.cloudinary.com/recipeb00k/image/upload/v1699568846/portfolio/Nibble%20Notebook/Responsiveness/user_page_mbbx4i.gif',
                        description: 'User Page'
                    },
                ],
                technology: "React, Material UI, CSS",
            },
            search: {
                description: "Search: Search for recipes using tags or keywords.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568994/portfolio/Nibble%20Notebook/SearchBar/SearchBarInAction_kdiecu.gif",
                        description: "This is the search bar, the placeholder changes to different products as examples. You can search via exact match or keywords."
                    
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568992/portfolio/Nibble%20Notebook/SearchBar/SearchBarDifferentContext_pzw09b.png",
                        description: "It can be used in different parts of the app."
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1699568990/portfolio/Nibble%20Notebook/SearchBar/codeImage1-SearchbarBox_i7lcvt.png",
                        description: "I designed SearchBarBox to engage users with rotating prompts, sparking their appetite for adventure in the kitchen. Every few seconds, a new culinary quest appears, inviting them to explore the endless possibilities of recipes." 
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568991/portfolio/Nibble%20Notebook/SearchBar/codeImage2-searchBarHandleChange_rmcamu.pnge/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "My goal was to keep the UI clutter-free, so I implemented a conditional render that switches between showing trending recipes and the user's search results. It ensures a seamless and focused culinary discovery experience."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568991/portfolio/Nibble%20Notebook/SearchBar/codeImage3-searchBarHandleChange_rmcamu.png",
                        description: "In the handleChange function, I've set up a straightforward search-trigger mechanism. As users type, it begins the hunt for recipes, making the search process intuitive and dynamic."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699568991/portfolio/Nibble%20Notebook/SearchBar/codeImage4-SearchBarResults_xnf9dy.png",
                        description: "With the SearchResults component, I aimed to create a pleasing look. The search yields a tidy grid of recipe cards, each a snapshot and a gateway to a delicious dish, just a click away."
                    },


                ],  
                technology: "React: Context and State, Firestore",
                githubLink: "https://github.com/louderthanme/recipes-second-version/tree/main/src/components/Home/search-bar"
            },
            sharing: {
                description: "Sharing: Users can share recipes on Facebook, WhatsApp, and Twitter.",
                images: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "Sharing Feature in Action"
                    
                    },
                ],
                codeImages: [
                    {
                        link:"https://res.cloudinary.com/recipeb00k/image/upload/v1699569682/portfolio/Nibble%20Notebook/Sharing/SharingHook_p5lcec.png",
                        description:"I designed a custom  hook to control the visibility and placement of a share window popup. With a click the window appears right where the user needs it, enhancing the interactivity of the UI."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1698694402/portfolio/Screenshot_2023-10-30_133158_uf8eax.png",
                        description: "To make useShareWindow work I implemented a React portal to seamlessly render components like modals outside the regular DOM hierarchy. This allows me to place elements exactly where needed on the screen, ensuring a consistent and clean user experience."
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569362/portfolio/Nibble%20Notebook/Sharing/Paper-position_jqzmfi.png",
                        description: "The actual share window implements this ideas by using the coordinates for the positioning of the paper. The sharing process is handlged by the library React-Share"
                    },
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569363/portfolio/Nibble%20Notebook/Sharing/propagationstop_qhtan9.png",
                        description: "This code showcases the integration of a FacebookShareButton with a custom StopPropagationWrapper for seamless social sharing, ensuring click events don't bubble up unexpectedly in the app."
                    },
                ],
                technology: "React, React Hooks, React Portals, React-Share",
                githubLink: "https://github.com/louderthanme/recipes-second-version/blob/main/src/components/ui/share-window/share-window.component.jsx"
            },
            upload: {
                description: "Recipe Upload: Enables users to contribute their own recipes, complete with images, preparation times, ingredients, instructions, and tags for a rich culinary sharing experience. The Edit component functions similarly, allowing users to update their recipes with ease.",
                images: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569838/portfolio/Nibble%20Notebook/Upload/uploadUI_bxvjoo.gif",
                    description: "User Interface for recipe upload, using Material-UI components for a clean and responsive design."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569835/portfolio/Nibble%20Notebook/Upload/EditUI_esrndt.jpg",
                    description: "The Edit interface is the same but it displays information present in the recipe. It's presented here in a smaller viewport for variety."
                  },
                ],
                codeImages: [
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570639/portfolio/Nibble%20Notebook/Upload/State_and_Context_k85irx.png",
                    description: "Utilization of React's useState and useContext hooks for managing the form's state and user authentication."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569835/portfolio/Nibble%20Notebook/Upload/StateContext_j4fzo8.png",
                    description: "The useForm hook from react-hook-form is used to handle form submission, validation, and resetting the form state."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569834/portfolio/Nibble%20Notebook/Upload/useNavigate_jktscy.png",
                    description: "Leveraging the useNavigate hook from React Router for post-submission navigation to the newly created recipe page."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569837/portfolio/Nibble%20Notebook/Upload/SnackbarHookAndUse_o8ysv0.png",
                    description: "Implementation of a Snackbar component for user notifications utilizing a custom useSnackbar hook for enhanced UX."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569836/portfolio/Nibble%20Notebook/Upload/ImageUploadFunctionality_aio3rh.png",
                    description: "Integration of image uploading logic with feedback on progress and error handling for a seamless user experience. Using cloudinary and serverless functions to manage upload."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569837/portfolio/Nibble%20Notebook/Upload/TagHandling_bsnlnh.png",
                    description: "Complex tag input functionality, allowing users to add and remove tags dynamically, enriching the recipe metadata."
                  },
                  {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699569833/portfolio/Nibble%20Notebook/Upload/Modularity_k2uepy.png",
                    description: "All of the code is extracted into reusable forms, re used in the Edit page."
                  }
                ],
                technology: "React, React Hooks, Material-UI, React Router, Cloudinary API",
                githubLink: "https://github.com/louderthanme/recipes-second-version/tree/main/src/pages/recipe-upload"
            },            
            convenience: {
                description: "These are small hooks, or utils that came in handy during coding.",
                codeImages: [
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570741/portfolio/Nibble%20Notebook/Convenience/handleGoogleAuthentication_ampoyn.png",
                        description: "Observing Firebase's interchangeable handling of user sign-ins and registrations, I deliberately employed the handleGoogleAuthentication hook across the SignIn and SignUpForm components. This integration takes advantage of Firebase's backend logic, providing a uniform authentication route for users. My decision underscores a thoughtful design choice that not only streamlines the user's journey but also simplifies the development process by aligning closely with Firebase's inherent functionality."
                    
                    },                    
                    {
                        link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570742/portfolio/Nibble%20Notebook/Convenience/StopPropagationWrapper_q15dmc.png",
                        description: "I've created a handy React component named StopPropagationWrapper to prevent click events from bubbling up the DOM tree. By wrapping elements with this, I ensure that any click event inside is contained, making it super convenient when I need to isolate interactive elements without affecting the surrounding elements."
                    
                    },
                    {
                    link: "https://res.cloudinary.com/recipeb00k/image/upload/v1699570741/portfolio/Nibble%20Notebook/Convenience/snackbarHook_h4hrln.png",
                    description: "I've integrated a custom React hook, useSnackbar, with the Material-UI Snackbar component to streamline displaying notifications in my app. This hook initializes with a default severity state and exposes functions to show and hide the snackbar, which are wired to the MUI Alert's properties. The complete interaction is smooth and efficient, leveraging MUI's polished visual components. For those interested in seeing the full implementation and how it fits into a larger application, the complete code is available in the repository."
                    },                    
                ],
                technology: "Javascript, custom hooks, utils, and more",
            }
        }
  },
  {
    id: 2,
    title: "Clothing Store",
    link: "https://https://hilarious-concha-0e6255.netlify.app",
    githubLink: "https://github.com/louderthanme/recipes-second-version",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1699927325/portfolio/Clothing%20Store/Web_capture_13-11-2023_20125_hilarious-concha-0e6255.netlify.app_yiclaw.jpg",
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
    highlightedTechnologies: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudinary', 'Material UI', 'Netlify'],
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
    title: "YelpCamp",
    link: "http://yelpcamp.com", 
    githubLink: "https://github.com/louderthanme/YelpCamp",
    image: "https://res.cloudinary.com/recipeb00k/image/upload/v1699904373/portfolio/YelpCamp/homepage_umpgz2.jpg", 
    shortDescription: "Yelp for camping enthusiasts! Create and review campgrounds. It features user authentication, campground management, and reviews.",
    description: [
        "YelpCamp is a platform for users to share and discover campgrounds. Users can post campgrounds with details and images, and others can leave reviews.",
        "The application includes user authentication, allowing users to sign up, log in, and manage their campground posts.",
        "Features include creating and editing campgrounds, posting reviews, and user profile management.",
        "Implemented security measures like input validation, authentication, and authorization to ensure a safe user experience.",
        "Responsive design ensures a seamless experience across various devices."
    ],
    technologyStack: [
        "Node.js",
        "Express",
        "MongoDB",
        "Passport.js",
        "EJS",
        "Bootstrap"
    ],
    highlightedTechnologies: ['Node.js', 'Express', 'Cloudinary','MongoDB', 'Passport.js', 'EJS', 'Bootstrap'],
    setup: {
        dependencies: "npm install",
        database: "MongoDB setup required",
        devServer: "nodemon app.js",
        notes: [
            "Ensure to set up the .env file with the required environment variables for database and session configuration."
        ]
    },
    usage: {
        authentication: "User Authentication: Users can sign up and log in using email and password.",
        campgroundManagement: "Campground Management: Authenticated users can create, edit, and delete their campground posts.",
        reviews: "Reviews: Users can post and view reviews on campgrounds.",
        userProfiles: "User Profiles: Users can manage their profiles and view their campground contributions."
    },
    contributions: "This project is open for contributions. Please read the guidelines in the README.md file before contributing.",
    license: "This project is licensed under the ISC license.",
    highlights: {
        authentication: {
            description: "Implemented user authentication using Passport.js, allowing for secure sign-up and login functionalities.",
            images: [
                {
                    link: '',
                    description: ''
                }

            ],
            codeImages: [
                {
                    link: '',
                    description: ''
                }
            ],
            technology: "Passport.js, Express, MongoDB",
            githubLink: "https://github.com/louderthanme/YelpCamp/tree/master/controllers/users.js"
        },
        campgroundManagement: {
            description: "Implemented user authentication using Passport.js, allowing for secure sign-up and login functionalities.",
            images: [
                {
                    link: '',
                    description: ''
                }
            ],
            codeImages: [
                {
                    link: '',
                    description: ''
                }
            ],
            technology: "Passport.js, Express, MongoDB",
            githubLink: "https://github.com/louderthanme/YelpCamp/tree/master/controllers/users.js"
        },
        reviews: {

        },
    }
},
{
    id: 4,
    title: "Recipes 1.0",
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
    title: "Portfolio",
    link: "https://ruben-aguirre.com",
    githubLink: "https://github.com/louderthanme/portfolio",
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