import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "../types/media";
import { FaPause, FaPlay } from "react-icons/fa";

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

/* ---------- IMAGE BLOCK ---------- */
function ImageBlock({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className="image">
      <img src={src} alt={caption || "Gallery image"} loading="lazy" />
      {caption && <div className="description">{caption}</div>}
    </div>
  );
}

/* ---------- VIDEO BLOCK ---------- */
function VideoBlock({ src, caption }: { src?: string; caption?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const blockKeys = (e: KeyboardEvent) => {
      const blocked = [" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
      if (blocked.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const preventSave = (e: any) => e.preventDefault();

    vid.addEventListener("keydown", blockKeys);
    vid.addEventListener("contextmenu", preventSave);
    vid.addEventListener("touchstart", preventSave);
    vid.addEventListener("touchend", preventSave);
    vid.addEventListener("touchmove", preventSave);

    return () => {
      vid.removeEventListener("keydown", blockKeys);
      vid.removeEventListener("contextmenu", preventSave);
      vid.removeEventListener("touchstart", preventSave);
      vid.removeEventListener("touchend", preventSave);
      vid.removeEventListener("touchmove", preventSave);
    };
  }, []);

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

  const onTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    setProgress((vid.currentTime / vid.duration) * 100);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    vid.currentTime = (Number(e.target.value) / 100) * vid.duration;
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={onTimeUpdate}
        playsInline
        controls={false}
        controlsList="nodownload noplaybackrate nofullscreen"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Video hint / play button */}
      <div
        className={`video-hint ${playing ? "hidden" : ""}`}
        onClick={togglePlay}
      >
        <FaPlay />
      </div>

      {/* Custom controls */}
      <div className="video-controls">
        <button onClick={togglePlay}>{playing ? <FaPause /> : <FaPlay />}</button>
        <input type="range" value={progress} onChange={seek} />
      </div>

      {caption && <div className="description">{caption}</div>}
    </div>
  );
}
