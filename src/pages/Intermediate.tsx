import { useState, useEffect } from 'react';

import { Button, Box, FormLabel } from '@mui/material';

import { makeStyles } from '@material-ui/styles';

import { useHistory } from 'react-router';

import PageContainer from '../components/PageContainer';
import QuizContainer from '../components/QuizContainer';

import { useAppContext } from '../context/app';
import { questionsFetch } from '../services/API';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
})

const Intermediate: React.FC = () => {
  const { numberOfQuestions, setAPIResponse } = useAppContext()
  const [advance, setAdvance] = useState<boolean>(false)

  const classes = useStyles()

  const history = useHistory()
  useEffect(() => {
    const getQuestionsData = async () => {
      try {
        const { data } = await questionsFetch.post(`api.php?amount=${numberOfQuestions}`)
        setAPIResponse(data)
        history.push("quiz")
      } catch (error) {
        console.log(error)
      }
    }
    if (advance) getQuestionsData()
  }, [advance])

  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAdvance(true)
  })

  return (
    <PageContainer>
      <QuizContainer>
        <Box className={classes.root} component="form" onSubmit={handleSubmit}>
          <FormLabel sx={{ color: "#000", fontSize: "1.25rem" }}>Tudo pronto, vamos começar?</FormLabel>
          <div className="flex justify-between w-44 mt-4">
            <Button onClick={() => history.goBack()} sx={{ width: 80 }} color="error" size="small" variant="contained" type="button">
              Cancel
            </Button>
            <Button sx={{ width: 80 }} size="small" variant="contained" type="submit">
              Start
            </Button>
          </div>
        </Box>
      </QuizContainer>
    </PageContainer>
  )
}

export default Intermediate;