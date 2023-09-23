import { Paper, Typography } from "@mui/material"
import api from "../../utils/axiosSetup/api"
import { GET_ALL_USER_NAMES, GET_USER_PROFILE_DETAILS } from "../../utils/axiosSetup/requestRoutes"
import { useEffect } from "react"

const ApiCallComponent = () => {

  useEffect(() => {

    // HERE, WE ARE USING THE GET METHOD FROM api, WHERE THE authToken AUTOMATICALLY GETS ATTACHED TO THE REQUEST HEADERS. IF THE SYSTEM FAILS TO FIND THE authToken FROM THE LOCALSTORAGE, THEN THE USER IS REDIRECTED TO THE LOGIN SCREEN.
    api.GET(GET_USER_PROFILE_DETAILS).then(res => {
      // DO SOMETHING WITH THE RESPONSE OBJECT
    }).catch(err => {
      // DO SOMETHING WITH THE ERROR OBJECT
    })


    // HERE, WE ARE USING THE GET_WITHOUT_AUTH METHOD FROM api, WHERE THE authToken IS NOT ATTACHED TO THE REQUEST HEADERS. THIS METHOD IS TO BE USED FOR PUBLIC ROUTES.
    api.GET_WITHOUT_AUTH(GET_ALL_USER_NAMES).then(res => {
      // DO SOMETHING WITH THE RESPONSE OBJECT
    }).catch(err => {
      // DO SOMETHING WITH THE ERROR OBJECT
    })

  }, [])

  return (
    <>
    <Typography variant="h2">
      USER PROFILE PAGE
    </Typography>
    <Paper elevation={4}>
      <Typography variant="h4">
        This page gets the user profile information and displays it on the screen. It is not working right now because we don't have an api. To view the working of the whole structure, open the code and visit the following pages.<br /><br /><br />

        src/App.js -- Here we set up the interceptors<br /><br />
        src/views/Login/index.js -- Here we call the auth api, which returns us the refreshToken which we store in localStorage<br /><br />
        src/views/ApiCallComponent/index.js -- Here we call different apis, one with authorization and one without authorization.<br /><br />
        src/utils/api.js -- Here we have defined the axios api constructor, and we have defined all the methods for post/get/put with and without authorziation<br /><br />
        src/utils/axios-interceptors.js -- Here we have the logic of calling the refreshToken, on every request, to send a fresh accessToken with the request here.<br /><br />


        Thanks..
      </Typography>
    </Paper>
    </>
  )
}

export default ApiCallComponent