import React from 'react';

const Blog = () => {
    return (
        <div className="container mt-2 p-5" style={{backgroundColor: '#fefbe9'}}>
            <h1 className="text-center text-warning">What is Context API?</h1>
            <p className="m-5 bg-secondary text-white p-5">Ans: Context API is a react component which assist data flow from parent to any other child component. Context API  helps to provide data to any component directly. Context API sets data without using props. Context API is more easier than props. Context API can be used as globaly like a tree top to bottom. We can force data from top of the tree to any other bottom child component</p>
            <hr />
            <h1 className="text-center text-warning">What is Semantic Tag?</h1>
            <p className="m-5 bg-secondary text-white p-5">Ans: Semantic Tag are special HTML 5 tag which helps to understand different parts of a website both developer and browser. A Website is normally divided into several different parts like Navigation, Header, Main Section, Footer etc. Semantic helps to identify easily how do develop a structure for making your website. For Example: section tag shows different section of a website, navigation section shows navigation menu of a website</p>

        </div>
    );
};

export default Blog;