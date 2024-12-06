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
import "./Blog2.css";

const Blog2: React.FC = () => {
  return (
    <div className="blog-container">
      <div className="blog-header-title">
        <h2>
          AN AESTHETIC/ DRAMATIC SHOT <br></br>
          <h5 id="Tagline">Dreamlike Escape; a Glimpse of Nature's Beauty</h5>
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
            src="2_ThumbnailSize_Aesthetic_Dramatic.jpg"
            alt="Aesthetic_Dramatic"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="camera-setup-content">
        <h2>Camera & Other Setup: Capturing Every Detail</h2>
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
            <p>1/4651 sec </p>
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
          Concealed by autumn leaves, I am lying down over pile of fallen
          leaves. The overall composition is fun & playful, as I hold my hands
          over my face covering the soft winter sunlight.
        </p>
        <h4>Mood</h4>
        <p>
          The soft light and the muted tones of the autumn leaves contribute to
          this serene atmosphere and the playful vibe of the composition. The
          covering face adds a layer of mystery and invites the viewer to
          contemplate their own thoughts and feelings about the mood of the
          image.
        </p>
        <h3>Technical Commentary</h3>
        <h4>Aperture (f/1.6)</h4>
        <p>
          This wide aperture creates a depth of field, isolating the subject
          from the background. This helps to draw the viewer's attention to the
          person and their interaction with the natural surroundings. The
          slighlty blurred background also contributes to the dreamy, ethereal
          quality of the image.
        </p>
        <br></br>
        <h4>Shutter Speed (1/4651 sec)</h4>
        <p>
          This extremely fast shutter speed ensures that the image is sharp and
          free of motion blur, even if there was a slight movement in the scene
          - the hand movement - it is captured quite well and precisely without
          any blur. It also helps to capture the delicate details of the leaves
          and the texture of the grass.
        </p>
        <br></br>
        <h4>ISO (ISO-50)</h4>
        <p>
          The low ISO setting minimizes the noise in the image, resulting in a
          clean and detailed photo. This is important for preserving the subtle
          autumn colors. (real colours)
        </p>
        <br></br>
        <h4>Focal Length (5mm)</h4>
        <p>
          The wide-angle lens captures a wider field of view, allowing to
          capture more of the surrounding nature.
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

export default Blog2;