describe("API Tests GET/POST/PUT/DELETE", () => {
  it("should return user data for user 1", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
      },
    );
  });

 it("should create a new post", () => {
    const newPost = {
    title: "Portfolio Title",
    body: "Portfolio Body",
    userId: 1,
  };
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", newPost).then((response) => {

      // Verify the response status ais 201 Created
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");

      // Verify the response body contains the sent data
      expect(response.body.title).to.eq(newPost.title);
      expect(response.body.body).to.eq(newPost.body);
      expect(response.body.userId).to.eq(newPost.userId);
    });
  });

  it("should delete user", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);

        // Verify the response body is empty after deletion
        expect(response.body).to.be.empty;
      },
    );
  });

  it("PUT /posts/1 should update the post", () => {
    const updatedPost = {
      id: 1,
      title: "Updated Title",
      body: "Updated Body",
      userId: 3,
    };

    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: updatedPost,
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Validate response body structure
      expect(response.body).to.have.property("id", 1);
      expect(response.body.title).to.eq(updatedPost.title);
      expect(response.body.body).to.eq(updatedPost.body);
      expect(response.body.userId).to.eq(updatedPost.userId);

    });
  });


   it("should return 404 for invalid user", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/9999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.be.empty;
    });
  });

});