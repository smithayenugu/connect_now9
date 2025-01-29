import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const [selectedImage, setSelectedImage] = useState(null);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContextElement = useRef();
  const postTagsElement = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContext = postContextElement.current.value;
    const postTags = postTagsElement.current.value.split(' ').filter(tag => tag.trim() !== '');

    if (!userId || !postTitle || !postContext || !postTags.length) {
      alert("Please fill in all required fields");
      return;
    }

    const post = {
      id: Date.now().toString(),
      userId,
      title: postTitle,
      body: postContext,
      image: selectedImage,
      tags: postTags,
      reactions: 0
    };

    addPost(post);
    event.target.reset();
    setSelectedImage(null);
  };

  const createPost = async (postData) => {
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Post created:', data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post">
      <div className="create-post-card">
        <h2 className="text-center mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              User Id
            </label>
            <input
              type="text"
              ref={userIdElement}
              className="form-control"
              id="userId"
              placeholder="Enter your User Id"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              ref={postTitleElement}
              className="form-control"
              id="title"
              placeholder="Enter your post title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              ref={postContextElement}
              id="content"
              rows="4"
              placeholder="Write your post content here..."
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Select Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="mt-2">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="img-preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '200px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Hashtags
            </label>
            <input
              type="text"
              ref={postTagsElement}
              className="form-control"
              id="tags"
              placeholder="Enter your hashtags"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
