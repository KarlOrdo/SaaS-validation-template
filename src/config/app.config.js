export const appConfig = {
    name: "ValidateFast",
    description: "SaaS validation boilerplate",
    domain: "validatefa.st",
    logoSrc: "/icon.png",


    // Details for Landing page
    landing: {

        // Hero section + CTA texts
        heroTitle: `Validate your SaaS idea in hours, not weeks`,
        heroDescription: "The ultimate starter kit for SaaS founders. Pre-configured auth, database, and a high-converting landing page included.",
        targetedUser: "founders", // e.g. devs / entrepreneurs / content creators
        defaultCTAText: "Validate now!",
        longerCTAText: "Don't waste time on validation. Set up in minutes, validate in hours.", // End of page CTA

        demoSrc: "/demo1.png", //depending on the type of demo (video/gif/interactive/etc.) customize the DemoSection.js file (image by default)
        
        // Social proof
        brandsTitle: "Trusted by",
        brandsLogos: ["/Stripe.jpg", "/GitHub.jpg", "/Google.jpg"],
        usersOpinions: [
            {
                name: "Jack Goh",
                opinion: "It's a game changer. It comes with an easy-to-follow tutorial and saves a ton of time."
            },
            {
                name: "Marc Nadro",
                opinion: "I was able to launch my project in just one day!"
            },
            {
                name: "Matt Hatch",
                opinion: "An amazing minimalist, lightweight boilerplate with well-organized code."
            },
        ],

        // How it works section
        howItWorks: {
            title: "Set up your page in 3 steps",

            step1Title: "Clone the Git repository",
            step1Description: "Download the boilerplate and get instant access to a ready-to-use SaaS foundation.",
            step1Photo: "/step1photo.jpg",

            step2Title: "Configure essentials",
            step2Description: "Add your project details, connect auth and database, and customize the landing page.",
            step2Photo: "/step2photo.jpg",

            step3Title: "Collect users on the waitlist",
            step3Description: "Launch your page and start collecting emails to validate demand for your idea.",
            step3Photo: "/step3photo.jpg",
        },

        // Pricing section
        plans: [
            {
                title: "Starter",
                price: "$9",
                type: "subscription", // If you choose subscription, the price will be $9/month. Use "oneTimePayment" for lifetime access.
                features: [
                    "High-converting landing page",
                    "Waitlist configuration (users who sign up are saved to the database)",
                    "Auth configuration"
                ],
            },
            {
                title: "Combo",
                price: "$15",
                type: "subscription",
                features: [
                    "Everything from Starter",
                    "Access to a similar template with Lemon Squeezy payments set up"
                ],
            },
            // You can add more plans
        ],

        // FAQ section
        faq: [
            {
                question: "How does it work?",
                answer: "You get access to a GitHub repository with instructions on how to set everything up. In a few minutes, you have a ready-to-use site to validate your SaaS idea."
            },
            {
                question: "Do I need to know how to code?",
                answer: "Basic knowledge of JavaScript and modern frameworks is enough to customize and launch the project."
            },
            {
                question: "Can I use this for multiple ideas?",
                answer: "Yes, you can reuse the boilerplate for as many SaaS ideas as you want."
            },
            {
                question: "Does it include a database?",
                answer: "Yes, the boilerplate comes with a pre-configured database setup for storing users and waitlist signups."
            },
            {
                question: "Can I monetize my idea later?",
                answer: "Yes, you can easily extend the project with payments or upgrade to a template that includes billing."
            },
            
        ],
    },
}
