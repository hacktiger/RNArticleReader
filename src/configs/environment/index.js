

const DEFAULT_TIMEOUT = 3000
const HEADERS = {
  'Content-Type': 'application/json'
}
const ENVIRONMENT = {
  // type : 'article_reader'
  article_reader: {
    // envs {'QA', 'STG', 'PRD'}
    QA: {
      endPoint: 'https://server-article-reader-api.herokuapp.com',
      timeout: DEFAULT_TIMEOUT,
      headers: HEADERS
    },
    STG: {
      endPoint: 'https://server-article-reader-api.herokuapp.com',
      timeout: DEFAULT_TIMEOUT,
      headers: HEADERS
    },
    PRD: {
      endPoint: 'http://dataservice.accuweather.com',
      timeout: DEFAULT_TIMEOUT,
      headers: HEADERS
    }
  },
  // type : 'google'
  google: {
    QA: {
      endPoint: 'https://example.com',
      timeout: DEFAULT_TIMEOUT,
      headers: HEADERS
    },
    STG: {
      endPoint: 'https://exampleSTG.com',
      timeout: DEFAULT_TIMEOUT,
      headers: HEADERS
    },
    PRD: {
      endPoint: 'https://examplePRD.com',
      timeout: DEFAULT_TIMEOUT,
      headers: HEADERS
    }
  },
}



// export environment
export default ENVIRONMENT
