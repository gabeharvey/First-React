// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(<p>Hello, Hi my name is Gabe!</p>, document.getElementById("root"))
// ReactDOM.render(<p>Hello, Hi my name is Gabe and I enjoy using React!</p>, document.querySelector("#root"))

// Unordered List Practice
// ReactDOM.render(<ul>
//     <li>List Item 1</li>
//     <li>List Item 2</li>
//     <li>List Item 3</li>
// </ul>, document.getElementById("root"))

// Render MainContent
// function Navbar() {
//     return (
//       <nav style={styles.navbar}>
//         <div style={styles.logo}>React</div>
//         <ul style={styles.navLinks}>
//           <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
//           <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
//           <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
//           <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
//         </ul>
//       </nav>
//     );
//   }
  
//   const styles = {
//     navbar: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px 20px',
//       backgroundColor: '#333',
//     },
//     logo: {
//       color: '#fff',
//       fontSize: '24px',
//       fontWeight: 'bold',
//     },
//     navLinks: {
//       listStyle: 'none',
//       display: 'flex',
//       margin: 0,
//       padding: 0,
//     },
//     navItem: {
//       marginLeft: '20px',
//     },
//     navLink: {
//       color: '#fff',
//       textDecoration: 'none',
//       fontSize: '18px',
//     }
//   };

// function MainContent () {
//     return (
//     <h1> I'm Learning React</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// Create an h1 element
// const h1 = document.createElement('h1');
    
// // Set the text content
// h1.textContent = 'Hello, React';
// h1.className="header"
// console.log(h1)

// // Append the h1 to the root element
// document.getElementById('root').appendChild(h1);

// const element = <h1 className='header'>This is JSX</h1>
// console.log(element)

// JSX
// const page = (
//     <div>
//         <h1>This is JSX</h1>
//         <p>We are learning React!</p>
//     </div>
//     )

// console.log (page)

// ReactDOM.render(
//     page, 
//     document.getElementById('root')
// )

// Create Navbar using JSX
// const Navbar = (
//     <nav>
//         <h1>Gabe's React Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render (Navbar, document.getElementById('root'))

// import ReactDOM from 'react-dom/client';

// ReactDOM.render(Hello, React, document.getElementById("root"))

// Goodbye CDNs
// import React from 'react';
// import ReactDOM from 'react-dom/client'; // For React 18

// // Create the Navbar component
// const Navbar = (
//     <nav>
//         <h1>Gabe's React Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// );

// // Find the root element and render the Navbar component
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Navbar);

// const Navbar = (
//     <nav>
//       <h1>Gabe's React Website</h1>
//       <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );

//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(Navbar);

// import React from 'react'
// import ReactDOM from 'react-dom'

// const MyPage = (
//     <div>
//         <h1>Hello, My Name is Gabe</h1>
//         <p>I live in San Antonio Texas</p>
//         <h2>Here are my favorite foods:</h2>
//         <ul>
//             <li>Kale</li>
//             <li>Dates</li>
//             <li>Hummus</li>
//         </ul>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(MyPage);

// List in JSON format
// document.getElementById('root').append(JSON.stringify(MyPage))

// ReactDOM.render(MyPage, document.getElementById('root'))