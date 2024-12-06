import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <>
      {/* Blog Header Section */}
      <div className="blog-header">
        <div className="image-container">
          {/* Background image for the blog header */}
          <img
            className="background-image"
            src="BG_1 (4).jpg"
            alt="Background"
          />
        </div>
        {/* Overlay effect to darken the background */}
        <div className="overlay" />
        <div className="content-container">
          <div className="title">
            Insights about my personal and work life, and the in-betweens
          </div>
          <div className="subtitle">20 October 2024 - PERSONAL BLOG</div>
        </div>
      </div>

      {/* Project 1: Plant Nursery Case Study */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">UI/UX</div>
            </div>
            <div className="date">
              <div className="date-text">AUGust 30, 2024</div>
            </div>
          </div>
          <div className="main-title">Plant Nursey Case Study</div>
          <div className="description">
            BIOTA: A plant nursery mobile application to simplify purchasing
            plants online, plant care and gardening.
          </div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/170030681/UI-Case-Study-Plant-Nursery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="Biota.jpg" alt="Placeholder" />
        </a>
      </div>

      {/* Project 2: LG_Website Banner Design */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">Graphic Design</div>
            </div>
            <div className="date">
              <div className="date-text">MAY 13, 2024</div>
            </div>
          </div>
          <div className="main-title">
            LG_Website Banner Design | Social Media Campaign
          </div>
          <div className="description">
            Strategic Social Media Marketing for LG: Captivating Visuals making
            a powerful impact
          </div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/194723429/LG_Web-Banner-Designs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="3. 300x250px.jpg" alt="Placeholder" />
        </a>
      </div>

      {/* Project 3: Fashion Photography Social Media Campaign */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">Graphic Design</div>
            </div>
            <div className="date">
              <div className="date-text">JANuary 20, 2024</div>
            </div>
          </div>
          <div className="main-title">
            Fashion Photograpy Social Media Campaign
          </div>
          <div className="description">
            A symphony of sea and style, where every wave whispers a story of
            beauty.
          </div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/92629729/VOLAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="Volar.jpg" alt="Placeholder" />
        </a>
      </div>

      {/* Project 4: Hand-Embroidered Reverse Appliqué Project */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">Fashion Design</div>
            </div>
            <div className="date">
              <div className="date-text">NOVember, 2023</div>
            </div>
          </div>
          <div className="main-title">
            Yin and Yang in Stitches: A Hand-Embroidered Reverse Appliqué
            Project, Merging Balance and Craftsmanship.
          </div>
          <div className="description">
            The art of appliqué with deep symbolism
          </div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/93045325/AMARANTHINE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="Applique.jpg" alt="Placeholder" />
        </a>
      </div>

      {/* Project 5: Upcycled Masterpiece Inspired by Vincent Van Gogh */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">Fashion Design</div>
            </div>
            <div className="date">
              <div className="date-text">NOVember, 2023</div>
            </div>
          </div>
          <div className="main-title">
            Medley of the Night Sky: An Upcycled Masterpiece Inspired by Vincent
            Van Gogh, Where Art Meets Sustainability.
          </div>
          <div className="description">
            A creative fusion of art and sustainability
          </div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/93111781/Medley-of-the-Night-Sky"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="MONS.JPG" alt="Placeholder" />
        </a>
      </div>

      {/* Project 6: Zero Waste Draping Project */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">Fashion Design</div>
            </div>
            <div className="date">
              <div className="date-text">NOVember, 2023</div>
            </div>
          </div>
          <div className="main-title">
            Zero Waste Draping at Its Finest – Crafting Sustainable, Timeless
            Elegance with Every Thread.
          </div>
          <div className="description">
            Where Innovation Meets Conscious Fashion.
          </div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/93989321/ZERO-WASTE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="Divyanshi.JPG" alt="Placeholder" />
        </a>
      </div>

      {/* Project 7: Handmade Craftsmanship - Sujni Embroidered Throws */}
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="design-tools">
              <div className="design-tools-title">Fashion Design</div>
            </div>
            <div className="date">
              <div className="date-text">NOVember, 2023</div>
            </div>
          </div>
          <div className="main-title">
            48 Hours of Handmade Craftsmanship – Sujni Embroidered Throws that
            Bring Tradition and Artistry to Your Home.
          </div>
          <div className="description">Blending tradition with Home Decor</div>
        </div>
        {/* Link to the project with the project image */}
        <a
          href="https://www.behance.net/gallery/97366501/An-Artists-Subjective-Expression"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src="Usha.jpg" alt="Placeholder" />
        </a>
      </div>
    </>
  );
};

export default Projects;
