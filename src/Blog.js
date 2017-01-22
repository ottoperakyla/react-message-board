import React from 'react';
import Post from './Post';

function Blog (props) {
	const sidebar = (
		<ul>
			{props.posts.map((post) => 
				<li key={post.id}>
					{post.title}
				</li>	
			)}
		</ul>
	);

	const content = props.posts.map((post) =>
		<Post key={post.id} 
			  id={post.id}
			  title={post.title}
			  content={post.content} />
	);

	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
	);
}	

export default Blog;