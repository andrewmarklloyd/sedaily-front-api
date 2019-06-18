import { PlayerState } from './../utils/playerState'

export default {
  playerState: PlayerState.STOPPED,
  activePlayerPost: {title: {}},
  activeType: null,
  searchTerm: null,
  posts: {},
  entityComments: {}, // arrays of ids, only root comments
  comments: {}, // Map of all comments, key is comment._id
  postRelatedLinks: {},
  feed: [],
  placeholderAvatar: 'https://s3-us-west-2.amazonaws.com/sd-profile-pictures/profile-icon-9.png',
  me: {},
  users: {},
  commentsView: false,
  lists: {
    top: [],
    new: [],
    recommendation: []
  },
  chat: {
    settings: {
      displayBox: true
    },
    online: false,
    messages: []
  },
  topics: {
    all: null,
    user: null,
    post: null,
    mostPopular: null,
    searchedAllTopics: null
  },
  searchTopic: [],
  token: localStorage.getItem('token'),
  loggingEnabled: true,
  jobs: [],
  forumThreadIdsList: [],
  forumThreads: {},
  defaultMetaContent: {
    'twitter:card': 'summary_large_image',
    'twitter:site': '@software_daily',
    'twitter:creator': '@the_prion',
    'og:url': location.origin,
    'og:title': 'Software Daily',
    'og:description': 'Software Daily podcast episodes, forum, job board and more...',
    'description': 'Software Daily podcast episodes, forum, job board and more...',
    'og:image': 'https://softwareengineeringdaily.com/wp-content/uploads/2015/08/sed_logo_updated.png',
  },
  analytics: ''
}
