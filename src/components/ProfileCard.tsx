import React from "react";

interface ProfileCardProps {
  className?: string;
  avatar: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  className = "",
  avatar,
}) => {
  return (
    <div className={`profile-card ${className}`}>
      <div className="logo">
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>DESIGN ABOUT</h1>
        <p>ART BELONGS TO THE PEOPLE!</p>
      </div>

      <div className="bio">
        <p>
          I am a creative developer and designer based in Madrid, working
          worldwide.
        </p>
        <p>Always passionate. Always on the move.</p>
      </div>

      <nav className="social-links">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`>`} Instagram
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          {`>`} Behance
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`>`} LinkedIn
        </a>
      </nav>

      <div className="blog-section">
        <button className="blog-button">BLOG</button>
      </div>
    </div>
  );
};

export default ProfileCard;
