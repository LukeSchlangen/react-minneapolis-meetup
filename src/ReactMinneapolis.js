import React from 'react';

const blogPost = {
    title: 'Purple People Feeder',
    blog: 'They have the Behemoth Burger, No need to say more.'
};

class ReactMinneapolis extends React.Component {
    render() {
        return (<div>
            React is great!
            <h1>{blogPost.title}</h1>
            <p>{blogPost.blog}</p>
        </div>);
    }
}

export default ReactMinneapolis;