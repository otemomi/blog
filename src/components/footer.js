import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2019 otemomi. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>

      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
