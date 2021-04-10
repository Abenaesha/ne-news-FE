import axios from 'axios';

const request = axios.create({
	baseURL: 'https://xeddit.herokuapp.com/api',
});

export const fetchTopics = () => {
	return request.get('/topics').then(({ data: { topics } }) => {
		return topics;
	});
};

export const fetchAllUsers = () => {
	return request.get('/users').then(({ data: { users } }) => {
		return users;
	});
};

export const fetchUser = (username) => {
	return request.get(`/users/${username}`).then(({ data: { user } }) => {
		return user;
	});
};

export const fetchUserByUsername = (username) => {
	return request.get(`/users/${username}`).then(({ data: { username } }) => {
		return username;
	});
};

export const fetchArticles = (topic, author, sort_by, order, page) => {
	return request
		.get('/articles', { params: { topic, author, sort_by, order, p: page } })
		.then(({ data: { articles } }) => {
			return articles;
		});
};

export const fetchArticlesById = (article_id) => {
	return request
		.get(`/articles/${article_id}`)
		.then(({ data: { article } }) => {
			return article;
		});
};

export const fetchCommentsByArticleId = (article_id, sort_by, order, page) => {
	return request
		.get(`/articles/${article_id}/comments`, { params: { sort_by, order, p: page}})
		.then(({ data: { comments } }) => {
			return comments;
		});
};

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
	});
};
// export const insertComment = (article_id, newComment) => {
// 	return request.post(`/articles/${article_id}/comments`, newComment).then(({ data: {comment} }) => {
// 		return comment;
// 	});
// };

export const insertTopic = (newTopic) => {
	return request.post('/topics', newTopic).then(({ data }) => {
		return data;
	});
};

export const fetchItemCount = (type, topic, author, article_id) => {
	let path = '/articles';
	if (article_id) path += `/${article_id}/comments`;
	return request
		.get(path, { params: { topic, author, limit: 1000 } })
		.then(({ data }) => data[type].length);
};

export const deleteItem = ( type, id ) => {
	return request.delete(`/${type}/${id}`)
}
