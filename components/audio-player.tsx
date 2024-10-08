import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiRotateCcw } from 'react-icons/fi';

interface AudioPlayerProps {
    src: string;
    title?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const setAudioData = () => {
            setDuration(audio.duration);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        };

        const handlePause = () => {
            setIsPlaying(false);
        };

        const handlePlay = () => {
            setIsPlaying(true);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('durationchange', setAudioData);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('play', handlePlay);

        if (audio.readyState >= 1) {
            setAudioData();
        }

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', setAudioData);
            audio.removeEventListener('durationchange', setAudioData);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('play', handlePlay);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const checkDuration = setInterval(() => {
            if (audio.duration && audio.duration !== Infinity) {
                setDuration(audio.duration);
                clearInterval(checkDuration);
            }
        }, 100);

        return () => clearInterval(checkDuration);
    }, []);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Error playing audio:", error);
                    setIsPlaying(false);
                });
            }
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const width = bounds.width;
        const percentage = x / width;
        audio.currentTime = percentage * audio.duration;
    };

    const handleRestart = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
                setIsPlaying(false);
            });
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="relative group my-6 mb-8 ring-1 ring-neutral-800 rounded-md bg-neutral-900 p-4">
            <audio ref={audioRef} src={src} preload="metadata" />
            {title && <div className="text-white mb-2">{title}</div>}
            <div className="flex items-center mb-2">
                <button
                    onClick={togglePlayPause}
                    className="p-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors mr-2"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                </button>
                <button
                    onClick={handleRestart}
                    className="p-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors mr-4"
                    aria-label="Restart"
                >
                    <FiRotateCcw size={20} />
                </button>
                <div 
                    className="flex-grow bg-neutral-800 h-2 rounded-full cursor-pointer"
                    onClick={handleProgressClick}
                >
                    <div 
                        className="bg-white h-full rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <div className="flex justify-between text-sm text-neutral-400">
                <span>{formatTime(currentTime)}</span>
                <span>{duration ? formatTime(duration) : 'Loading...'}</span>
            </div>
        </div>
    );
};

export default AudioPlayer;