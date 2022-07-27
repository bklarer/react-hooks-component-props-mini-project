import React from "react";
import Article from "./Article";



function ArticleList ({articles}) {
    const articleArray = articles.map((article) => {

        return (
            <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>
        )
    }) 

    return(
        <main>
            {articleArray}
        </main>
    )

}

export default ArticleList;