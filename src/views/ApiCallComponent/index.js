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
      Page for Registering a Book
    </Typography>
    <Paper elevation={4}>
      <Typography variant="body2">
        This is a section which shows the logged in user profile details.
      </Typography>
    </Paper>
    </>
  )
}

export default ApiCallComponent