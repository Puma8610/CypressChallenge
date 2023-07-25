///<reference types="cypress"/>

import Get from "../support/APIMethods/GET";
import Post from "../support/APIMethods/POST";
import Put from "../support/APIMethods/PUT";



describe('API Testing', () => {

    const post = new Post()
    const get = new Get()
    const put = new Put()

    it.only('API E2E flow', () => {
        post.Post()
        get.Get()
        put.Put()
        get.Get()

    })

  })