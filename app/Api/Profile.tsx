import { useEffect, useState } from "react";
import Settings from '../Settings/Config'

function DiscordAvatar() {
    const [status, setStatus] = useState("");
    const [avatarURL, setAvatarURL] = useState(null);

    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        async function fetchAvatarURL() {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${Settings.UserID}`);
                const data = await response.json();
                const avatar = data?.data?.discord_user?.avatar;

                if (avatar) {
                    const fileExtension = avatar.startsWith("a_") ? "gif" : "webp";
                    const url = `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${avatar}.${fileExtension}?size=128`;
                    setAvatarURL(url);
                    setStatus(data?.data?.discord_status);
                }
            } catch (error) {
                console.error("Error fetching avatar URL:", error);
            }
        }

        fetchAvatarURL();
    }, []);

    if (!avatarURL) {
        return null;
    }

    const statusColor = getStatusColor(status);
    const startAnimation = () => {
        setAnimationStarted(true);
    };
    return (
        <div className="">
            <div
                style={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%"
                }}
                onLoad={startAnimation}
                onAnimationEnd={() => setAnimationStarted(true)}
            >
                {avatarURL ? (
                    <>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-5px",
                                right: "-5px",
                                width: "23px",
                                height: "23px",
                                borderRadius: "50%",
                                backgroundColor: statusColor,
                                border: "5px solid #0f0f0f",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                opacity: animationStarted ? 1 : 0,
                                transform: animationStarted ? "scale(1)" : "scale(1.5)",
                                transition: "opacity 0.3s ease-out, transform 0.3s ease-out"
                            }}
                        />
                        <div className={`status-circle ${animationStarted ? "animate" : ""}`}
                            style={{
                                borderColor: statusColor
                            }}></div>

                        <img
                            src={avatarURL}
                            alt="Discord Avatar"
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                objectFit: "cover"
                            }}
                        />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>

    );
}

function getStatusColor(status: string) {
    switch (status) {
        case "online":
            return "green";
        case "idle":
            return "yellow";
        case "dnd":
            return "red";
        default:
            return "gray";
    }
}

export default DiscordAvatar;