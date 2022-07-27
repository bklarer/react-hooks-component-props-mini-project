import React from "react";

function Article ({title, date = "January 1, 1970", preview, minutes}) {


    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱"

    let readTime = ""

    for(let i = 0; i< minutes; i += interval) {
        readTime += emoji;
    }

    // `{coffee}` {minutes} min read"
    // add coffee for every 5 minutes 

    return(
        <article>
            <h3>{title}</h3>
            <small>{date} {readTime}</small>
            <p>{preview}</p>
        </article>
    )

}

export default Article;