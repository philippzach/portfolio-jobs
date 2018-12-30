import React, { Component } from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';

export default class CategoriesStartup extends Component {
  render() {
    const { categories } = this.props;
    return (
      <>
        {categories.map((cat) => (
          <React.Fragment key={cat}>
            {/* {!!i && ', '} */}
           <a target="_blank" href={`https://google.com/search?q=${kebabCase(cat)}&`}>{cat}</a>
          </React.Fragment>
        ))}
      </>
    );
  }
}

CategoriesStartup.propTypes = {
  categories: PropTypes.array.isRequired,
};
