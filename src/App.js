import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="portfolio-title">PORTFOLIO</h1>
          <h2 className="name">ANOOPA VINOD</h2>
          <div className="contact-info">
            <p>📧 anoopavinod.kmp@gmail.com</p>
            <p>📞 +1 (984) 245-0900</p>
            <p>🔗 linkedin.com/in/anoopa-vinod</p>
          </div>
          <div className="special-projects">
            <h3>SPECIAL PROJECTS</h3>
            <p>This portfolio showcases select AI/ML initiatives and data science projects that reflect my expertise in technology consulting and product management.</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="attributes">
            <h3>Key Attributes</h3>
            <ul>
              <li>Strategic Problem Solver</li>
              <li>Data-Driven Decision Maker</li>
              <li>Cross-Functional Collaborator</li>
              <li>Innovation Catalyst</li>
            </ul>
          </div>
          <div className="philosophy">
            <h3>My Philosophy</h3>
            <p>"Leveraging AI/ML to transform business challenges into scalable, impactful solutions that drive measurable value."</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard">
        <h2>Personal Dashboard</h2>
        <div className="metrics">
          <div className="metric-card">
            <h3>4+ Years</h3>
            <p>Technology Consulting Experience</p>
          </div>
          <div className="metric-card">
            <h3>10+ Projects</h3>
            <p>AI/ML & Data Science Implementations</p>
          </div>
          <div className="metric-card">
            <h3>$2M+</h3>
            <p>Estimated Cost Savings Delivered</p>
          </div>
        </div>
        <div className="skills">
          <h3>Core Skills</h3>
          <div className="skill-tags">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Computer Vision</span>
            <span>NLP</span>
            <span>Product Management</span>
            <span>Stakeholder Management</span>
            <span>Agile/Scrum</span>
            <span>Data Analytics</span>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <section className="project">
        <h2>AI/ML Projects @ L&T</h2>
        <h3>Supply Chain AI Solution</h3>
        <div className="project-details">
          <div className="project-description">
            <p><strong>Challenge:</strong> Optimize supply chain operations and reduce lead times</p>
            <p><strong>Solution:</strong> Developed predictive analytics models for demand forecasting</p>
            <p><strong>Impact:</strong> 25% reduction in inventory costs, 30% improvement in delivery times</p>
          </div>
          <div className="tech-stack">
            <p><strong>Technologies:</strong> Python, TensorFlow, AWS, Power BI</p>
          </div>
        </div>
      </section>

      <section className="project">
        <h3>Contracts AI - Document Intelligence</h3>
        <div className="project-details">
          <div className="project-description">
            <p><strong>Challenge:</strong> Automate contract review and risk assessment</p>
            <p><strong>Solution:</strong> Built NLP-powered contract analysis system</p>
            <p><strong>Impact:</strong> 70% reduction in manual review time, improved compliance</p>
          </div>
          <div className="tech-stack">
            <p><strong>Technologies:</strong> NLP, Azure Cognitive Services, Python</p>
          </div>
        </div>
      </section>

      <section className="project">
        <h3>Computer Vision for Quality Control</h3>
        <div className="project-details">
          <div className="project-description">
            <p><strong>Challenge:</strong> Detect defects in egg production line</p>
            <p><strong>Solution:</strong> Implemented real-time vision system for defect detection</p>
            <p><strong>Impact:</strong> 95% accuracy in defect detection, reduced waste</p>
          </div>
          <div className="tech-stack">
            <p><strong>Technologies:</strong> OpenCV, YOLO, Python, IoT sensors</p>
          </div>
        </div>
      </section>

      <section className="project">
        <h2>Internship: Data Science Projects @ LTIMindtree</h2>
        <div className="project-details">
          <div className="project-description">
            <p><strong>Predictive Maintenance:</strong> Developed ML models for equipment failure prediction</p>
            <p><strong>Customer Analytics:</strong> Built segmentation models for targeted marketing</p>
            <p><strong>Business Intelligence:</strong> Created dashboards for executive decision-making</p>
          </div>
        </div>
      </section>

      <section className="project">
        <h2>Internship: AI Projects</h2>
        <div className="project-details">
          <div className="project-description">
            <p><strong>Chatbot Development:</strong> Designed conversational AI for customer service</p>
            <p><strong>Recommendation Engine:</strong> Built personalization system for e-commerce</p>
            <p><strong>Image Classification:</strong> Trained models for product categorization</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>Thank You</h2>
        <p>I'm excited to discuss how my experience in AI/ML and technology consulting can drive innovation at your organization.</p>
        <div className="contact-footer">
          <p>📧 anoopavinod.kmp@gmail.com</p>
          <p>🔗 linkedin.com/in/anoopa-vinod</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
