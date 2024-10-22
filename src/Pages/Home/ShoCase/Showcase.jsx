// const Showcase = () => {
//     const sectionStyle = {
//         backgroundImage: `url(/src/assets/home/chef-service.jpg)`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//     };

//     const containerStyle = {
//         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//         textAlign: 'center',
//         padding: '3rem 1.5rem',
//         borderRadius: '8px', 
//         boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', 
//         maxWidth: '900px', 
//         margin: '0 auto',
//     };

//     const headingStyle = {
//         fontSize: '2.5rem', 
//         fontWeight: '700',  
//         marginBottom: '1rem',
//         color: '#333',
//         letterSpacing: '2px',
//         textTransform: 'uppercase',
//     };

//     const paragraphStyle = {
//         fontSize: '1.125rem',
//         lineHeight: '1.8',
//         color: '#555',
//         fontStyle: 'italic',
//         marginBottom: '2rem',
//     };

//     const buttonStyle = {
//         padding: '0.75rem 2rem',
//         fontSize: '1rem',
//         fontWeight: '500',
//         color: 'white',
//         backgroundColor: '#ff6363',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s ease',
//     };

//     return (
//         <section style={sectionStyle} className="mt-20 py-12 px-8 lg:py-32 lg:px-60">
//             <div style={containerStyle}>
//                 <h3 style={headingStyle}>Culinary Bliss</h3>
//                 <p style={paragraphStyle}>
//                     Step into a world where flavors meet artistry. Our chefs craft experiences, not just dishes—every bite is a celebration of color, taste, and passion. Whether you're here for a casual meal or a grand feast, let us take you on a gastronomic journey you’ll never forget.
//                 </p>
//                 <button style={buttonStyle}>Discover More</button>
//             </div>
//         </section>
//     );
// };

// export default Showcase;


import ItmShow from "../../../../../Layout/ItemShowcase/ItmShow.jsx";

function Showcase({ bgImage, title }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const darkMode = {
    backgroundColor: "#03030358",
    color: "white",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="my-12 flex items-center justify-center px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16"
    >
      <div className="text-center max-w-screen-lg mx-auto">
        <ItmShow
          darkMode={darkMode}
          chefHeading={title}
        chefsubHeading="Step into a world where flavors meet artistry. Our chefs craft experiences, not just dishes—every bite is a celebration of color, taste, and passion. Whether you're here for a casual meal or a grand feast, let us take you on a gastronomic journey you’ll never forget."
        />
      </div>
    </div>
  );
}

export default Showcase;