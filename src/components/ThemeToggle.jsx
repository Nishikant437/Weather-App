// import { useState, useEffect } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.classList.remove("dark"); // Remove dark mode class
//     } else {
//       document.documentElement.classList.add("dark"); // Add dark mode class
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all"
//       title="Toggle Theme"
//     >
//       {theme === "dark" ? (
//         <span role="img" aria-label="sun">🌞</span> // Sun emoji for light theme
//       ) : (
//         <span role="img" aria-label="moon">🌙</span> // Moon emoji for dark theme
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;
