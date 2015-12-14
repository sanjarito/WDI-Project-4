angular.module('userCtrl', ['userService'])

.controller('userController', function(User){

  var userCtrl = this

  // set a processing variable to show loading things
  userCtrl.processing = true

  // grab all the users on pager load
  User.all()
      .success(function(data){
        // when all the users come back, remove the processing variable
        userCtrl.processing = false

        // bind the users that come back to userCtrl.users
        userCtrl.users = data
      })

  // creating a method to delete a user
  userCtrl.deleteUser = function(id){
    userCtrl.processing = true

    User.delete(id)
        .success(function(data){
          User.all()
              .success(function(data){
                userCtrl.processing = false
                userCtrl.users = data
              })
        })
      }
})

.controller('userCreateController', function(User){
  var userCtrl = this

  // variable to hide/show elements of the view differentiates between create or edit pages
  userCtrl.type = 'create'

  userCtrl.saveUser = function(){
    userCtrl.processing = true
    userCtrl.message = ''

    // use the create function in the userService
    User.create(userCtrl.userData)
        .success(function(data){
          userCtrl.processing = false
          userCtrl.userData = {}
          userCtrl.message = data.message
        })
  }
})

.controller('userEditController', function($routeParams, User){
  var userCtrl = this

  userCtrl.type = 'edit'

  User.get($routeParams.user_id)
      .success(function(data){
        userCtrl.userData = data
      })
  userCtrl.saveUser = function(){
      userCtrl.processing = true
      userCtrl.message = ''

      User.update($routeParams.user_id, userCtrl.userData)
          .success(function(data){
            userCtrl.processing = false

            // clear the form
            userCtrl.userData = {}

            // bind the message from our API to userCtrl.message
            userCtrl.message = data.message
          })
  }
})
