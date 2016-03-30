var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
   		return (
        	React.createElement('div', {
       		 		className: "commentBox"
               	},
          		"Hello, world! I am a CommentBox.",
          		React.createElement(CommentList),
          		React.createElement(CommentForm)
        	)
        );
    }
});

var CommentList = React.createClass({displayName: 'CommentList',
	render: function() {
		return (
			React.createElement('div', {
					className: 'commentList'
				},
				"This is a comment list"
			)
		);
	}
});

var CommentForm = React.createClass({displayName: 'CommentForm',
	render: function() {
		return (
			React.createElement('div', {
					className: 'commentForm'
				},
				"This is a comment form"
			)
		);
	}
});

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
