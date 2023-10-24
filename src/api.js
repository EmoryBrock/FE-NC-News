import axios from "axios";

const articleAPI = axios.create({
    baseURL: "https://eb-nc-news.onrender.com/api"
})

export const getArticles = () => {
    return articleAPI
        .get("/articles")
        .then((response) => {
            return response.data.articles
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const getArticleById = (article_id) => {
    return articleAPI
        .get(`/articles/${article_id}`)
        .then((response) => {
            return response.data.article
        })
        .catch((error)=>{
            console.log(error)
        })    
}