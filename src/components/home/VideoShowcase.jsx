import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause } from 'lucide-react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const playlist = [
    {
      id: 0,
      title: 'Workshop Framing & Tensioning',
      thumb: '/images/workshop/workshop-03.jpg',
      src: '/videos/craft-in-motion.mp4'
    },
    {
      id: 1,
      title: 'Precision Upholstery Stitching',
      thumb: '/images/workshop/workshop-04.jpg',
      src: '/videos/craft-in-motion.mp4'
    },
    {
      id: 2,
      title: 'Final High-Density Foam Layering',
      thumb: '/images/workshop/workshop-07.jpg',
      src: '/videos/craft-in-motion.mp4'
    }
  ];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSelectVideo = (index) => {
    setActiveVideoIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#151313',
        color: '#FFFFFF',
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 0.9fr) minmax(360px, 2fr) minmax(140px, 0.7fr)',
            gap: '2rem',
            alignItems: 'center'
          }}
          className="video-showcase-grid"
        >
          {/* Left Column: Heading & Button */}
          <div>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.4rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              SEE THE CRAFT<br />
              IN MOTION.
            </h2>

            <p
              style={{
                color: '#A8A29E',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                marginTop: '1.25rem',
                marginBottom: '1.75rem',
                maxWidth: '280px'
              }}
            >
              Take a closer look at our furniture, material work, and finishing through real videos.
            </p>

            <Link
              to="/works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#5A1621',
                color: '#FFFFFF',
                padding: '0.75rem 1.6rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(90, 22, 33, 0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#741D2C';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5A1621';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Watch Videos <ArrowRight size={14} />
            </Link>
          </div>

          {/* Center Column: Main Video Player */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                backgroundColor: '#000000',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                position: 'relative',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <video
                ref={videoRef}
                src={playlist[activeVideoIndex].src}
                poster={playlist[activeVideoIndex].thumb}
                playsInline
                loop
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onClick={handleTogglePlay}
              />

              {/* Center Play Button Overlay */}
              <button
                onClick={handleTogglePlay}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: isPlaying ? 'rgba(0,0,0,0.4)' : '#FFFFFF',
                  color: isPlaying ? '#FFFFFF' : '#151313',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease'
                }}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause size={24} style={{ fill: 'currentColor' }} />
                ) : (
                  <Play size={24} style={{ fill: 'currentColor', marginLeft: '3px' }} />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 3 Video Thumbnails */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
            className="video-playlist-column"
          >
            {playlist.map((item, idx) => {
              const isSelected = activeVideoIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(idx)}
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    aspectRatio: '16/9',
                    backgroundColor: '#222',
                    position: 'relative',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img
                    src={item.thumb}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      opacity: isSelected ? 0.9 : 0.65
                    }}
                    loading="lazy"
                  />
                  {/* Small Play icon center */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <Play size={12} style={{ fill: 'currentColor', marginLeft: '1px' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .video-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .video-playlist-column {
            flex-direction: row !important;
          }
          .video-playlist-column > div {
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
}
