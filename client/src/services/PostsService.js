/* eslint-disable */

import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },

  addPost (params) {
    return Api().post('posts', params)
  },

  updatePost (params) {
    return Api().put(`posts/${params.id}/edit`, params)
  },

  getPost (params) {
    return Api().get(`posts/${params.id}/edit`)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
