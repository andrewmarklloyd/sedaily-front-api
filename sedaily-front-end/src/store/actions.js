import authActions from './actions/auth.actions'
import userActions from './actions/user.actions'
import topicsActions from './actions/topics.actions'
import postActions from './actions/posts.actions'
import commentActions from './actions/comments.actions'
import relatedLinksActions from './actions/relatedLinks.actions'
import playerActions from './actions/player.actions'
import feedActions from './actions/feed.actions'
import subscriptionActions from './actions/subscription.actions'
import chatActions from './actions/chat.actions'
import loggingPostActions from './actions/logging.post.actions'
import jobActions from './actions/job.actions'
import companyActions from './actions/company.actions'
import forumActions from './actions/forum.actions'

export default {
  ...authActions,
  ...companyActions,
  ...userActions,
  ...topicsActions,
  ...commentActions,
  ...relatedLinksActions,
  ...playerActions,
  ...postActions,
  ...subscriptionActions,
  ...feedActions,
  ...chatActions,
  ...loggingPostActions,
  ...jobActions,
  ...forumActions
}
