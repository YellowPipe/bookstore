import React from 'react';

const Book = ({id, title, category}) => (
	<div>
		<p>{id}</p>
		<p>{title}</p>
		<p>{category}</p>
		<hr />
	</div>
)

export default Book;