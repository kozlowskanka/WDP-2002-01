import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Stars extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    product: PropTypes.string,
    mouseMove: PropTypes.func,
  };

  render() {
    const { products, mouseMove } = this.props;

    for (let product of products) {
      if (product.id === this.props.product) {
        return (
          <div>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {product.opinion > 0 ? (
                  i <= product.opinion ? (
                    <FontAwesomeIcon
                      onMouseMove={() => mouseMove(product.id, i)}
                      icon={faStar}
                      className={styles.opinionStar}
                    >
                      {i} stars
                    </FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon
                      onMouseMove={() => mouseMove(product.id, i)}
                      icon={farStar}
                    >
                      {i} stars
                    </FontAwesomeIcon>
                  )
                ) : i <= product.stars ? (
                  <FontAwesomeIcon
                    onMouseMove={() => mouseMove(product.id, i)}
                    icon={faStar}
                  >
                    {i} stars
                  </FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    onMouseMove={() => mouseMove(product.id, i)}
                    icon={farStar}
                  >
                    {i} stars
                  </FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        );
      }
    }
  }
}

export default Stars;