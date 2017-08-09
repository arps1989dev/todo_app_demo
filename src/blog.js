import React from 'react';
export default class Blog extends React.Component {
	 
	render() {
		const sidebar = (
    <ul>
      {this.props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = this.props.posts.map((post) =>
		< post 
			key={post.id}
			id={post.id}
			title={post.title}
		/>
    // <div key={post.id}>
    //   <h3>{post.title}</h3>
    //   <p>{post.content}</p>
    // </div>
  );
		return (
			<div>
				{sidebar}
				<hr />
				{content}
			</div>
		);
		}
}
