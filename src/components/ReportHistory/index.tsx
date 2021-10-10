import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '@mui/material';

const ReportHistory: React.FC = () => {
    const history = useHistory()
    return (
        <div className="mt-4">
            <p className="text-xl text-main-blue-900 font-medium mb-4">Veja seu histórico de pontos!</p>
            <Button sx={{ color: "#33a4a6", ":hover": { background: "#33a4a6", color: "white" } }} variant="outlined" onClick={() => history.push("/historico")}>Visualizar</Button>
        </div>
    )
}

export default ReportHistory;