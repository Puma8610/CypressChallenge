class Get{

    Get(){
        let createdUser='f126'
        cy.request({
          method: 'GET',
          url: "https://petstore.swagger.io/v2/user/" + createdUser
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.id).to.eq(126)
          expect(response.body.username).to.eq("f126")
          expect(response.body.firstName).to.eq("Frank")
          expect(response.body.lastName).to.eq("v")
          expect(response.body.email).to.eq("f1@asdf.com")
          expect(response.body.password).to.eq("asdf12")
          expect(response.body.phone).to.eq("12345")
          expect(response.body.userStatus).to.eq(0)
        })
    }
}

export default Get;