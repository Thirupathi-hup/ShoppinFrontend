import styled from "styled-components";

// App container styling
export const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  min-height: 100vh;
`;



// Options container styling
export const OptionsContainer = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Select dropdown styling
export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 200px;
  background-color: #fff;
  margin: 10px 0;
`;

// Summary container styling
export const SummaryContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Title styling
export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;


export const WatchPreviewContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const WatchImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain; /* Adjusts the image to fit within the container */
  max-width: 400px; /* Limits the image width */
  margin: 0 auto; /* Centers the image */
`;
// Prev and Next Arrow styling
export const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10; /* Ensure it's on top */
`;

export const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10; /* Ensure it's on top */
`;

// Arrow Image styling for custom arrows
export const ArrowImage = styled.img`
  width: 30px;  /* Adjust the size of the arrow image */
  height: 30px;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;  /* Optional: make the arrow fully visible on hover */
  }
`;





export const Nav = styled.nav`
  background-color: #444;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  &:hover {
    background-color: #555;
  }
`;






export const HomeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;
  justify-content: center;
  padding: 20px;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  
  h1 {
    font-size: 3rem;
    color: #333;
  }
`;

export const MainSection = styled.section`
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 600px;
`;



export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  text-align: center;
  color: #888;
  font-size: 0.875rem;
`;


export const NavBarContainer = styled.nav`
  background-color: #333;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;



// Optional: Add a logo if you want in the NavBar (can be an image or text)
export const Logo = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-right: auto;
  font-weight: bold;
  cursor: pointer;
`;
// In styles.js
export const SaveButton = styled.button`
  background-color: #007aff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;


export const NavLink = styled.a`
  color: #007aff;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;

  &:hover {
    color: #005bb5;
  }
`;