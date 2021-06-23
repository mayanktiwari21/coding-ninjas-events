import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Tags from './Tags';
const Home = () => {
  const [events, setEvents] = useState([]);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState('ALL_EVENTS');
  const [subCategory, setSubCategory] = useState('Upcoming');
  const [tagListString, setTagListString] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const resEvents = await axios.get(
        `https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subCategory}&tag_list=${tagListString}&offset=${
          page === 1 ? 0 : (page - 1) * 20
        }&length=20`
      );
      setEvents(resEvents.data.data.events);
      setTotalPages(resEvents.data.data.page_count);
      const resTags = await axios.get(
        'https://api.codingninjas.com/api/v3/event_tags'
      );
      setTags(resTags.data.data);
      if (page > totalPages) setPage(1);
    }
    fetchData();
  }, [category, subCategory, tagListString, page, totalPages]);

  const handleSearchByTags = (listString) => {
    setTagListString(listString);
  };

  const increase = () => (page === totalPages ? totalPages : setPage(page + 1));
  const decrease = () => (page === 1 ? 1 : setPage(page - 1));

  return (
    <div className='position-relative'>
      <div className='home-img'>
        <div className='home-text'>Events & News</div>
        <div className='home-subtext'>Learn, Compete & Grow</div>
      </div>
      <div className='container' id='body-container'>
        <div className='row'>
          <div
            className='btn-group'
            role='group'
            aria-label='Basic radio toggle button group'
          >
            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio1'
              value='ALL_EVENTS'
              autoComplete='off'
              checked={category === 'ALL_EVENTS'}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />

            <label className='btn btn-outline-warning' htmlFor='btnradio1'>
              <i className='far fa-calendar-alt'></i> All Events
            </label>
            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio2'
              value='WEBINAR'
              autoComplete='off'
              checked={category === 'WEBINAR'}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio2'>
              <i className='fas fa-tv'></i> Webinars
            </label>

            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio3'
              value='CODING_EVENT'
              autoComplete='off'
              checked={category === 'CODING_EVENT'}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio3'>
              <i className='fas fa-laptop-code'></i> Coding Events
            </label>
            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio4'
              value='BOOTCAMP_EVENT'
              autoComplete='off'
              checked={category === 'BOOTCAMP_EVENT'}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio4'>
              <i className='fas fa-network-wired'></i> Bootcamp Events
            </label>

            <input
              type='radio'
              className='btn-check'
              name='btnradio'
              id='btnradio5'
              value='WORKSHOP'
              autoComplete='off'
              checked={category === 'WORKSHOP'}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio5'>
              <i className='fas fa-tools'></i> Workshops
            </label>
          </div>
        </div>

        <div className='row' style={{ marginBottom: '25px' }}>
          <div
            className='btn-group btn-group-sm col-10'
            role='group'
            aria-label='Basic radio toggle button group'
          >
            <input
              type='radio'
              className='btn-check'
              name='subbtnradio'
              id='btnradio6'
              value='Upcoming'
              autoComplete='off'
              checked={subCategory === 'Upcoming'}
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio6'>
              Upcoming
            </label>

            <input
              type='radio'
              className='btn-check'
              name='subbtnradio'
              id='btnradio7'
              value='Archived'
              autoComplete='off'
              checked={subCategory === 'Archived'}
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio7'>
              Archived
            </label>

            <input
              type='radio'
              className='btn-check'
              name='subbtnradio'
              id='btnradio8'
              value='All Time Favorites'
              autoComplete='off'
              checked={subCategory === 'All Time Favorites'}
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
            />
            <label className='btn btn-outline-warning' htmlFor='btnradio8'>
              All Time Favourites
            </label>
          </div>
        </div>
        <div className='row justify-content-evenly'>
          {events.length === 0 && <h1 id='not-found'>No events found</h1>}
          {events.length > 0 &&
            events.map((e) => <Card key={e.id} event={e} />)}
        </div>
        {totalPages > 0 && (
          <div>
            <nav aria-label='Page navigation example'>
              <ul className='pagination justify-content-center'>
                {page === 1 ? (
                  <></>
                ) : (
                  <li className='page-item shadow' onClick={decrease}>
                    <a className='page-link' href='/#' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                    </a>
                  </li>
                )}

                <li className='page-item shadow'>
                  <a className='page-link' href='/#'>
                    Page {page} of {totalPages}
                  </a>
                </li>
                {page === totalPages ? (
                  <></>
                ) : (
                  <li className='page-item shadow' onClick={increase}>
                    <a className='page-link' href='/#' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div className='position-absolute' style={{ top: '52vh', right: '0' }}>
        <Tags tags={tags} handleSearchByTags={handleSearchByTags} />
      </div>
    </div>
  );
};

export default Home;
