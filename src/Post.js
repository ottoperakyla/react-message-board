import React from 'react';

function Post (props) {
	return (
		<div className="post" id={props.id}>
			<h3>{props.title}</h3>
			<p>{props.content}</p>
		</div>
	)
}

export default Post;