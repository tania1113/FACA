import React, { useState} from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@mui/material'
import { makeStyles } from '@mui/styles'
import fondo from './assets/images/fondo.png'
import LockIcon from '@mui/icons-material/Lock'

const useStyles = makeStyles(theme=>({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh' 
    },
    container:{
      opacity:'0,8',
      height: '60%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
        marginTop: 0,
        width: '100%',
        heigth: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: ' column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(3, 0, 2)
    }

}))
const App = () => {
  const [body, setBody] = useState({nickname: '', password: ''})
  const classes = useStyles()

  const handleChange = e => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () =>{
    console.log(body)
  }
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline/>
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
        <div className={classes.div}>
            <Avatar className={classes.avatar}>
              <LockIcon/>
            </Avatar>
            <Typography component='h1' variant='h5'>Sign In</Typography>
            <form className={classes.form}>
              <TextField 
                fullWidth
                autoFocus
                color='secondary'
                margin='normal'
                variant='outlined'
                label='NickName'
                name='nickname'
                values={body.nickname}
                onChange={handleChange}
              />
              <TextField 
                fullWidth
                type='password'
                color='secondary'
                margin='normal'
                variant='outlined'
                label='Password'
                name='password'
                values={body.password}
                onChange={handleChange}
              />
              <Button 
                fullWidth
                variant='outlined'
                color='secondary'
                className={classes.Button}
                onClick={()=>onSubmit()}
              >
                Sign In
              </Button>
            </form>
        </div>
      </Container>
        
    </Grid>
  )
}

export default App