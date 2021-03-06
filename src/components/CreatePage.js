import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../createRelayEnvironment';
import CreatePostMutation from '../mutations/CreatePostMutation';

const CreatePageViewerQuery = graphql`
  query CreatePageViewerQuery {
    viewer {
      id
    }
  }
`;

class CreatePage extends React.Component {
  state = {
    description: '',
    imageUrl: '',
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={CreatePageViewerQuery}
        render={({error, props}) => {
          if(error) {
            return <div>{error.message}</div>
          } else if(props) {
            return (
              <div className="w-100 pa4 flex justify-center">
                <div style={{ maxWidth: 400 }}>
                  <input
                    className="w-100 pa3 mv2"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={(e) => {
                      e.preventDefault();
                      this.setState({
                      description: e.target.value
                    })}}
                    type="text"
                  />
                  <input
                    className="w-100 pa3 mv2"
                    value={this.state.imageUrl}
                    placeholder="Image Url"
                    onChange={
                      (e) =>{
                      e.preventDefault();
                      this.setState({
                      imageUrl: e.target.value
                    })}}
                    type="text"
                  />
                  {
                    this.state.imageUrl &&
                    <img
                      className="w-100 mv3"
                      src={this.state.imageUrl}
                      alt={this.state.description}
                    />
                  }
                  {
                    this.state.description && this.state.imageUrl &&
                    <button className="pa3 bg-black-10 bn dim ttu pointer" onClick={() => this._handlePost(props.viewer.id)}>Post</button>
                  }
                  <div style={{textAlign: "center", color: "red"}}>
                    <Link to="/" >Cancel</Link>
                  </div>
                </div>
              </div>
            );
          }
          return (<div>Loading</div>);
        }
      }
    />);
  }

  _handlePost(viewerId) {
    const { description, imageUrl } = this.state;
    CreatePostMutation(description, imageUrl, viewerId, () => this.props.history.replace('/'));
  }
}

export default withRouter(CreatePage);
