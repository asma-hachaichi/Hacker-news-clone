import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./../CSS/news.css";
import arrow from "../Images/arrow.png";
import {Col, Row, Container} from 'react-grid-system';

export default function NewStories() {

  const [newStoryIds, setNewStoryIds] = useState([]);
  const [newStories, setNewStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(30);

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(response => {
        const allNewStoryIds = response.data;
        setNewStoryIds(allNewStoryIds);
      })
      .catch(error => console.error('Error fetching new stories:', error));
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * storiesPerPage;
    const endIndex = startIndex + storiesPerPage;
    const pageStoryIds = newStoryIds.slice(startIndex, endIndex);
    fetchStoriesDetails(pageStoryIds);
  }, [currentPage, newStoryIds]);

  const fetchStoriesDetails = (storyIds) => {
    Promise.all(storyIds.map(storyId => axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)))
      .then(storyResponses => {
        const stories = storyResponses.map(response => response.data);
        setNewStories(stories);
      })
      .catch(error => console.error('Error fetching story details:', error));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(newStoryIds.length / storiesPerPage);

  const getDomainFromUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname;
    } catch (error) {
      console.error('Invalid URL:', error);
      return '';
    }
  };

  const calculateMinutesAgo = (time) => {
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    const minutesAgo = Math.floor((currentTime - time) / 60); // Calculate minutes
    return minutesAgo;
  };

  return (
    <Container className="container">
      <br/>
      <div className="head"><h2>New Stories</h2></div>
      {newStories.map((story, index) => (
        <Row className='story'>
          <Col sm={1} className="enum">
            {(currentPage-1) * storiesPerPage + index + 1}. <img src={arrow} alt="vote"/>
          </Col>
          <Col sm={8}>
            <div className="title">
              <p>{story.title}</p>
              <p><a href={story.url} target="_blank" className="site">({getDomainFromUrl(story.url)})</a></p>
            </div>
            <p className="info">{story.score} point by {story.by} {calculateMinutesAgo(story.time)} minutes ago</p>
          </Col>
        </Row>
      ))}
      <div className='pagination'>
        <p>Page {currentPage} of {totalPages}</p>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
        )}
      </div>
      <br/>
    </Container>
  );
}