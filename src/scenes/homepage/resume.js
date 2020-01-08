import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import resumeData from "../../data/resume.json"

const ResumeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
  },
  jobTitle: {
    fontSize:
  }
})

const ResumeSection = () => {
  const classes = useStyles()

  return (
    <ResumeWrapper id="#resume">
      {resumeData.map(job => (
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <h1> {job.role} </h1>
          </CardContent>
        </Card>
      ))}
    </ResumeWrapper>
  )
}

export default ResumeSection
