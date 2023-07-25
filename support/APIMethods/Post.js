class Post{

    Post(){
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: {
              id: 126,
              username: 'f126', 
              firstName: 'Frank', 
              lastName: 'v', 
              email: 'f1@asdf.com', 
              password: 'asdf12', 
              phone: '12345', 
              userStatus: 0, 
            },
          }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.type).to.eq("unknown")
            expect(response.body.message).to.eq("126")
          })
    }

}

export default Post;