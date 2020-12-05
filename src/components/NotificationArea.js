import React from "react";

export default function NotificationArea({msg}) {
    if (!msg) {
        return null;
    }

    const messageText = msg.correct ? `That is correct! It is ${msg.note}` : `Sorry, it's not ${msg.note}`;

    return <div className={msg.correct ? 'notification_correct' : 'notification_incorrect'}>{messageText}</div>;
}