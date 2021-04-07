import axios from 'axios';

const request = axios.create({
    baseURL: 'https://xeddit.herokuapp.com/api',
});

export const fetchTopics = () => {
    return request.get('/topics').then(({data: {topics}}) => {
        return topics;
    })
}

export const fetchArticles = (topic, author, sort_by, order) => {
    return request
    .get('/articles', { params: { topic, author, sort_by, order } })
    .then(({ data: { articles } }) => {
        return articles;
    })
}

export const fetchArticlesById = (article_id) => {
    return request.get(`/articles/${article_id}`).then(({data: {article}}) => {
        return article;
    })
}


export const fetchCommentsByArticleId = (article_id) => {
    return request.get(`/articles/${article_id}/comments`).then(({data: {comments}}) => {
        return comments;
    })
}

export const updateArtVotes = (article_id, vote_count) => {
    return request.patch(`/articles/${article_id}`, { inc_votes: vote_count })
    .then(({ data: { article } }) => article);
}
