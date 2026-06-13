import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "../types/media";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "../css/VideoPlayer.css";

interface Props {
  item: MediaItem;
}

export default function MediaBlock({ item }: Props) {
  return (
    <div className="item">
      {item.type === "image" ? (
        <ImageBlock src={item.src} caption={item.caption} />
      ) : (
        <VideoBlock src={item.src} caption={item.caption} />
      )}
    </div>
  );
}

/* ─── IMAGE BLOCK ─────────────────────────────────────────── */
function ImageBlock({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className="image">
      <img src={src} alt={caption || "Gallery image"} loading="lazy" />
      {caption && <div className="description">{caption}</div>}
    </div>
  );
}

/* ─── VIDEO BLOCK ─────────────────────────────────────────── */
function VideoBlock({ src, caption }: { src?: string; caption?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  /* ── Security: block context-menu + keyboard shortcuts ── */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const blockKeys = (e: KeyboardEvent) => {
      if (
        [" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const prevent = (e: Event) => e.preventDefault();

    vid.addEventListener("keydown", blockKeys);
    vid.addEventListener("contextmenu", prevent);
    vid.addEventListener("touchstart", prevent, { passive: false });
    vid.addEventListener("touchend", prevent, { passive: false });
    vid.addEventListener("touchmove", prevent, { passive: false });

    return () => {
      vid.removeEventListener("keydown", blockKeys);
      vid.removeEventListener("contextmenu", prevent);
      vid.removeEventListener("touchstart", prevent);
      vid.removeEventListener("touchend", prevent);
      vid.removeEventListener("touchmove", prevent);
    };
  }, []);

  /* ── Playback helpers ─────────────────────────────────── */
  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  const onTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    setProgress((vid.currentTime / vid.duration) * 100);
  };

  const onLoadedMetadata = () => {
    const vid = videoRef.current;
    if (vid) setDuration(vid.duration);
  };

  const onEnded = () => setPlaying(false);

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    vid.currentTime = (Number(e.target.value) / 100) * vid.duration;
  };

  /* ── Time formatting ─────────────────────────────────── */
  const fmt = (s: number) => {
    const secs = Math.floor(s || 0);
    const m = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const currentTime = duration ? (progress / 100) * duration : 0;

  return (
    <div className="video vp-wrap" onClick={togglePlay}>
      {/* ── Video element ──────────────────────────────── */}
      <video
        ref={videoRef}
        src={src}
        playsInline
        controls={false}
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      {/* ── Big center play button (shows when paused) ─── */}
      <div className={`vp-center-btn${playing ? " vp-hidden" : ""}`}>
        <div className="vp-play-circle">
          <FaPlay />
        </div>
      </div>

      {/* ── Caption ────────────────────────────────────── */}
      {caption && (
        <div className="vp-caption">
          <span className="vp-caption-text">{caption}</span>
        </div>
      )}

      {/* ── Controls bar ───────────────────────────────── */}
      <div className="vp-controls" onClick={(e) => e.stopPropagation()}>
        {/* Progress bar */}
        <div className="vp-seek-wrap">
          <input
            className="vp-seek"
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={seek}
            style={
              {
                "--pct": `${progress}%`,
              } as React.CSSProperties
            }
          />
        </div>

        {/* Bottom row */}
        <div className="vp-row">
          {/* Play / Pause */}
          <button
            className="vp-btn"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>

          {/* Time */}
          <span className="vp-time">
            {fmt(currentTime)} / {fmt(duration)}
          </span>

          <div style={{ flex: 1 }} />

          {/* Mute */}
          <button
            className="vp-btn"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </div>
  );
}
