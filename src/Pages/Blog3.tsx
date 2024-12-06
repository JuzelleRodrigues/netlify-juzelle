import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  FaCamera,
  FaLightbulb,
  FaTachometerAlt,
  FaCogs,
  FaAdjust,
  FaCalendar,
} from "react-icons/fa";
import "./Blog3.css";

const Blog3: React.FC = () => {
  return (
    <div className="blog-container">
      <div className="blog-header-title">
        <h2>
          A SHOT THAT DESRCIBES YOU <br></br>
          <h5 id="Tagline">
            Visual Representation: Me, in a Nutshell (or a Frame)
          </h5>
        </h2>
      </div>

      <div className="blog-header-details">
        <span className="blog-category">Photography</span>
        <div className="divider"></div>
        <div className="date-info">
          <div className="date-icon">
            <div className="icon">
              <FaCalendar className="icon" />
            </div>
          </div>
          <span className="blog-date"> 01 NOVember 2024</span>
        </div>
        <div className="divider"></div>
        <div className="author-info">
          <img className="author-image" src="JuzellePhoto.jpg" alt="Author" />
          <span className="author-name">Juzelle Rodrigues</span>
        </div>
      </div>

      {/* Main Blog Section */}
      <div className="blog-layout">
        <div className="blog-image-container">
          <img
            className="blog-image"
            src="3_ThumbnailSize_DescribesYou.jpg"
            alt="DescribesYou"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="camera-setup-content">
        <h2>Camera & Other Setup: Capturing Every Detail</h2>
        <p>
          Our production relied on cutting-edge technology for both static and
          dynamic shots:
        </p>
        <div className="setup-details">
          <div className="setup-item">
            <FaCamera className="icon" />
            <h4>Camera Maker & Model</h4>
            <p>APPLE iPhone13 </p>
          </div>

          <div className="setup-item">
            <FaLightbulb className="icon" />
            <h4>Flash Mode</h4>
            <p> No flash, compulsory </p>
          </div>
          <div className="setup-item">
            <FaTachometerAlt className="icon" />
            <h4>Shutter Speed</h4>
            <p>1/6173 sec</p>
          </div>
          <div className="setup-item">
            <FaCogs className="icon" />
            <h4>ISO</h4>
            <p>ISO 50</p>
          </div>
          <div className="setup-item">
            <FaAdjust className="icon" />
            <h4>Focal Length</h4>
            <p>5mm</p>
          </div>
        </div>
      </div>

      <div className="section text-section">
        <h4>About</h4>
        <p>
          I resonate deeply with the love for nature and a desire for escape.
          There's something truly magical about being outdoors, surrounded by
          the beauty of the natural world. It is a beautiful thing to find
          solace in nature, especially while indulging in a good book. Being
          surrounded by natural beauty, the gentle rustling of leaves, the soft
          chirping of birds, and the feeling of the sun's warmth on your skin.
          Reading in nature is like a form of self-care. It allows me to
          disconnect from the hustle and bustle of daily life and immerse myself
          in another world. It can reduce stress, improve mental health, and
          boost creativity. The combination of fresh air, natural light, and the
          calming rhythm of nature creates a truly restorative experience.
        </p>
        <h4>Mood & Composition</h4>
        <p>
        The overall mood of the image is serene and contemplative. The natural setting, with the 
        bright sunlight and the contrast of the trees, adds a sense of peace and calm.
        </p>
        <h3>Technical Commentary</h3>
        <h4>Aperture (f/1.6)</h4>
        <p>
        The aperture (f/1.6) allowed for a shallow depth of field, keeping me in focus while slightly 
        blurring the background. 
        </p>
        <br></br>
        <h4>Shutter Speed (1/6173 sec)</h4>
        <p>
        The short exposure time (1/6173 sec) likely helped to freeze the movement - a natural 
        head swing is what I attempted - which is quite decently captured. The movement is slightly seen in the hair flip/ hair movement. The composition and the use 
        of light and shadow create a sense of tranquility and introspection. 
        </p>
        <br></br>
        <h4>ISO (ISO 50)</h4>
        <p>
        The image was likely captured in bright lighting conditions which is suggestive because of 
        the (ISO-50); good lighting conditions, minimizing noise in the image. 
        </p>
        <br></br>
        <h4>Focal Length (5mm)</h4>
        <p>
        The 5mm focal length was likely chosen for its ability to capture wide, immersive views of nature, enhance depth, create a dramatic effect through exaggerated perspectives, and allow for dynamic movement while keeping a close connection to the surroundings.
        </p>
      </div>

      {/* Read More Similar Blogs */}
      <div className="related-blogs">
        <h3>Read More Similar Blogs</h3>
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="Pasta.jpg" />
              <Card.Body>
                <Card.Title>Making the Perfect Spaghetti</Card.Title>
                <Card.Text>
                  Dive into the art of creating cinematic food commercials.
                </Card.Text>
                <Button variant="outline-dark" href="/blog1">
                  Read Blog
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="Henna.jpg" />
              <Card.Body>
                <Card.Title>Mastering Camera Techniques</Card.Title>
                <Card.Text>
                  Learn how to use advanced cameras for dynamic shots.
                </Card.Text>
                <Button variant="outline-dark" href="/blog2">
                  Visit Page
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="fastfashion.jpg" />
              <Card.Body>
                <Card.Title>Lighting Magic</Card.Title>
                <Card.Text>
                  Explore how lighting enhances the storytelling of your videos.
                </Card.Text>
                <Button variant="outline-dark" href="/blog3">
                  Continue Reading
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog3;