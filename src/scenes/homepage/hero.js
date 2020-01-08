import React from "react"
import styled from "styled-components"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core/styles"
import indigo from "@material-ui/core/colors/indigo"

const HomepageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: url("https://hackdoor.imgix.net/authors/3nxYO2ek/coverimage.jpg?w=1920&h=1080&fit=crop&q=45");
  background-size: cover;
  background-position: center center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    min-height: inherit;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 50%, #121212),
      linear-gradient(0deg, rgba(25, 26, 36, 0.8), rgba(25, 26, 36, 0.8));
  }
`

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
  },
  title: {
    color: indigo[50],
    zIndex: 1,
  },
  subtitle: {
    color: indigo[100],
    fontWeight: 100,
    zIndex: 1,
  },
  learnMoreCta: {
    position: "absolute",
    bottom: theme.spacing(5),
  },
}))

const HomepageHero = () => {
  const classes = useStyles()

  return (
    <HomepageWrapper>
      <Avatar
        alt="Michele Riva"
        src="https://hackdoor.imgix.net/authors/3nxYO2ek/profileimage.jpg?w=200&h=200&fit=crop&q=100"
        className={classes.large}
      />
      <h1 className={classes.title}> Michele Riva </h1>
      <h2 className={classes.subtitle}> Software Engineer </h2>

      {/* <Fab
        variant="extended"
        href="#resume"
        size="medium"
        className={classes.learnMoreCta}
      >
        <KeyboardArrowDownIcon />
        More about me
      </Fab> */}
    </HomepageWrapper>
  )
}

export default HomepageHero
