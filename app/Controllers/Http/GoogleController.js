'use strict'
const axios = require('axios')
const cheerio = require('cheerio')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with googles
 */
class GoogleController {
  /**
   * Show a list of all googles.
   * GET googles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const url = request.all()
    let qq = ''
    await axios.get(url.url).then( (res) => {
      const $ = cheerio.load(res.data)
      $('body').each( (index , element) => {  
         const title = $(element).find('script').html()
         const res = title.split("=");
         const arr = res[1].slice(0 , -1);
         const data = JSON.parse(arr)
         const ready = data[1][1]
         const rr = JSON.stringify(ready)
         qq = JSON.parse(rr)
  })
  })
  const last = []
  let i = 0
  qq.forEach((element) => {
    let answer = []
if (element[4]){
  let j = 0
  element[4][0][1].forEach((element) => {
    answer[j] = 
        element[0]
        j++
  })
last[i] = {
  question: element[1],
  answers : answer
}
    i++
}
  })
  response.json(last)
  }

  /**
   * Render a form to be used for creating a new google.
   * GET googles/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new google.
   * POST googles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single google.
   * GET googles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing google.
   * GET googles/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update google details.
   * PUT or PATCH googles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a google with id.
   * DELETE googles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GoogleController
