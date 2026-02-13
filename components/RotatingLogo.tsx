"use client";

import React from "react";

interface RotatingLogoProps {
    className?: string;
}

export const RotatingLogo: React.FC<RotatingLogoProps> = ({ className }) => {
    return (
        <div className={`relative overflow-hidden rounded-full ${className}`}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/images/rotating-logo.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
