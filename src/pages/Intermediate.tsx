import { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router';
import { useAppContext } from '../context/app';
import { questionsFetch } from '../services/API';

import PageContainer from '../components/PageContainer';
import QuizContainer from '../components/QuizContainer';
import Loader from '../components/Loader'
import { Button, Box, FormLabel } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
interface ResultProps {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  answers: string[],
  given_answer: string,
  incorrect_answers: string[]
}
interface APIResponseProps {
  response_code: number,
  results: ResultProps[]
}

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
  const { numberOfQuestions, setAPIResponse, loading, setLoading, setUserIsAllowed } = useAppContext()
  const [advance, setAdvance] = useState<boolean>(false)
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    const getQuestionsData = async () => {
      setLoading(true)
      try {
        const { data } = await questionsFetch.post<null, { data: APIResponseProps }>(`api.php?amount=${numberOfQuestions}`)
        data.results.forEach((item: any) => {
          item['given_answer'] = ""
          item['incorrect_answers'].push(item['correct_answer'])
          item['answers'] = item['incorrect_answers']
          delete item['incorrect_answers']
        })
        setAPIResponse(data)
        setUserIsAllowed(true)
        history.push('/quiz')
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (advance) getQuestionsData()
  }, [advance])
  
  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAdvance(true)
  })

  return (
    <Fragment>
      {loading && <Loader />}
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
    </Fragment>
  )
}

export default Intermediate;