import React, { Fragment, useState, useEffect } from 'react';
import uuid from 'react-uuid';
const Tags = (props) => {
  const [tagList, setTagList] = useState([]);

  const { tags } = props.tags;
  const handleSearchByTags = props.handleSearchByTags;

  useEffect(() => {
    handleSearchByTags(tagList.toString());
    // eslint-disable-next-line
  }, [tagList]);

  const handleCheck = async (e) => {
    if (!tagList.includes(e.target.value)) {
      let tl = [...tagList, e.target.value];
      setTagList(tl);
    } else {
      let tl = [...tagList];
      tl = tl.filter((item) => item !== e.target.value);
      setTagList(tl);
    }
  };

  return (
    <Fragment>
      <button
        className='btn btn-sm tags-btn'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight'
        aria-controls='offcanvasRight'
        style={{ fontSize: '35px' }}
      >
        <i className='far fa-caret-square-left'></i>
      </button>

      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='offcanvas-header'>
          <h5 id='offcanvasRightLabel'>Search by tags</h5>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          {tags != null &&
            tags.map((tag) => (
              <Fragment key={uuid()}>
                <input
                  type='checkbox'
                  className='btn-check'
                  id={tag}
                  value={tag}
                  autoComplete='off'
                  onChange={(e) => handleCheck(e)}
                  checked={tagList.includes(tag)}
                />
                <label
                  style={{ fontSize: '14px', margin: '5px' }}
                  className='btn btn-sm btn-outline-secondary'
                  htmlFor={tag}
                >
                  {tag}
                </label>
              </Fragment>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Tags;
