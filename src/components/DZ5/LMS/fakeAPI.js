const advantages = [
  {
    id: "1",
    name: "Ease of Use",
    text: "React Router simplifies navigation in an application, making it accessible even for beginners. Its intuitive API allows developers to set up routing with minimal configuration, reducing the learning curve for new projects.",
    example:
      "With <NavLink>, you can create active links effortlessly. Example: <NavLink to='/home' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>, where 'active-link' applies a style to the current page.",
  },
  {
    id: "2",
    name: "Dynamic Routing",
    text: "React Router excels at handling dynamic routes, enabling the creation of flexible URLs that adapt to user input or data. This is especially useful for applications with user profiles, product pages, or any data-driven content.",
    example:
      "For a user profile, use: <Route path='/user/:id' element={<UserProfile />} />, and access the ID in the component with const { id } = useParams(), rendering <h1>User {id}</h1>.",
  },
  {
    id: "3",
    name: "Navigation Without Reload",
    text: "This feature enhances user experience by enabling single-page application (SPA) behavior, where only the necessary content updates without refreshing the entire page. It improves performance and keeps the app feeling seamless.",
    example:
      "Use useNavigate() for programmatic navigation: const navigate = useNavigate(); <button onClick={() => navigate('/about', { replace: true })}>Go to About</button> replaces the current history entry.",
  },
  {
    id: "4",
    name: "Nested Routing",
    text: "Nested routing allows for complex application structures, such as dashboards with multiple sections, by organizing routes hierarchically. This keeps the codebase modular and easy to maintain.",
    example:
      "Set up a dashboard with: <Route path='/dashboard' element={<Dashboard />}> <Route path='settings' element={<Settings />} /> <Route path='profile' element={<Profile />} /></Route>, accessed via /dashboard/settings.",
  },
  {
    id: "5",
    name: "Access Control",
    text: "React Router supports route protection, ensuring that only authorized users can access certain pages. This is crucial for secure applications like admin panels or premium content sections.",
    example:
      "Protect a route with: useEffect(() => { if (!isAuthenticated) navigate('/login', { state: { from: location } }); }, [isAuthenticated, navigate]), redirecting unauthenticated users.",
  },
  {
    id: "6",
    name: "Support for Multiple Routing Types",
    text: "The library offers versatility with different routing approaches, allowing developers to choose between static, dynamic, or fallback routes based on project needs, enhancing adaptability.",
    example:
      "Handle 404 errors with: <Routes> <Route path='/404' element={<NotFound />} /> <Route path='*' element={<Navigate to='/404' />} /></Routes>, redirecting to a custom not-found page.",
  },
  {
    id: "7",
    name: "Performance Optimization",
    text: "By supporting lazy loading, React Router helps reduce initial load times, which is vital for large applications with many components, improving user satisfaction and SEO.",
    example:
      "Implement lazy loading: const About = lazy(() => import('./About')); <Suspense fallback={<div>Loading...</div>}><About /></Suspense> loads the component only when needed.",
  },
  {
    id: "8",
    name: "Integration with Browser History",
    text: "This feature ensures smooth interaction with the browser's back and forward buttons, maintaining a consistent navigation experience across different devices and browsers.",
    example:
      "Use useLocation() to track the path: const location = useLocation(); return <div>Current path: {location.pathname}</div> to display the active route dynamically.",
  },
  {
    id: "9",
    name: "Custom Route Configuration",
    text: "React Router allows for highly customizable routing logic, enabling developers to tailor routes to specific business requirements or unique application flows.",
    example:
      "Create a custom route: <Route path='/custom' element={<CustomComponent />} loader={async () => await fetchData()} /> with a loader for data fetching before rendering.",
  },
];

export default advantages;

export const getAdvantages = () => {
  return advantages;
};

export const getAdvantageById = (id) => {
  return advantages.find((item) => item.id === id);
};
