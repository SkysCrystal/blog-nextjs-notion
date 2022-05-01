// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', 'G-G6E86FELGH', {
      page_path: url,
    })
  }
  
  // log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }

