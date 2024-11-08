exports.id=6,exports.ids=[6],exports.modules={9820:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},2986:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,9404,23)),Promise.resolve().then(o.bind(o,4057)),Promise.resolve().then(o.bind(o,5909)),Promise.resolve().then(o.bind(o,1062)),Promise.resolve().then(o.bind(o,8062)),Promise.resolve().then(o.bind(o,2631))},4057:(e,t,o)=>{"use strict";o.d(t,{Dock:()=>h,DockIcon:()=>f});var r=o(326),n=o(1223),s=o(8671),a=o(3519),i=o(3145),l=o(7290),c=o(2877),d=o(7577),u=o.n(d);let m=60,p=140,g=(0,s.j)("mx-auto w-max h-full p-2 flex items-end rounded-full border"),h=u().forwardRef(({className:e,children:t,magnification:o=m,distance:s=p,...l},c)=>{let d=(0,a.c)(1/0);return r.jsx(i.E.div,{ref:c,onMouseMove:e=>d.set(e.pageX),onMouseLeave:()=>d.set(1/0),...l,className:(0,n.cn)(g({className:e})),children:u().Children.map(t,e=>u().isValidElement(e)?u().cloneElement(e,{mousex:d,magnification:o,distance:s}):e)})});h.displayName="Dock";let f=({size:e,magnification:t=m,distance:o=p,mousex:s,className:a,children:u,...g})=>{let h=(0,d.useRef)(null),f=(0,l.H)(s,e=>{let t=h.current?.getBoundingClientRect()??{x:0,width:0};return e-t.x-t.width/2}),x=(0,l.H)(f,[-o,0,o],[40,t,40]),b=(0,c.q)(x,{mass:.1,stiffness:150,damping:12});return r.jsx(i.E.div,{ref:h,style:{width:b},className:(0,n.cn)("flex aspect-square cursor-pointer items-center justify-center rounded-full",a),...g,children:u})};f.displayName="DockIcon"},5909:(e,t,o)=>{"use strict";o.d(t,{ModeToggle:()=>m});var r=o(326),n=o(4214),s=o(8671),a=o(7577),i=o(1223);let l=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef(({className:e,variant:t,size:o,asChild:s=!1,...a},c)=>{let d=s?n.g7:"button";return r.jsx(d,{className:(0,i.cn)(l({variant:t,size:o,className:e})),ref:c,...a})});c.displayName="Button";var d=o(6812),u=o(4831);function m(){let{theme:e,setTheme:t}=(0,u.F)();return(0,r.jsxs)(c,{variant:"ghost",type:"button",size:"icon",className:"px-2",onClick:()=>t("dark"===e?"light":"dark"),children:[r.jsx(d.NWY,{className:"h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200"}),r.jsx(d.kLh,{className:"hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200"})]})}},1062:(e,t,o)=>{"use strict";o.d(t,{ThemeProvider:()=>s});var r=o(326),n=o(4831);function s({children:e,...t}){return r.jsx(n.f,{...t,children:e})}},8062:(e,t,o)=>{"use strict";o.d(t,{Separator:()=>i});var r=o(326),n=o(7577),s=o(220),a=o(1223);let i=n.forwardRef(({className:e,orientation:t="horizontal",decorative:o=!0,...n},i)=>r.jsx(s.f,{ref:i,decorative:o,orientation:t,className:(0,a.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...n}));i.displayName=s.f.displayName},2631:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Tooltip:()=>l,TooltipContent:()=>d,TooltipProvider:()=>i,TooltipTrigger:()=>c});var r=o(326),n=o(8568),s=o(7577),a=o(1223);let i=n.zt,l=n.fC,c=n.xz,d=s.forwardRef(({className:e,sideOffset:t=4,...o},s)=>r.jsx(n.VY,{ref:s,sideOffset:t,className:(0,a.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));d.displayName=n.VY.displayName},1223:(e,t,o)=>{"use strict";o.d(t,{cn:()=>s});var r=o(1135),n=o(1009);function s(...e){return(0,n.m6)((0,r.W)(e))}},5498:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>E,metadata:()=>B});var r=o(9510),n=o(9022),s=o.n(n),a=o(8570);let i=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/magicui/dock.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let d=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/magicui/dock.tsx#Dock`),u=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/magicui/dock.tsx#DockIcon`);(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/magicui/dock.tsx#dockVariants`);let m=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/mode-toggle.tsx`),{__esModule:p,$$typeof:g}=m;m.default;let h=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/mode-toggle.tsx#ModeToggle`);var f=o(3025),x=o(791),b=o(1159),v=o(644);let y=(0,x.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}});b.forwardRef(({className:e,variant:t,size:o,asChild:n=!1,...s},a)=>{let i=n?f.g7:"button";return r.jsx(i,{className:(0,v.cn)(y({variant:t,size:o,className:e})),ref:a,...s})}).displayName="Button";let w=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/separator.tsx`),{__esModule:j,$$typeof:k}=w;w.default;let z=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/separator.tsx#Separator`),P=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/tooltip.tsx`),{__esModule:S,$$typeof:D}=P;P.default;let N=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/tooltip.tsx#Tooltip`),C=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/tooltip.tsx#TooltipContent`),U=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/tooltip.tsx#TooltipProvider`),T=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/ui/tooltip.tsx#TooltipTrigger`);var _=o(9823),M=o(7371);function $(){return(0,r.jsxs)("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14",children:[r.jsx("div",{className:"fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"}),(0,r.jsxs)(d,{className:"z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ",children:[_.D.navbar.map(e=>r.jsx(u,{children:(0,r.jsxs)(N,{children:[r.jsx(T,{asChild:!0,children:r.jsx(M.default,{href:e.href,className:(0,v.cn)(y({variant:"ghost",size:"icon"}),"size-12"),children:r.jsx(e.icon,{className:"size-4"})})}),r.jsx(C,{children:r.jsx("p",{children:e.label})})]})},e.href)),r.jsx(z,{orientation:"vertical",className:"h-full"}),Object.entries(_.D.contact.social).filter(([e,t])=>t.navbar).map(([e,t])=>r.jsx(u,{children:(0,r.jsxs)(N,{children:[r.jsx(T,{asChild:!0,children:r.jsx(M.default,{href:t.url,target:"_blank",className:(0,v.cn)(y({variant:"ghost",size:"icon"}),"size-12"),children:r.jsx(t.icon,{className:"size-4"})})}),r.jsx(C,{children:r.jsx("p",{children:e})})]})},e)),r.jsx(z,{orientation:"vertical",className:"h-full py-2"}),r.jsx(u,{children:(0,r.jsxs)(N,{children:[r.jsx(T,{asChild:!0,children:r.jsx(h,{})}),r.jsx(C,{children:r.jsx("p",{children:"Theme"})})]})})]})]})}let R=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/theme-provider.tsx`),{__esModule:O,$$typeof:A}=R;R.default;let I=(0,a.createProxy)(String.raw`/Users/ttrzeng/Documents/Coding Projects/portfolio/src/components/theme-provider.tsx#ThemeProvider`);o(5023);let B={metadataBase:new URL(_.D.url),title:{default:_.D.name,template:`%s | ${_.D.name}`},description:_.D.description,openGraph:{title:`${_.D.name}`,description:_.D.description,url:_.D.url,siteName:`${_.D.name}`,locale:"en_US",type:"website"},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}},twitter:{title:`${_.D.name}`,card:"summary_large_image"},verification:{google:"",yandex:""}};function E({children:e}){return r.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:r.jsx("body",{className:(0,v.cn)("min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",s().variable),children:r.jsx(I,{attribute:"class",defaultTheme:"light",children:(0,r.jsxs)(U,{delayDuration:0,children:[e,r.jsx($,{})]})})})})}},9823:(e,t,o)=>{"use strict";o.d(t,{D:()=>a});var r=o(9510),n=o(7666);o(1319);let s={globe:e=>r.jsx(n.Z,{...e}),linkedin:e=>(0,r.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:[r.jsx("title",{children:"LinkedIn"}),r.jsx("path",{fill:"currentColor",d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]}),github:e=>r.jsx("svg",{viewBox:"0 0 438.549 438.549",...e,children:r.jsx("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})})},a={name:"Talent Zeng",initials:"TZ",url:"https://talentzeng.com",location:"Toronto, Canada",description:"From physicist to software engineer, driven by a passion for building creative solutions with designs that make an impact.",summary:"Experienced software engineer with 7+ years in designing, prototyping, and developing robust, enterprise-level websites. Skilled in React, Redux, JavaScript/TypeScript, MUI, Styled Components, and Node.js. Specializes in creating scalable, modular web components optimized for long-term maintainability and growth.",avatarUrl:"/me.jpg",skills:["React.js","Next.js","Typescript","Express.js","Jest","Node.js","Python","Go","Postgres","Material UI","Styled-components","Redux","Sass","Nest.js"],navbar:[{href:"/",icon:o(8385).Z,label:"Home"}],contact:{email:"talent.z@hotmail.com",social:{GitHub:{name:"GitHub",url:"https://github.com/ttrzeng",icon:s.github,navbar:!0},LinkedIn:{name:"LinkedIn",url:"https://linkedin.com/in/ttrzeng",icon:s.linkedin,navbar:!0}}},work:[{company:"Okta",href:"https://okta.com",badges:[],location:"Remote",title:"Software engineer",logoUrl:"/okta.png",start:"Oct 2021",end:"Present",description:"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript."},{company:"Auth0",badges:[],href:"https://auth0.com",location:"Remote",title:"Software Engineer",logoUrl:"/auth0.png",start:"Oct 2021",end:"Present",description:"Upgraded Okta/Auth0's UI library for improved scalability and maintenance, and modernized Okta's codebase with React, reducing onboarding time by 40%. Developed reusable components for Auth0's documentation, cutting future feature build time by 20%, and created custom form components, reducing form-related development by 70%."},{company:"Yuhu",href:"https://yuhu.com",badges:[],location:"Toronto, ON",title:"Senior Software Engineer",logoUrl:"/yuhu.jpg",start:"January 2021",end:"October 2021",description:"Led a team of engineers and designers to improve client workflows, boosting payment processing and maintenance efficiency by 60%. Developed payment features in Yuhu's main app, increasing revenue by ~$2 per unit for 200k units. Reduced technical debt by 10% and optimized engineering management workflows, driving overall operational efficiency."},{company:"Sandvine",href:"https://sandvine.com",badges:[],location:"Waterloo, ON",title:"Software Engineer",logoUrl:"/sandvine.png",start:"September 2017",end:"December 2020",description:"Developed a web app to configure 1,000+ servers simultaneously, saving 100 hours per week in configuration time. Created a tool for issuing licenses to clients across all company products, saving sales engineers 30 hours per sale. In addition, built a web framework that enables users to create dynamic dashboards without code, saving an estimated ~$3.6M in future development costs."},{company:"Looka",href:"https://looka.com",badges:[],location:"Toronto, ON",title:"Software Engineer",logoUrl:"/looka.png",start:"April 2017",end:"September 2017",description:"Improved logo alignment accuracy to 95% by geometrically aligning fonts and icons. Accelerated the logo editor by 100x, enabling real-time editing responses. Developed a feature that aligns logos realistically on various products, such as t-shirts, banners, doors, and mugs."},{company:"Skywatch",href:"https://skywatch.com",badges:[],location:"Waterloo, ON",title:"Software Engineer Intern",logoUrl:"/skywatch.jpeg",start:"August 2015",end:"December 2015",description:"Reduced satellite data inaccuracies by 80% by eliminating false positives. Created graphs and analytic tools for astrophysics research, supporting NASA and academic professors. Developed Skywatch's system admin to configure and monitor daily data from NASA and user activities, saving 8 hours of manual work per day."}],education:[{school:"University of Waterloo",href:"https://uwaterloo.ca",degree:"Bachelor's Degree of Mathematical Physics (BSc)",logoUrl:"/waterloo.png",start:"2011",end:"2017"}],projects:[{title:"OneHouseUp",href:"https://github.com/ttrzeng/OneHouseUp-Frontend",dates:"January 2020 - September 2020",active:!1,description:"Built a web application that analyzes real estate property data to generate comprehensive financial projections, enabling accurate investment potential assessment.",technologies:["React.js","Redux","Redux saga","Typescript","PostgreSQL","Surge","Sass","Bulma","Stripe","Digital Ocean","TypeORM","Express.js","Passport.js"],links:[{type:"Website (inactive)",icon:r.jsx(s.globe,{className:"size-3"})},{type:"Source code",href:"https://github.com/ttrzeng/OneHouseUp-Frontend",icon:r.jsx(s.github,{className:"size-3"})}],image:"/onehouseup_summary.png",video:""},{title:"Quantum Design",href:"https://quantum.okta.design",dates:"April 2022 - December 2023",active:!0,description:"Created an open source UI component library for Okta/Auth0, featuring custom branding, charts, tokens and form elements with full support for both light and dark modes.",technologies:["React.js","Typescript","Storybook","Material UI","Styled-components"],links:[{type:"Website",href:"https://quantum.okta.design",icon:r.jsx(s.globe,{className:"size-3"})},{type:"Source code",href:"https://www.npmjs.com/package/@auth0/quantum-product",icon:r.jsx(s.github,{className:"size-3"})}],image:"/quantum.png",video:""}]}},644:(e,t,o)=>{"use strict";o.d(t,{cn:()=>s,p:()=>a});var r=o(5761),n=o(2386);function s(...e){return(0,n.m6)((0,r.W)(e))}function a(e){let t=new Date().getTime();e.includes("T")||(e=`${e}T00:00:00`);let o=Math.floor(Math.abs(t-new Date(e).getTime())/864e5),r=new Date(e).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"});return o<1?"Today":o<7?`${r} (${o}d ago)`:o<30?`${r} (${Math.floor(o/7)}w ago)`:o<365?`${r} (${Math.floor(o/30)}mo ago)`:`${r} (${Math.floor(o/365)}y ago)`}},5023:()=>{}};