module.exports = {
    //this will check if you are authenticated will be called on all protected routes
    auth : (req, res, next)=> {
    if(req.isAuthenticated())
        return next()
    else
       res.redirect('/');
    },

    //this check if you have a session and will be called on the login route
    loggedIn:async (req, res, next)=>{
        if(req.isAuthenticated()){
            let user=await req.user
            let role = user.Role.name
               if(role == 'admin')
                return res.redirect('admin/dashboard')
            if(role == 'user' )
                return res.redirect('user/dashboard')
        }else{
            return next()
        }
            //this.redirect(res, req.user.User_role.Role.role_name)
    },

    //this will help handle redirects
    redirect : (req, res, role)=>{
           req.flash('user', req.user)
            if(role == 'admin')
                return res.redirect('admin/dashboard')

            if(role == 'user' )
                return res.redirect('user/dashboard')
    },
    //this will be called on all User routes
    userPermission:async (req, res, next)=>{
        let user = JSON.parse(JSON.stringify(await req.user))
       // console.log(user.UserRole.Role)
        if(user.Role.role_name=='user' ){
            return next()
        }else{
            req.logOut()
            req.flash("error", "Unathorised!")
            res.redirect("/login")
        }
    },

    //this will be called on all Admin routes
    adminPermission :async (req, res, next)=>{
        let user = JSON.parse(JSON.stringify(await req.user))
       // console.log(user.UserRole.Role)
        if(user.UserRole.Role.role_name=='admin'){
            return next()
        }else{
            req.logOut()
            req.flash("error", "forbidden! Unathorised Access")
            res.redirect("/login")
        }
    }
}