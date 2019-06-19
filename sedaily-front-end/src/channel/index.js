import { Socket } from 'phoenix'
import chat from '../../config/chatConfig'
import store from '../store'

export const socket = new Socket(chat.websocketURL)

export function joinChatChannel ({ token }) {
  const lobbyChannel = socket.channel('room:lobby', { token })
  lobbyChannel.socket.connect()

  socket.onError(() => store.commit('setChatOffline'))
  socket.onClose(() => store.commit('setChatOffline'))

  lobbyChannel.join()
    .receive('ok', ({ messages }) => {
      messages.reverse()
      store.commit('setChatOnline')
      messages.map((message) => {
        store.commit('addChatMessage', message)
      })
    })

  lobbyChannel.on('new_message', (message) => {
    store.commit('addChatMessage', message)
  })

  return lobbyChannel
}
