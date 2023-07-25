class Put{

    Put(){
        let createdUser='f126'
        cy.request({
          method: 'PUT',
          url: "https://petstore.swagger.io/v2/user/" + createdUser,
          body: {
            firstName: 'Franky', 
            email: 'f12@asdf.com'
          },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.type).to.eq("unknown")
            expect(response.body.message).to.eq("0")
        })
    }
}

export default Put;