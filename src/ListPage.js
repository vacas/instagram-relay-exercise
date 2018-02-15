import React from 'react';
import Post from './Post';

const mockPostData = [
  {
    node: {
      id: "1",
      description: "Howdy Partner",
      imageUrl: "https://static.pexels.com/photos/129612/pexels-photo-129612.jpeg"
    }
  },
  {
    node: {
      id: "2",
      description: "Ice Cream!",
      imageUrl: "https://images.pexels.com/photos/38134/pexels-photo-38134.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
    }
  }
];

class ListPage extends React.Component {
  render() {
    return (
      <div className="w-100 flex justify-center">
        <div className="w-100">
          {mockPostData.map(({node}) =>
            <Post key={node.id} post={node} />
          )}
        </div>
      </div>
    );
  }
}

export default ListPage;
