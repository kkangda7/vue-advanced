import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
 baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
async function fetchNewsList() {
  try {
    // return axios.get(config.baseUrl + 'news/1.json')
    const response = await axios.get(`${config.baseUrl}news/1.json`)
    return response
  }
  catch (err) {
    console.log(err);
  }
}

function fecthJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fecthAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUserList(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fecthItemList(item) {
  return axios.get(`${config.baseUrl}item/${item}.json`)
}

export {
  fetchNewsList,
  fecthJobsList,
  fecthAskList,
  fetchUserList,
  fecthItemList
}