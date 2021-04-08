import axios from 'axios';

const request = axios.create({
    baseURL: 'https://xeddit.herokuapp.com/api',
});

export const fetchTopics = () => {
    return request.get('/topics').then(({data: {topics}}) => {
        return topics;
    })
}

export const fetchUsers = () => {
    return request.get( '/users' ).then( ( { data: { users } } ) => {
        return users;
    })
}

export const fetchUserByUsername = ( username ) => {
    return request.get( `/users/${ username }` ).then( ( { data: { username } } ) => {
        return username;
    })
}

export const fetchArticles = (topic, author, sort_by, order, p) => {
    return request
    .get('/articles', { params: { topic, author, sort_by, order, p } })
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

export const updateVotes = (type, id, vote_count) => {
    return request
    .patch(`/${type}/${id}`, { inc_votes: vote_count })
    .then(({ data }) => data);
  };

export const insertItem = (newItem, article_id) => {
    let path = '/articles';
    if (article_id) path += `/${article_id}/comments`;
    return request.post(path, newItem).then(({ data }) => {
        return data;
    })
}

export const insertTopic = ( newTopic ) => {
    return request.post( '/topics', newTopic ).then( ( { data } ) => {
        return data;
    })
}
