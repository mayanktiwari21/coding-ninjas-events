import React, { Fragment } from 'react';
import uuid from 'react-uuid';
const Card = (props) => {
  const {
    cover_picture,
    name,
    short_desc,
    seats_filled,
    venue,
    fees,
    event_start_time,
    end_time,
    card_tags,
    registration_status,
    slug,
  } = props.event;

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  var unixTimestamp = event_start_time;
  var date1 = new Date(unixTimestamp * 1000);
  var timeString1 = date1.toLocaleTimeString();
  var time1 = `${timeString1.substring(
    0,
    timeString1.lastIndexOf(':')
  )} ${timeString1.substring(timeString1.indexOf(' ') + 1)}`;
  var d1 = `${time1}, ${date1.getDate()} ${
    months[date1.getMonth()]
  } ${date1.getFullYear()}`;

  var regUnixTimestamp = end_time;
  var date2 = new Date(regUnixTimestamp * 1000);
  var timeString2 = date2.toLocaleTimeString();
  var time2 = `${timeString2.substring(
    0,
    timeString2.lastIndexOf(':')
  )} ${timeString2.substring(timeString2.indexOf(' ') + 1)}`;
  var d2 = `${date2.getDate()} ${months[date2.getMonth()]}, ${time2}`;

  return (
    <Fragment>
      <div className='col-lg-4 col-md-6 col-12'>
        <a
          href={`https://www.codingninjas.com/events/${slug}`}
          style={{ textDecoration: 'none' }}
        >
          <div className='shadow card text-center text-dark bg-light mb-3 overflow-auto'>
            <Fragment>
              <img src={cover_picture} className='card-img-top' alt={name} />
              {registration_status === 'REGISTRATIONS_OPEN' && (
                <div className='card-img-overlay'>
                  <div
                    className='card-text float-start'
                    style={{
                      backgroundColor: '#fff',
                      fontSize: '12px',
                      opacity: '0.8',
                    }}
                  >
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif'
                      alt='...'
                      height='15px'
                      width='15px'
                    />
                    Registrations open till {d2}
                  </div>
                </div>
              )}
            </Fragment>

            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              <ul className='list-group list-group-horizontal'>
                <li className='list-group-item'>
                  <em>Starts on: </em>
                  {d1}
                </li>
                <li className='list-group-item'>
                  <em>Entry fee: </em>
                  {fees}
                </li>
                <li className='list-group-item'>
                  <em>Venue: </em>
                  {venue}
                </li>
              </ul>
              <div className='breakline'></div>
              <p className='card-text'>{short_desc}</p>
              <ul className='list-group list-group-horizontal'>
                {card_tags.length > 0 &&
                  card_tags.map((tag) => (
                    <li
                      key={uuid()}
                      className='list-group-item list-group-item-secondary'
                    >
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>

            <div className='breakline'></div>

            <div className='row' style={{ marginTop: '15px' }}>
              <div className='col-5 me-auto card-foot'>
                <strong>{seats_filled}</strong> people registerd
              </div>
              {registration_status === 'REGISTRATIONS_OPEN' && (
                <div id='register-now' className='col-5 ms-auto card-foot'>
                  <button type='button' className='btn'>
                    Register Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export default Card;
