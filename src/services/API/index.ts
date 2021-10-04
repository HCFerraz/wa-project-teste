import axios from 'axios'

export const questionsFetch = axios.create({
  baseURL: `https://opentdb.com/`,
});