import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

interface TimelineBaseProps {
    specs: {
        value: number,
        text: string
    }[]
}

const Timeline: React.FC<TimelineBaseProps> = ({ specs }) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClick = (step: number) => {
        setActiveStep(step)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {specs.map((option, index) => {
                    return (
                        <Step key={`${option.text} ${option.value}`} >
                            <StepLabel onClick={() => handleClick(index)}></StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            {activeStep !== specs.length && (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                            {activeStep === specs.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Timeline