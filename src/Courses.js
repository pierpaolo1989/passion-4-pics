import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import * as cheerio from 'cheerio';

const CourseCard = ({ title, description, url }) => (
  <Col md={4}>
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={url} target="_blank">Vai al corso</Card.Link>
      </Card.Body>
    </Card>
  </Col>
);

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const domestikaUrl = 'https://www.domestika.org/it/courses';
      const weareinfuocoUrl = 'https://www.wearefuorifuoco.com/';

      const getCoursesFromDomestika = async () => {
        const { data } = await axios.get(domestikaUrl);
        const $ = cheerio.load(data);
        const courses = [];
        $('.course-card').each((i, element) => {
          const title = $(element).find('.course-title').text();
          const description = $(element).find('.course-description').text();
          const url = $(element).find('a').attr('href');
          courses.push({ title, description, url });
        });
        return courses;
      };

      const getCoursesFromWeAreInFuoco = async () => {
        const { data } = await axios.get(weareinfuocoUrl);
        const $ = cheerio.load(data);
        const courses = [];
        $('.course-card').each((i, element) => {
          const title = $(element).find('.course-title').text();
          const description = $(element).find('.course-description').text();
          const url = $(element).find('a').attr('href');
          courses.push({ title, description, url });
        });
        return courses;
      };

      const domestikaCourses = await getCoursesFromDomestika();
      const weareinfuocoCourses = await getCoursesFromWeAreInFuoco();
      setCourses([...domestikaCourses, ...weareinfuocoCourses]);
    };

    fetchCourses();
  }, []);

  return (
    <Container>
      <Row>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </Row>
    </Container>
  );
};

export default Courses;