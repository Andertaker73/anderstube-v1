import youtubeSearch from "youtube-api-v3-search"
import YTApi from "../../api"

const API_KEY = YTApi

export const searchVideoStarter = () => {
  return {
    type: "SEARCH_VIDEO_STARTER",
    loading: true,
    error: false,
  }
}

export const searchVideoSuccess = (videos) => {
  return {
    type: "SEARCH_VIDEO_SUCESSO",
    videos,
    loading: false,
    error: false,
  }
}

export const searchVideoError = () => {
  return {
    type: "SEARCH_VIDEO_ERROR",
    loading: false,
    error: true,
  }
}

export const searchVideo = (term) => {
  return (dispatch) => {
    dispatch(searchVideoStarter())
    youtubeSearch(API_KEY, { q: term })
      .then((data) => dispatch(searchVideoSuccess(data.items)))
      .catch(() => dispatch(searchVideoError()))
  }
}
